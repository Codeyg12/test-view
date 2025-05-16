package com.codey.test.test_visualizer_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.Step;

@Repository
public interface StepRepository extends JpaRepository<Step, Long> {
    List<Step> findByScenario(Scenario scenario);

    List<Step> findByScenarioOrderByOrderIndexAsc(Scenario scenario);
}
