package com.codey.test.test_visualizer_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.User;

@Repository
public interface FeatureRepository extends JpaRepository<Feature, Long> {
    List<Feature> findByOwner(User owner);

    List<Feature> findByNameContainingIgnoreCase(String name);
}