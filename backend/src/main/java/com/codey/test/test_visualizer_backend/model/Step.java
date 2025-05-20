package com.codey.test.test_visualizer_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "steps")
@Data
@NoArgsConstructor
public class Step {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String description;

  @Column(name = "order_index")
  private Integer orderIndex;

  private String expected;

  private String actual;

  @Column(name = "error_message")
  private String errorMessage;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "scenario_id")
  private Scenario scenario;

  private TestStatus status;

  public void setStatus(TestStatus status) {
    if (!status.isValidForStep()) {
      throw new IllegalArgumentException("Invalid status: " + status);
    }
    this.status = status;
  }
}