package com.example.OnlineShoping.Repo;

import com.example.OnlineShoping.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.print.DocFlavor;

public interface Urepo extends JpaRepository<User,Integer> {
    public User findByEmail(String email);
}
