package com.codey.test.test_visualizer_backend.controller;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.User;
import com.codey.test.test_visualizer_backend.service.FeatureService;
import com.codey.test.test_visualizer_backend.service.UserService;
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
@RequestMapping("/api/features")
public class FeatureController {

  private final FeatureService featureService;
  private final UserService userService;

  public FeatureController(FeatureService featureService, UserService userService) {
    this.featureService = featureService;
    this.userService = userService;
  }

  @GetMapping
  public ResponseEntity<List<Feature>> getAllFeatures() {
    return ResponseEntity.ok(featureService.getAllFeatures());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Feature> getFeatureById(@PathVariable Long id) {
    Optional<Feature> feature = featureService.getFeatureById(id);
    return feature.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping("/owner/{id}")
  public ResponseEntity<List<Feature>> getFeatureByOwnerId(@PathVariable Long id) {
    Optional<User> user = userService.getUserById(id);
    if (user.isPresent()) {
      return ResponseEntity.ok(featureService.getFeaturesByOwner(user.get()));
    }
    return ResponseEntity.notFound().build();
  }

  @PostMapping
  public ResponseEntity<Feature> createFeature(@RequestBody Feature feature) {
    return ResponseEntity.ok(featureService.createFeature(feature));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Feature> updateFeature(@PathVariable Long id, @RequestBody Feature feature) {
    Optional<Feature> featureOptional = featureService.getFeatureById(id);
    if (featureOptional.isPresent()) {
      feature.setId(featureOptional.get().getId());
    }
    return ResponseEntity.ok(featureService.updateFeature(feature));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Feature> deleteFeature(@PathVariable Long id) {
    Optional<Feature> featureOptional = featureService.getFeatureById(id);
    if (featureOptional.isPresent()) {
      featureService.deleteFeature(id);
    }
    return ResponseEntity.ok().build();
  }
}
