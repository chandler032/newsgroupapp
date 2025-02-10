package com.demo.newsApp.services;

import com.demo.newsApp.model.NewsResponse;

import java.util.Map;

public interface NewsService {
    Map<String, Object> getGroupedNews(String keyword, int interval, String unit);
}
