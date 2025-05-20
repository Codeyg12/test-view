package com.codey.test.test_visualizer_backend.model;

import java.util.EnumSet;
import java.util.Set;

public enum TestStatus {
  PASSED,
  FAILED,
  SKIPPED,
  PENDING,
  UNKNOWN;

  public static final Set<TestStatus> FEATURE_STATUSES = EnumSet.of(PASSED, FAILED);
  public static final Set<TestStatus> SCENARIO_STATUSES = EnumSet.of(PASSED, FAILED);
  public static final Set<TestStatus> STEP_STATUSES = EnumSet.allOf(TestStatus.class);

  public boolean isValidForFeature() {
    return FEATURE_STATUSES.contains(this);
  }

  public boolean isValidForScenario() {
    return SCENARIO_STATUSES.contains(this);
  }

  public boolean isValidForStep() {
    return STEP_STATUSES.contains(this);
  }
}