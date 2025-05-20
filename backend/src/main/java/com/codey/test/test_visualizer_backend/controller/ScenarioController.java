package com.codey.test.test_visualizer_backend.controller;

import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.service.ScenarioService;
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
@RequestMapping("/api/scenarios")
public class ScenarioController {

  private final ScenarioService scenarioService;

  public ScenarioController(ScenarioService scenarioService) {
    this.scenarioService = scenarioService;
  }

  @GetMapping
  public ResponseEntity<List<Scenario>> getAllScenarios() {
    return ResponseEntity.ok(scenarioService.getAllScenarios());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Scenario> getScenarioById(@PathVariable Long id) {
    Optional<Scenario> scenario = scenarioService.getScenarioById(id);
    return scenario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Scenario> createScenario(@RequestBody Scenario scenario) {
    return ResponseEntity.ok(scenarioService.createScenario(scenario));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Scenario> updateScenario(@PathVariable Long id, @RequestBody Scenario scenario) {
    Optional<Scenario> scenarioOptional = scenarioService.getScenarioById(id);
    if (scenarioOptional.isPresent()) {
      scenario.setId(id);
    }
    return ResponseEntity.ok(scenarioService.updateScenario(scenario));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Scenario> deleteScenario(@PathVariable Long id) {
    Optional<Scenario> scenarioOptional = scenarioService.getScenarioById(id);
    if (scenarioOptional.isPresent()) {
      scenarioService.deleteScenario(id);
    }
    return ResponseEntity.ok().build();
  }
}
