package com.example.OnlineShoping.Controller;

import com.example.OnlineShoping.Entity.Uorderdetails;
import com.example.OnlineShoping.Entity.User;
import com.example.OnlineShoping.Repo.Uorderrepo;
import com.example.OnlineShoping.Repo.Urepo;
import com.example.OnlineShoping.service.Uservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MyController {

    @Autowired
    private Uservice uservice;
    @Autowired
    private Urepo urepo;
    @Autowired
    private User user;
    @Autowired
    private Uorderrepo uorderrepo;
    @PostMapping("/user")
    public User online(@RequestBody User user)
    {

        return uservice.postUser(user);
    }
    @GetMapping("/udetail")
    public User udetails(@RequestParam String email){
      User founduser=  urepo.findByEmail(email);

        return founduser;
    }
    @PostMapping("/orderdetails")
    public Uorderdetails orderdetails(@RequestBody Uorderdetails uorderdetails ){
        return uservice.orderdetails(uorderdetails);
    }
    @GetMapping("/cart")
    public List<Uorderdetails> cartdata(@RequestParam String email){
        return uorderrepo.findAllByEmail(email);
    }
    @DeleteMapping("/orderdelete")
    public void orderdelete(@RequestParam int id){
        uorderrepo.deleteById(id);
        System.out.println("deleted");
    }
}
