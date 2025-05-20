package com.codey.test.test_visualizer_backend.service;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.TestStatus;
import com.codey.test.test_visualizer_backend.model.User;
import com.codey.test.test_visualizer_backend.repository.FeatureRepository;
import com.codey.test.test_visualizer_backend.repository.ScenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FeatureServiceImpl implements FeatureService {

  private final FeatureRepository featureRepository;
  private final ScenarioRepository scenarioRepository;

  @Autowired
  public FeatureServiceImpl(FeatureRepository featureRepository, ScenarioRepository scenarioRepository) {
    this.featureRepository = featureRepository;
    this.scenarioRepository = scenarioRepository;
  }

  @Override
  public List<Feature> getAllFeatures() {
    return featureRepository.findAll();
  }

  @Override
  public Optional<Feature> getFeatureById(Long id) {
    return featureRepository.findById(id);
  }

  @Override
  public List<Feature> getFeaturesByOwner(User owner) {
    return featureRepository.findByOwner(owner);
  }

  @Override
  public List<Feature> searchFeaturesByName(String name) {
    return featureRepository.findByNameContainingIgnoreCase(name);
  }

  @Override
  public Feature createFeature(Feature feature) {
    feature.setCreatedAt(LocalDateTime.now());
    feature.setUpdatedAt(LocalDateTime.now());
    return featureRepository.save(feature);
  }

  @Override
  public Feature updateFeature(Feature feature) {
    featureRepository.findById(feature.getId()).ifPresent(existingFeature -> {
      feature.setCreatedAt(existingFeature.getCreatedAt());
    });

    feature.setUpdatedAt(LocalDateTime.now());
    return featureRepository.save(feature);
  }

  @Override
  public void deleteFeature(Long id) {
    featureRepository.deleteById(id);
  }

  @Override
  public long countScenariosInFeature(Long featureId) {
    Optional<Feature> feature = featureRepository.findById(featureId);
    if (feature.isPresent()) {
      return scenarioRepository.findByFeature(feature.get()).size();
    }
    return 0;
  }

  @Override
  public double getFeaturePassRate(Long featureId) {
    Optional<Feature> featureOpt = featureRepository.findById(featureId);
    if (!featureOpt.isPresent()) {
      return 0.0;
    }

    Feature feature = featureOpt.get();
    List<Scenario> scenarios = scenarioRepository.findByFeature(feature);

    if (scenarios.isEmpty()) {
      return 0.0;
    }

    long passedCount = scenarios.stream()
        .filter(scenario -> scenario.getStatus() == TestStatus.PASSED)
        .count();

    return (double) passedCount / scenarios.size() * 100.0;
  }
}