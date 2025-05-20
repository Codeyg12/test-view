package com.codey.test.test_visualizer_backend.repository;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.TestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScenarioRepository extends JpaRepository<Scenario, Long> {
  List<Scenario> findByFeature(Feature feature);

  List<Scenario> findByStatus(TestStatus status);

  List<Scenario> findByFeatureAndStatus(Feature feature, TestStatus status);

}