package com.codey.test.test_visualizer_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.Scenario;

@Repository
public interface ScenarioRepository extends JpaRepository<Scenario, Long> {
    List<Scenario> findByFeature(Feature feature);

    // List<Scenario> findByStatus(TestStatus status);
    // List<Scenario> findByFeatureAndStatus(Feature feature, TestStatus status);
    List<Scenario> findByFeatureAndStatus(Feature feature);
}