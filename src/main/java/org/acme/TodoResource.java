package org.acme;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.util.Arrays;
import java.util.List;

@Path("/api/todos")
@Produces("application/json")
@Consumes("application/json")
@RolesAllowed({"user", "admin"})
public class TodoResource {
    @Inject
    TodoRepository todoRepository;


    @GET
    @Transactional
    public List<Todo> getAll(@Context SecurityContext securityContext) {
        return User.findByUsername(securityContext.getUserPrincipal().getName()).todoList;
    }

    @GET
    @Path("/{id}")
    @Transactional
    public Todo get(@Context SecurityContext securityContext, @PathParam("id") Long id) {
        User user = User.findByUsername(securityContext.getUserPrincipal().getName());
        Todo todo = user.todoList.stream().filter(t -> t.id.equals(id)).findFirst().orElse(null);
        if (todo == null) {
            throw new WebApplicationException(404);
        } else {
            return todo;
        }
    }

    @POST
    @Transactional
    public Response add(@Context SecurityContext securityContext, Todo todo) {
        User user = User.findByUsername(securityContext.getUserPrincipal().getName());
        user.todoList.add(todo);
        return Response.status(200).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Response update(@Context SecurityContext securityContext, @PathParam("id") Long id, Todo updateTodo) {
        User user = User.findByUsername(securityContext.getUserPrincipal().getName());
        Todo todo = user.todoList.stream().filter(t -> t.id.equals(id)).findFirst().orElse(null);
        if (todo == null) {
            throw new WebApplicationException(404);
        } else {
            todo.isDone = updateTodo.isDone;
            todo.date = updateTodo.date;
            todo.name = updateTodo.name;
            return Response.ok().build();
        }
    }

    @DELETE
    @Transactional
    public Response delete(@Context SecurityContext securityContext, Long[] ids) {
        User user = User.findByUsername(securityContext.getUserPrincipal().getName());
        user.todoList.removeIf(todo -> {
            Long needToDelete = Arrays.stream(ids).filter(id -> id.equals(todo.id)).findAny().orElse(null);
            if(needToDelete!=null){
                todoRepository.deleteById(needToDelete);
                return true;
            }
            return false;
        });
        return Response.ok().build();
    }
}