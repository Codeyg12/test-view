package com.codey.test.test_visualizer_backend.model;

import jakarta.persistence.*;
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

    // @Enumerated(EnumType.STRING)
    // private StepType type;

    // @Enumerated(EnumType.STRING)
    // private TestStatus status = TestStatus.NOT_RUN;

    @Column(name = "order_index")
    private Integer orderIndex;

    private String expected;

    private String actual;

    @Column(name = "error_message")
    private String errorMessage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "scenario_id")
    private Scenario scenario;
}