package com.codey.test.test_visualizer_backend.service;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.TestStatus;
import com.codey.test.test_visualizer_backend.repository.ScenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ScenarioServiceImpl implements ScenarioService {

  private final ScenarioRepository scenarioRepository;

  @Autowired
  public ScenarioServiceImpl(ScenarioRepository scenarioRepository) {
    this.scenarioRepository = scenarioRepository;
  }

  @Override
  public List<Scenario> getAllScenarios() {
    return scenarioRepository.findAll();
  }

  @Override
  public Optional<Scenario> getScenarioById(Long id) {
    return scenarioRepository.findById(id);
  }

  @Override
  public List<Scenario> getScenariosByFeature(Feature feature) {
    return scenarioRepository.findByFeature(feature);
  }

  @Override
  public List<Scenario> getScenariosByStatus(TestStatus status) {
    return scenarioRepository.findByStatus(status);
  }

  @Override
  public List<Scenario> getScenariosByFeatureAndStatus(Feature feature,
                                                       TestStatus status) {
    return scenarioRepository.findByFeatureAndStatus(feature, status);
  }

  @Override
  public List<Scenario> getScenariosByFeatureAndStatus(Feature feature) {
    return List.of();
  }

  @Override
  public Scenario createScenario(Scenario scenario) {
    scenario.setCreatedAt(LocalDateTime.now());
    scenario.setUpdatedAt(LocalDateTime.now());

    return scenarioRepository.save(scenario);
  }

  @Override
  public Scenario updateScenario(Scenario scenario) {
    // Preserve creation time
    scenarioRepository.findById(scenario.getId()).ifPresent(existingScenario -> {
      scenario.setCreatedAt(existingScenario.getCreatedAt());
    });

    scenario.setUpdatedAt(LocalDateTime.now());
    return scenarioRepository.save(scenario);
  }

  @Override
  public void deleteScenario(Long id) {
    scenarioRepository.deleteById(id);
  }

  @Override
  public void updateScenarioStatus(Long scenarioId, TestStatus status) {
    Optional<Scenario> scenarioOpt = scenarioRepository.findById(scenarioId);
    if (scenarioOpt.isPresent()) {
      Scenario scenario = scenarioOpt.get();
      scenario.setStatus(status);
      scenario.setUpdatedAt(LocalDateTime.now());
      scenarioRepository.save(scenario);
    }
  }

  @Override
  public void updateScenarioStatus(Long scenarioId) {

  }

  @Override
  public void updateExecutionTime(Long scenarioId, Long executionTimeMs) {
    Optional<Scenario> scenarioOpt = scenarioRepository.findById(scenarioId);
    if (scenarioOpt.isPresent()) {
      Scenario scenario = scenarioOpt.get();
      scenario.setExecutionTimeMs(executionTimeMs);
      scenario.setUpdatedAt(LocalDateTime.now());
      scenarioRepository.save(scenario);
    }
  }
}