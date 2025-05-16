package com.codey.test.test_visualizer_backend.service;

import java.util.List;
import java.util.Optional;

import com.codey.test.test_visualizer_backend.model.Feature;
import com.codey.test.test_visualizer_backend.model.User;

public interface FeatureService {
    List<Feature> getAllFeatures();

    Optional<Feature> getFeatureById(Long id);

    List<Feature> getFeaturesByOwner(User owner);

    List<Feature> searchFeaturesByName(String name);

    Feature createFeature(Feature feature);

    Feature updateFeature(Feature feature);

    void deleteFeature(Long id);

    long countScenariosInFeature(Long featureId);

    double getFeaturePassRate(Long featureId);
}