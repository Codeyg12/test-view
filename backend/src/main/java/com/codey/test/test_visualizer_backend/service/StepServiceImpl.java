package com.codey.test.test_visualizer_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import com.codey.test.test_visualizer_backend.model.Scenario;
import com.codey.test.test_visualizer_backend.model.Step;
import com.codey.test.test_visualizer_backend.repository.StepRepository;

@Service
public class StepServiceImpl implements StepService {

    private final StepRepository stepRepository;

    @Autowired
    public StepServiceImpl(StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    @Override
    public List<Step> getAllSteps() {
        return stepRepository.findAll();
    }

    @Override
    public Optional<Step> getStepById(Long id) {
        return stepRepository.findById(id);
    }

    @Override
    public List<Step> getStepsByScenario(Scenario scenario) {
        return stepRepository.findByScenario(scenario);
    }

    @Override
    public List<Step> getStepsByScenarioOrdered(Scenario scenario) {
        return stepRepository.findByScenarioOrderByOrderIndexAsc(scenario);
    }

    @Override
    public Step createStep(Step step) {
        if (step.getOrderIndex() == null) {
            List<Step> existingSteps = stepRepository.findByScenarioOrderByOrderIndexAsc(step.getScenario());
            step.setOrderIndex(existingSteps.size());
        }
        // if (step.getStatus() == null) {
        // step.setStatus(TestStatus.NOT_RUN);
        // }
        return stepRepository.save(step);
    }

    @Override
    public Step updateStep(Step step) {
        return stepRepository.save(step);
    }

    @Override
    public void deleteStep(Long id) {
        stepRepository.deleteById(id);
    }

    // @Override
    // public void updateStepStatus(Long stepId, TestStatus status) {
    // Optional<Step> stepOpt = stepRepository.findById(stepId);
    // if (stepOpt.isPresent()) {
    // Step step = stepOpt.get();
    // step.setStatus(status);
    // stepRepository.save(step);
    // }
    // }

    @Override
    public void updateStepError(Long stepId, String errorMessage) {
        Optional<Step> stepOpt = stepRepository.findById(stepId);
        if (stepOpt.isPresent()) {
            Step step = stepOpt.get();
            step.setErrorMessage(errorMessage);
            // step.setStatus(TestStatus.FAILED);
            stepRepository.save(step);
        }
    }

    @Override
    @Transactional
    public void reorderStep(Long stepId, Integer newOrderIndex) {
        Optional<Step> stepOpt = stepRepository.findById(stepId);
        if (!stepOpt.isPresent()) {
            return;
        }

        Step step = stepOpt.get();
        Scenario scenario = step.getScenario();
        Integer oldOrderIndex = step.getOrderIndex();

        if (oldOrderIndex.equals(newOrderIndex)) {
            return;
        }

        List<Step> steps = stepRepository.findByScenarioOrderByOrderIndexAsc(scenario);

        if (newOrderIndex < 0 || newOrderIndex >= steps.size()) {
            throw new IllegalArgumentException("Invalid order index: " + newOrderIndex);
        }

        if (newOrderIndex < oldOrderIndex) {
            for (Step s : steps) {
                if (s.getOrderIndex() >= newOrderIndex && s.getOrderIndex() < oldOrderIndex) {
                    s.setOrderIndex(s.getOrderIndex() + 1);
                    stepRepository.save(s);
                }
            }
        } else {
            for (Step s : steps) {
                if (s.getOrderIndex() > oldOrderIndex && s.getOrderIndex() <= newOrderIndex) {
                    s.setOrderIndex(s.getOrderIndex() - 1);
                    stepRepository.save(s);
                }
            }
        }

        step.setOrderIndex(newOrderIndex);
        stepRepository.save(step);
    }
}