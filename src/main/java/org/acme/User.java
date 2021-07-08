package org.acme;

import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.security.jpa.Password;
import io.quarkus.security.jpa.Roles;
import io.quarkus.security.jpa.UserDefinition;
import io.quarkus.security.jpa.Username;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@UserDefinition
public class User extends PanacheEntity {
    @Username
    public String username;
    @Password
    public String password;
    @Roles
    public String role;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    public List<Todo> todoList;

    public User() {
        todoList = new ArrayList<>();
    }

    public static void add(String username, String password, String role) {
        User user = new User();
        user.username = username;
        user.password = BcryptUtil.bcryptHash(password);
        user.role = role;
        user.persist();
    }

    public static User findByUsername(String username) {
        return find("username", username).firstResult();
    }
}
