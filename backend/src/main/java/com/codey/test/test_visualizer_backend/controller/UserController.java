package com.codey.test.test_visualizer_backend.controller;

import com.codey.test.test_visualizer_backend.model.User;
import com.codey.test.test_visualizer_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    return ResponseEntity.ok(userService.getAllUsers());
  }

  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
    Optional<User> user = userService.getUserById(id);
    return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<User> createUser(@RequestBody User user) {
    return ResponseEntity.ok(userService.createUser(user));
  }

  @PutMapping("/{id}")
  public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) {
    Optional<User> userOptional = userService.getUserById(id);
    if (userOptional.isPresent()) {
      user.setId(id);
    }
    return ResponseEntity.ok(userService.updateUser(user));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<User> deleteUser(@PathVariable("id") Long id) {
    Optional<User> userOptional = userService.getUserById(id);
    if (userOptional.isPresent()) {
      userService.deleteUser(id);
    }
    return ResponseEntity.noContent().build();
  }
}
