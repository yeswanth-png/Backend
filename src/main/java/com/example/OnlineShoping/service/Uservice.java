package com.example.OnlineShoping.service;

import com.example.OnlineShoping.Entity.Uorderdetails;
import com.example.OnlineShoping.Entity.User;
import com.example.OnlineShoping.Repo.Uorderrepo;
import com.example.OnlineShoping.Repo.Urepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Uservice {
    @Autowired
    private Urepo urepo;
    @Autowired
    private Uorderrepo uorderrepo;
    public User postUser(User user)
    {
          return  urepo.save(user);
    }
  public Uorderdetails orderdetails(Uorderdetails uorderdetails){
        return uorderrepo.save(uorderdetails);
  }
}
