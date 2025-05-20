package com.codey.test.test_visualizer_backend.service;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.TestStatus;

import java.util.List;
import java.util.Optional;

public interface ScenarioService {
  List<Scenario> getAllScenarios();

  Optional<Scenario> getScenarioById(Long id);

  List<Scenario> getScenariosByFeature(Feature feature);

  List<Scenario> getScenariosByStatus(TestStatus status);

  List<Scenario> getScenariosByFeatureAndStatus(Feature feature, TestStatus
      status);

  List<Scenario> getScenariosByFeatureAndStatus(Feature feature);

  Scenario createScenario(Scenario scenario);

  Scenario updateScenario(Scenario scenario);

  void deleteScenario(Long id);

  void updateScenarioStatus(Long scenarioId, TestStatus status);

  void updateScenarioStatus(Long scenarioId);

  void updateExecutionTime(Long scenarioId, Long executionTimeMs);
}