package com.example.OnlineShoping.Repo;

import com.example.OnlineShoping.Entity.Uorderdetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Uorderrepo  extends JpaRepository<Uorderdetails,Integer> {

  public List<Uorderdetails> findAllByEmail(String email);

}
