package com.codey.test.test_visualizer_backend.service;

import java.util.List;
import java.util.Optional;

import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.Step;

public interface StepService {
    List<Step> getAllSteps();

    Optional<Step> getStepById(Long id);

    List<Step> getStepsByScenario(Scenario scenario);

    List<Step> getStepsByScenarioOrdered(Scenario scenario);

    Step createStep(Step step);

    Step updateStep(Step step);

    void deleteStep(Long id);

    // void updateStepStatus(Long stepId, TestStatus status);

    void updateStepError(Long stepId, String errorMessage);

    void reorderStep(Long stepId, Integer newOrderIndex);
}