package com.codey.test.test_visualizer_backend.controller;

import com.codey.test.test_visualizer_backend.model.Step;
import com.codey.test.test_visualizer_backend.service.StepService;
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
@RequestMapping("/api/steps")
public class StepController {

  private final StepService stepService;

  public StepController(StepService stepService) {
    this.stepService = stepService;
  }

  @GetMapping
  public ResponseEntity<List<Step>> getAllSteps() {
    return ResponseEntity.ok(stepService.getAllSteps());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Step> getStepById(@PathVariable Long id) {
    Optional<Step> step = stepService.getStepById(id);
    if (step.isPresent()) {
      return ResponseEntity.ok(step.get());
    }
    return ResponseEntity.notFound().build();
  }

  @PostMapping
  public ResponseEntity<Step> createStep(@RequestBody Step step) {
    return ResponseEntity.ok(stepService.createStep(step));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Step> updateStep(@PathVariable Long id, @RequestBody Step step) {
    Optional<Step> stepOptional = stepService.getStepById(id);
    if (stepOptional.isPresent()) {
      step.setId(id);
    }
    return ResponseEntity.ok(stepService.updateStep(step));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Step> deleteStep(@PathVariable Long id) {
    Optional<Step> stepOptional = stepService.getStepById(id);
    if (stepOptional.isPresent()) {
      stepService.deleteStep(id);
    }
    return ResponseEntity.ok().build();
  }
}
