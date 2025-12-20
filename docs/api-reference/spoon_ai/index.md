---
id: spoon_ai
slug: /api-reference/spoon_ai//index
title: spoon_ai
---

# Table of Contents

* [spoon\_ai](#spoon_ai)
* [spoon\_ai.graph](#spoon_ai.graph)
  * [GraphExecutionError](#spoon_ai.graph.GraphExecutionError)
  * [NodeExecutionError](#spoon_ai.graph.NodeExecutionError)
  * [StateValidationError](#spoon_ai.graph.StateValidationError)
  * [CheckpointError](#spoon_ai.graph.CheckpointError)
  * [GraphConfigurationError](#spoon_ai.graph.GraphConfigurationError)
  * [EdgeRoutingError](#spoon_ai.graph.EdgeRoutingError)
  * [InterruptError](#spoon_ai.graph.InterruptError)
  * [Command](#spoon_ai.graph.Command)
  * [StateSnapshot](#spoon_ai.graph.StateSnapshot)
  * [InMemoryCheckpointer](#spoon_ai.graph.InMemoryCheckpointer)
    * [\_\_init\_\_](#spoon_ai.graph.InMemoryCheckpointer.__init__)
    * [save\_checkpoint](#spoon_ai.graph.InMemoryCheckpointer.save_checkpoint)
    * [get\_checkpoint](#spoon_ai.graph.InMemoryCheckpointer.get_checkpoint)
    * [list\_checkpoints](#spoon_ai.graph.InMemoryCheckpointer.list_checkpoints)
    * [clear\_thread](#spoon_ai.graph.InMemoryCheckpointer.clear_thread)
    * [get\_stats](#spoon_ai.graph.InMemoryCheckpointer.get_stats)
  * [add\_messages](#spoon_ai.graph.add_messages)
  * [interrupt](#spoon_ai.graph.interrupt)
  * [StateGraph](#spoon_ai.graph.StateGraph)
    * [\_\_init\_\_](#spoon_ai.graph.StateGraph.__init__)
    * [add\_node](#spoon_ai.graph.StateGraph.add_node)
    * [add\_llm\_node](#spoon_ai.graph.StateGraph.add_llm_node)
    * [add\_edge](#spoon_ai.graph.StateGraph.add_edge)
    * [add\_conditional\_edges](#spoon_ai.graph.StateGraph.add_conditional_edges)
    * [set\_entry\_point](#spoon_ai.graph.StateGraph.set_entry_point)
    * [compile](#spoon_ai.graph.StateGraph.compile)
  * [CompiledGraph](#spoon_ai.graph.CompiledGraph)
    * [\_\_init\_\_](#spoon_ai.graph.CompiledGraph.__init__)
    * [invoke](#spoon_ai.graph.CompiledGraph.invoke)
    * [stream](#spoon_ai.graph.CompiledGraph.stream)
    * [get\_execution\_history](#spoon_ai.graph.CompiledGraph.get_execution_history)
    * [get\_state](#spoon_ai.graph.CompiledGraph.get_state)
* [spoon\_ai.llm.vlm\_provider.gemini](#spoon_ai.llm.vlm_provider.gemini)
  * [GeminiConfig](#spoon_ai.llm.vlm_provider.gemini.GeminiConfig)
    * [validate\_api\_key](#spoon_ai.llm.vlm_provider.gemini.GeminiConfig.validate_api_key)
  * [GeminiProvider](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider)
    * [\_\_init\_\_](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.__init__)
    * [chat](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat)
    * [completion](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat_with_tools)
    * [generate\_content](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.generate_content)
* [spoon\_ai.llm.vlm\_provider.base](#spoon_ai.llm.vlm_provider.base)
  * [LLMConfig](#spoon_ai.llm.vlm_provider.base.LLMConfig)
  * [LLMResponse](#spoon_ai.llm.vlm_provider.base.LLMResponse)
    * [text](#spoon_ai.llm.vlm_provider.base.LLMResponse.text)
  * [LLMBase](#spoon_ai.llm.vlm_provider.base.LLMBase)
    * [\_\_init\_\_](#spoon_ai.llm.vlm_provider.base.LLMBase.__init__)
    * [chat](#spoon_ai.llm.vlm_provider.base.LLMBase.chat)
    * [completion](#spoon_ai.llm.vlm_provider.base.LLMBase.completion)
    * [chat\_with\_tools](#spoon_ai.llm.vlm_provider.base.LLMBase.chat_with_tools)
    * [generate\_image](#spoon_ai.llm.vlm_provider.base.LLMBase.generate_image)
    * [reset\_output\_handler](#spoon_ai.llm.vlm_provider.base.LLMBase.reset_output_handler)
* [spoon\_ai.llm.factory](#spoon_ai.llm.factory)
  * [LLMFactory](#spoon_ai.llm.factory.LLMFactory)
    * [register](#spoon_ai.llm.factory.LLMFactory.register)
    * [create](#spoon_ai.llm.factory.LLMFactory.create)
* [spoon\_ai.llm.monitoring](#spoon_ai.llm.monitoring)
  * [RequestMetrics](#spoon_ai.llm.monitoring.RequestMetrics)
  * [ProviderStats](#spoon_ai.llm.monitoring.ProviderStats)
    * [get](#spoon_ai.llm.monitoring.ProviderStats.get)
    * [success\_rate](#spoon_ai.llm.monitoring.ProviderStats.success_rate)
    * [avg\_response\_time](#spoon_ai.llm.monitoring.ProviderStats.avg_response_time)
  * [DebugLogger](#spoon_ai.llm.monitoring.DebugLogger)
    * [\_\_init\_\_](#spoon_ai.llm.monitoring.DebugLogger.__init__)
    * [log\_request](#spoon_ai.llm.monitoring.DebugLogger.log_request)
    * [log\_response](#spoon_ai.llm.monitoring.DebugLogger.log_response)
    * [log\_error](#spoon_ai.llm.monitoring.DebugLogger.log_error)
    * [log\_fallback](#spoon_ai.llm.monitoring.DebugLogger.log_fallback)
    * [get\_request\_history](#spoon_ai.llm.monitoring.DebugLogger.get_request_history)
    * [get\_active\_requests](#spoon_ai.llm.monitoring.DebugLogger.get_active_requests)
    * [clear\_history](#spoon_ai.llm.monitoring.DebugLogger.clear_history)
  * [MetricsCollector](#spoon_ai.llm.monitoring.MetricsCollector)
    * [\_\_init\_\_](#spoon_ai.llm.monitoring.MetricsCollector.__init__)
    * [record\_request](#spoon_ai.llm.monitoring.MetricsCollector.record_request)
    * [get\_provider\_stats](#spoon_ai.llm.monitoring.MetricsCollector.get_provider_stats)
    * [get\_all\_stats](#spoon_ai.llm.monitoring.MetricsCollector.get_all_stats)
    * [get\_rolling\_metrics](#spoon_ai.llm.monitoring.MetricsCollector.get_rolling_metrics)
    * [get\_summary](#spoon_ai.llm.monitoring.MetricsCollector.get_summary)
    * [reset\_stats](#spoon_ai.llm.monitoring.MetricsCollector.reset_stats)
  * [get\_debug\_logger](#spoon_ai.llm.monitoring.get_debug_logger)
  * [get\_metrics\_collector](#spoon_ai.llm.monitoring.get_metrics_collector)
* [spoon\_ai.llm.response\_normalizer](#spoon_ai.llm.response_normalizer)
  * [ResponseNormalizer](#spoon_ai.llm.response_normalizer.ResponseNormalizer)
    * [normalize\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response)
    * [validate\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response)
    * [add\_provider\_mapping](#spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping)
    * [get\_supported\_providers](#spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers)
  * [get\_response\_normalizer](#spoon_ai.llm.response_normalizer.get_response_normalizer)
* [spoon\_ai.llm.cache](#spoon_ai.llm.cache)
  * [CacheEntry](#spoon_ai.llm.cache.CacheEntry)
    * [is\_expired](#spoon_ai.llm.cache.CacheEntry.is_expired)
    * [touch](#spoon_ai.llm.cache.CacheEntry.touch)
  * [LLMResponseCache](#spoon_ai.llm.cache.LLMResponseCache)
    * [\_\_init\_\_](#spoon_ai.llm.cache.LLMResponseCache.__init__)
    * [get](#spoon_ai.llm.cache.LLMResponseCache.get)
    * [put](#spoon_ai.llm.cache.LLMResponseCache.put)
    * [clear](#spoon_ai.llm.cache.LLMResponseCache.clear)
    * [get\_stats](#spoon_ai.llm.cache.LLMResponseCache.get_stats)
    * [cleanup\_expired](#spoon_ai.llm.cache.LLMResponseCache.cleanup_expired)
  * [get\_global\_cache](#spoon_ai.llm.cache.get_global_cache)
  * [set\_global\_cache](#spoon_ai.llm.cache.set_global_cache)
  * [CachedLLMManager](#spoon_ai.llm.cache.CachedLLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.cache.CachedLLMManager.__init__)
    * [chat](#spoon_ai.llm.cache.CachedLLMManager.chat)
    * [chat\_with\_tools](#spoon_ai.llm.cache.CachedLLMManager.chat_with_tools)
    * [enable\_cache](#spoon_ai.llm.cache.CachedLLMManager.enable_cache)
    * [disable\_cache](#spoon_ai.llm.cache.CachedLLMManager.disable_cache)
    * [clear\_cache](#spoon_ai.llm.cache.CachedLLMManager.clear_cache)
    * [get\_cache\_stats](#spoon_ai.llm.cache.CachedLLMManager.get_cache_stats)
    * [\_\_getattr\_\_](#spoon_ai.llm.cache.CachedLLMManager.__getattr__)
* [spoon\_ai.llm.interface](#spoon_ai.llm.interface)
  * [ProviderCapability](#spoon_ai.llm.interface.ProviderCapability)
  * [ProviderMetadata](#spoon_ai.llm.interface.ProviderMetadata)
  * [LLMResponse](#spoon_ai.llm.interface.LLMResponse)
  * [LLMProviderInterface](#spoon_ai.llm.interface.LLMProviderInterface)
    * [initialize](#spoon_ai.llm.interface.LLMProviderInterface.initialize)
    * [chat](#spoon_ai.llm.interface.LLMProviderInterface.chat)
    * [chat\_stream](#spoon_ai.llm.interface.LLMProviderInterface.chat_stream)
    * [completion](#spoon_ai.llm.interface.LLMProviderInterface.completion)
    * [chat\_with\_tools](#spoon_ai.llm.interface.LLMProviderInterface.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.interface.LLMProviderInterface.get_metadata)
    * [health\_check](#spoon_ai.llm.interface.LLMProviderInterface.health_check)
    * [cleanup](#spoon_ai.llm.interface.LLMProviderInterface.cleanup)
* [spoon\_ai.llm.providers.deepseek\_provider](#spoon_ai.llm.providers.deepseek_provider)
  * [DeepSeekProvider](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider)
    * [get\_metadata](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider.get_metadata)
* [spoon\_ai.llm.providers.gemini\_provider](#spoon_ai.llm.providers.gemini_provider)
  * [GeminiProvider](#spoon_ai.llm.providers.gemini_provider.GeminiProvider)
    * [initialize](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.initialize)
    * [chat](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat)
    * [chat\_stream](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_stream)
    * [completion](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.get_metadata)
    * [health\_check](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.health_check)
    * [cleanup](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.cleanup)
* [spoon\_ai.llm.providers.openai\_compatible\_provider](#spoon_ai.llm.providers.openai_compatible_provider)
  * [OpenAICompatibleProvider](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider)
    * [get\_provider\_name](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_provider_name)
    * [get\_default\_base\_url](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_base_url)
    * [get\_default\_model](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_model)
    * [get\_additional\_headers](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_additional_headers)
    * [initialize](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.initialize)
    * [chat](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat)
    * [chat\_stream](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_stream)
    * [completion](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_metadata)
    * [health\_check](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.health_check)
    * [cleanup](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.cleanup)
* [spoon\_ai.llm.providers.openai\_provider](#spoon_ai.llm.providers.openai_provider)
  * [OpenAIProvider](#spoon_ai.llm.providers.openai_provider.OpenAIProvider)
    * [get\_metadata](#spoon_ai.llm.providers.openai_provider.OpenAIProvider.get_metadata)
* [spoon\_ai.llm.providers.anthropic\_provider](#spoon_ai.llm.providers.anthropic_provider)
  * [AnthropicProvider](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider)
    * [initialize](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.initialize)
    * [get\_cache\_metrics](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_cache_metrics)
    * [chat](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat)
    * [chat\_stream](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_stream)
    * [completion](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_metadata)
    * [health\_check](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.health_check)
    * [cleanup](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.cleanup)
* [spoon\_ai.llm.providers.openrouter\_provider](#spoon_ai.llm.providers.openrouter_provider)
  * [OpenRouterProvider](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider)
    * [get\_additional\_headers](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_additional_headers)
    * [get\_metadata](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_metadata)
* [spoon\_ai.llm.providers](#spoon_ai.llm.providers)
* [spoon\_ai.llm.manager](#spoon_ai.llm.manager)
  * [ProviderState](#spoon_ai.llm.manager.ProviderState)
    * [can\_retry\_initialization](#spoon_ai.llm.manager.ProviderState.can_retry_initialization)
    * [record\_initialization\_failure](#spoon_ai.llm.manager.ProviderState.record_initialization_failure)
    * [record\_initialization\_success](#spoon_ai.llm.manager.ProviderState.record_initialization_success)
  * [FallbackStrategy](#spoon_ai.llm.manager.FallbackStrategy)
    * [execute\_with\_fallback](#spoon_ai.llm.manager.FallbackStrategy.execute_with_fallback)
  * [LoadBalancer](#spoon_ai.llm.manager.LoadBalancer)
    * [select\_provider](#spoon_ai.llm.manager.LoadBalancer.select_provider)
    * [update\_provider\_health](#spoon_ai.llm.manager.LoadBalancer.update_provider_health)
    * [set\_provider\_weight](#spoon_ai.llm.manager.LoadBalancer.set_provider_weight)
  * [LLMManager](#spoon_ai.llm.manager.LLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.manager.LLMManager.__init__)
    * [cleanup](#spoon_ai.llm.manager.LLMManager.cleanup)
    * [get\_provider\_status](#spoon_ai.llm.manager.LLMManager.get_provider_status)
    * [reset\_provider](#spoon_ai.llm.manager.LLMManager.reset_provider)
    * [chat](#spoon_ai.llm.manager.LLMManager.chat)
    * [chat\_stream](#spoon_ai.llm.manager.LLMManager.chat_stream)
    * [completion](#spoon_ai.llm.manager.LLMManager.completion)
    * [chat\_with\_tools](#spoon_ai.llm.manager.LLMManager.chat_with_tools)
    * [set\_fallback\_chain](#spoon_ai.llm.manager.LLMManager.set_fallback_chain)
    * [enable\_load\_balancing](#spoon_ai.llm.manager.LLMManager.enable_load_balancing)
    * [disable\_load\_balancing](#spoon_ai.llm.manager.LLMManager.disable_load_balancing)
    * [health\_check\_all](#spoon_ai.llm.manager.LLMManager.health_check_all)
    * [get\_stats](#spoon_ai.llm.manager.LLMManager.get_stats)
  * [get\_llm\_manager](#spoon_ai.llm.manager.get_llm_manager)
  * [set\_llm\_manager](#spoon_ai.llm.manager.set_llm_manager)
* [spoon\_ai.llm.registry](#spoon_ai.llm.registry)
  * [LLMProviderRegistry](#spoon_ai.llm.registry.LLMProviderRegistry)
    * [register](#spoon_ai.llm.registry.LLMProviderRegistry.register)
    * [get\_provider](#spoon_ai.llm.registry.LLMProviderRegistry.get_provider)
    * [list\_providers](#spoon_ai.llm.registry.LLMProviderRegistry.list_providers)
    * [get\_capabilities](#spoon_ai.llm.registry.LLMProviderRegistry.get_capabilities)
    * [is\_registered](#spoon_ai.llm.registry.LLMProviderRegistry.is_registered)
    * [unregister](#spoon_ai.llm.registry.LLMProviderRegistry.unregister)
    * [clear](#spoon_ai.llm.registry.LLMProviderRegistry.clear)
  * [register\_provider](#spoon_ai.llm.registry.register_provider)
  * [get\_global\_registry](#spoon_ai.llm.registry.get_global_registry)
* [spoon\_ai.llm.config](#spoon_ai.llm.config)
  * [ProviderConfig](#spoon_ai.llm.config.ProviderConfig)
    * [\_\_post\_init\_\_](#spoon_ai.llm.config.ProviderConfig.__post_init__)
    * [model\_dump](#spoon_ai.llm.config.ProviderConfig.model_dump)
  * [ConfigurationManager](#spoon_ai.llm.config.ConfigurationManager)
    * [\_\_init\_\_](#spoon_ai.llm.config.ConfigurationManager.__init__)
    * [load\_provider\_config](#spoon_ai.llm.config.ConfigurationManager.load_provider_config)
    * [validate\_config](#spoon_ai.llm.config.ConfigurationManager.validate_config)
    * [get\_default\_provider](#spoon_ai.llm.config.ConfigurationManager.get_default_provider)
    * [get\_fallback\_chain](#spoon_ai.llm.config.ConfigurationManager.get_fallback_chain)
    * [list\_configured\_providers](#spoon_ai.llm.config.ConfigurationManager.list_configured_providers)
    * [get\_available\_providers\_by\_priority](#spoon_ai.llm.config.ConfigurationManager.get_available_providers_by_priority)
    * [get\_provider\_info](#spoon_ai.llm.config.ConfigurationManager.get_provider_info)
    * [reload\_config](#spoon_ai.llm.config.ConfigurationManager.reload_config)
* [spoon\_ai.llm](#spoon_ai.llm)
* [spoon\_ai.llm.errors](#spoon_ai.llm.errors)
  * [LLMError](#spoon_ai.llm.errors.LLMError)
  * [ProviderError](#spoon_ai.llm.errors.ProviderError)
  * [ConfigurationError](#spoon_ai.llm.errors.ConfigurationError)
  * [RateLimitError](#spoon_ai.llm.errors.RateLimitError)
  * [AuthenticationError](#spoon_ai.llm.errors.AuthenticationError)
  * [ModelNotFoundError](#spoon_ai.llm.errors.ModelNotFoundError)
  * [TokenLimitError](#spoon_ai.llm.errors.TokenLimitError)
  * [NetworkError](#spoon_ai.llm.errors.NetworkError)
  * [ProviderUnavailableError](#spoon_ai.llm.errors.ProviderUnavailableError)
  * [ValidationError](#spoon_ai.llm.errors.ValidationError)
* [spoon\_ai.llm.base](#spoon_ai.llm.base)
  * [LLMBase](#spoon_ai.llm.base.LLMBase)
    * [\_\_init\_\_](#spoon_ai.llm.base.LLMBase.__init__)
    * [chat](#spoon_ai.llm.base.LLMBase.chat)
    * [completion](#spoon_ai.llm.base.LLMBase.completion)
    * [chat\_with\_tools](#spoon_ai.llm.base.LLMBase.chat_with_tools)
    * [generate\_image](#spoon_ai.llm.base.LLMBase.generate_image)
    * [reset\_output\_handler](#spoon_ai.llm.base.LLMBase.reset_output_handler)
* [spoon\_ai.utils.utils](#spoon_ai.utils.utils)
* [spoon\_ai.utils.config\_manager](#spoon_ai.utils.config_manager)
  * [ConfigManager](#spoon_ai.utils.config_manager.ConfigManager)
    * [\_\_init\_\_](#spoon_ai.utils.config_manager.ConfigManager.__init__)
    * [refresh](#spoon_ai.utils.config_manager.ConfigManager.refresh)
    * [get](#spoon_ai.utils.config_manager.ConfigManager.get)
    * [set](#spoon_ai.utils.config_manager.ConfigManager.set)
    * [list\_config](#spoon_ai.utils.config_manager.ConfigManager.list_config)
    * [get\_api\_key](#spoon_ai.utils.config_manager.ConfigManager.get_api_key)
    * [set\_api\_key](#spoon_ai.utils.config_manager.ConfigManager.set_api_key)
    * [get\_model\_name](#spoon_ai.utils.config_manager.ConfigManager.get_model_name)
    * [get\_base\_url](#spoon_ai.utils.config_manager.ConfigManager.get_base_url)
    * [get\_llm\_provider](#spoon_ai.utils.config_manager.ConfigManager.get_llm_provider)
* [spoon\_ai.utils.config](#spoon_ai.utils.config)
* [spoon\_ai.utils](#spoon_ai.utils)
* [spoon\_ai.utils.streaming](#spoon_ai.utils.streaming)
  * [StreamOutcome](#spoon_ai.utils.streaming.StreamOutcome)
* [spoon\_ai.runnables.events](#spoon_ai.runnables.events)
  * [StreamEventBuilder](#spoon_ai.runnables.events.StreamEventBuilder)
    * [chain\_start](#spoon_ai.runnables.events.StreamEventBuilder.chain_start)
    * [chain\_stream](#spoon_ai.runnables.events.StreamEventBuilder.chain_stream)
    * [chain\_end](#spoon_ai.runnables.events.StreamEventBuilder.chain_end)
    * [chain\_error](#spoon_ai.runnables.events.StreamEventBuilder.chain_error)
    * [llm\_stream](#spoon_ai.runnables.events.StreamEventBuilder.llm_stream)
* [spoon\_ai.runnables](#spoon_ai.runnables)
* [spoon\_ai.runnables.base](#spoon_ai.runnables.base)
  * [log\_patches\_from\_events](#spoon_ai.runnables.base.log_patches_from_events)
  * [Runnable](#spoon_ai.runnables.base.Runnable)
    * [astream\_log](#spoon_ai.runnables.base.Runnable.astream_log)
    * [astream\_events](#spoon_ai.runnables.base.Runnable.astream_events)
* [spoon\_ai.payments.server](#spoon_ai.payments.server)
  * [create\_paywalled\_router](#spoon_ai.payments.server.create_paywalled_router)
* [spoon\_ai.payments.cli](#spoon_ai.payments.cli)
* [spoon\_ai.payments.facilitator\_client](#spoon_ai.payments.facilitator_client)
  * [X402FacilitatorClient](#spoon_ai.payments.facilitator_client.X402FacilitatorClient)
* [spoon\_ai.payments.exceptions](#spoon_ai.payments.exceptions)
  * [X402PaymentError](#spoon_ai.payments.exceptions.X402PaymentError)
  * [X402ConfigurationError](#spoon_ai.payments.exceptions.X402ConfigurationError)
  * [X402VerificationError](#spoon_ai.payments.exceptions.X402VerificationError)
  * [X402SettlementError](#spoon_ai.payments.exceptions.X402SettlementError)
* [spoon\_ai.payments.x402\_service](#spoon_ai.payments.x402_service)
  * [X402PaymentService](#spoon_ai.payments.x402_service.X402PaymentService)
    * [discover\_resources](#spoon_ai.payments.x402_service.X402PaymentService.discover_resources)
    * [render\_paywall\_html](#spoon_ai.payments.x402_service.X402PaymentService.render_paywall_html)
    * [build\_payment\_header](#spoon_ai.payments.x402_service.X402PaymentService.build_payment_header)
    * [decode\_payment\_response](#spoon_ai.payments.x402_service.X402PaymentService.decode_payment_response)
* [spoon\_ai.payments.config](#spoon_ai.payments.config)
  * [X402ConfigurationError](#spoon_ai.payments.config.X402ConfigurationError)
  * [X402PaywallBranding](#spoon_ai.payments.config.X402PaywallBranding)
  * [X402ClientConfig](#spoon_ai.payments.config.X402ClientConfig)
  * [X402Settings](#spoon_ai.payments.config.X402Settings)
    * [amount\_in\_atomic\_units](#spoon_ai.payments.config.X402Settings.amount_in_atomic_units)
    * [build\_asset\_extra](#spoon_ai.payments.config.X402Settings.build_asset_extra)
    * [load](#spoon_ai.payments.config.X402Settings.load)
* [spoon\_ai.payments.app](#spoon_ai.payments.app)
* [spoon\_ai.payments](#spoon_ai.payments)
* [spoon\_ai.payments.models](#spoon_ai.payments.models)
  * [X402PaymentRequest](#spoon_ai.payments.models.X402PaymentRequest)
  * [X402VerifyResult](#spoon_ai.payments.models.X402VerifyResult)
  * [X402SettleResult](#spoon_ai.payments.models.X402SettleResult)
  * [X402PaymentOutcome](#spoon_ai.payments.models.X402PaymentOutcome)
  * [X402PaymentReceipt](#spoon_ai.payments.models.X402PaymentReceipt)
* [spoon\_ai.chat](#spoon_ai.chat)
  * [ShortTermMemoryConfig](#spoon_ai.chat.ShortTermMemoryConfig)
    * [enabled](#spoon_ai.chat.ShortTermMemoryConfig.enabled)
    * [max\_tokens](#spoon_ai.chat.ShortTermMemoryConfig.max_tokens)
    * [strategy](#spoon_ai.chat.ShortTermMemoryConfig.strategy)
    * [messages\_to\_keep](#spoon_ai.chat.ShortTermMemoryConfig.messages_to_keep)
    * [trim\_strategy](#spoon_ai.chat.ShortTermMemoryConfig.trim_strategy)
    * [keep\_system\_messages](#spoon_ai.chat.ShortTermMemoryConfig.keep_system_messages)
    * [auto\_checkpoint](#spoon_ai.chat.ShortTermMemoryConfig.auto_checkpoint)
    * [checkpoint\_thread\_id](#spoon_ai.chat.ShortTermMemoryConfig.checkpoint_thread_id)
    * [summary\_model](#spoon_ai.chat.ShortTermMemoryConfig.summary_model)
  * [ChatBot](#spoon_ai.chat.ChatBot)
    * [\_\_init\_\_](#spoon_ai.chat.ChatBot.__init__)
    * [update\_mem0\_config](#spoon_ai.chat.ChatBot.update_mem0_config)
    * [ask](#spoon_ai.chat.ChatBot.ask)
    * [ask\_tool](#spoon_ai.chat.ChatBot.ask_tool)
    * [trim\_messages](#spoon_ai.chat.ChatBot.trim_messages)
    * [remove\_message](#spoon_ai.chat.ChatBot.remove_message)
    * [remove\_all\_messages](#spoon_ai.chat.ChatBot.remove_all_messages)
    * [summarize\_messages](#spoon_ai.chat.ChatBot.summarize_messages)
    * [latest\_summary](#spoon_ai.chat.ChatBot.latest_summary)
    * [latest\_removals](#spoon_ai.chat.ChatBot.latest_removals)
    * [save\_checkpoint](#spoon_ai.chat.ChatBot.save_checkpoint)
    * [restore\_checkpoint](#spoon_ai.chat.ChatBot.restore_checkpoint)
    * [list\_checkpoints](#spoon_ai.chat.ChatBot.list_checkpoints)
    * [clear\_checkpoints](#spoon_ai.chat.ChatBot.clear_checkpoints)
    * [astream](#spoon_ai.chat.ChatBot.astream)
    * [astream\_events](#spoon_ai.chat.ChatBot.astream_events)
    * [astream\_log](#spoon_ai.chat.ChatBot.astream_log)
* [spoon\_ai.identity.did\_models](#spoon_ai.identity.did_models)
  * [VerificationMethodType](#spoon_ai.identity.did_models.VerificationMethodType)
  * [ServiceType](#spoon_ai.identity.did_models.ServiceType)
  * [VerificationMethod](#spoon_ai.identity.did_models.VerificationMethod)
  * [ServiceEndpoint](#spoon_ai.identity.did_models.ServiceEndpoint)
  * [ReputationScore](#spoon_ai.identity.did_models.ReputationScore)
  * [Attestation](#spoon_ai.identity.did_models.Attestation)
  * [AgentCard](#spoon_ai.identity.did_models.AgentCard)
  * [AgentDID](#spoon_ai.identity.did_models.AgentDID)
    * [to\_did\_document](#spoon_ai.identity.did_models.AgentDID.to_did_document)
    * [to\_agent\_card](#spoon_ai.identity.did_models.AgentDID.to_agent_card)
  * [DIDResolutionResult](#spoon_ai.identity.did_models.DIDResolutionResult)
* [spoon\_ai.identity.attestation](#spoon_ai.identity.attestation)
  * [AttestationManager](#spoon_ai.identity.attestation.AttestationManager)
    * [create\_attestation](#spoon_ai.identity.attestation.AttestationManager.create_attestation)
    * [verify\_attestation](#spoon_ai.identity.attestation.AttestationManager.verify_attestation)
    * [submit\_reputation\_on\_chain](#spoon_ai.identity.attestation.AttestationManager.submit_reputation_on_chain)
    * [submit\_validation\_on\_chain](#spoon_ai.identity.attestation.AttestationManager.submit_validation_on_chain)
  * [TrustScoreCalculator](#spoon_ai.identity.attestation.TrustScoreCalculator)
    * [calculate\_trust\_score](#spoon_ai.identity.attestation.TrustScoreCalculator.calculate_trust_score)
    * [get\_reputation\_breakdown](#spoon_ai.identity.attestation.TrustScoreCalculator.get_reputation_breakdown)
    * [get\_validation\_breakdown](#spoon_ai.identity.attestation.TrustScoreCalculator.get_validation_breakdown)
* [spoon\_ai.identity.storage\_client](#spoon_ai.identity.storage_client)
  * [DIDStorageClient](#spoon_ai.identity.storage_client.DIDStorageClient)
    * [publish\_did\_document](#spoon_ai.identity.storage_client.DIDStorageClient.publish_did_document)
    * [fetch\_did\_document](#spoon_ai.identity.storage_client.DIDStorageClient.fetch_did_document)
    * [publish\_credential](#spoon_ai.identity.storage_client.DIDStorageClient.publish_credential)
    * [close](#spoon_ai.identity.storage_client.DIDStorageClient.close)
* [spoon\_ai.identity.did\_resolver](#spoon_ai.identity.did_resolver)
  * [DIDResolver](#spoon_ai.identity.did_resolver.DIDResolver)
    * [resolve](#spoon_ai.identity.did_resolver.DIDResolver.resolve)
    * [resolve\_metadata\_only](#spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only)
    * [verify\_did](#spoon_ai.identity.did_resolver.DIDResolver.verify_did)
* [spoon\_ai.identity.erc8004\_abi](#spoon_ai.identity.erc8004_abi)
* [spoon\_ai.identity](#spoon_ai.identity)
* [spoon\_ai.identity.erc8004\_client](#spoon_ai.identity.erc8004_client)
  * [ERC8004Client](#spoon_ai.identity.erc8004_client.ERC8004Client)
    * [calculate\_did\_hash](#spoon_ai.identity.erc8004_client.ERC8004Client.calculate_did_hash)
    * [create\_eip712\_signature](#spoon_ai.identity.erc8004_client.ERC8004Client.create_eip712_signature)
    * [register\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.register_agent)
    * [resolve\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.resolve_agent)
    * [update\_capabilities](#spoon_ai.identity.erc8004_client.ERC8004Client.update_capabilities)
    * [build\_feedback\_auth](#spoon_ai.identity.erc8004_client.ERC8004Client.build_feedback_auth)
    * [give\_feedback](#spoon_ai.identity.erc8004_client.ERC8004Client.give_feedback)
    * [get\_reputation\_summary](#spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation_summary)
    * [get\_reputation](#spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation)
    * [validation\_request](#spoon_ai.identity.erc8004_client.ERC8004Client.validation_request)
    * [get\_validation\_status](#spoon_ai.identity.erc8004_client.ERC8004Client.get_validation_status)
    * [submit\_validation](#spoon_ai.identity.erc8004_client.ERC8004Client.submit_validation)
    * [register\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.register_agent)
* [spoon\_ai.bridge.eth\_neofs\_indexer](#spoon_ai.bridge.eth_neofs_indexer)
  * [EthereumNeoFSIndexer](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer)
    * [register\_event\_handler](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.register_event_handler)
    * [start\_indexing](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.start_indexing)
    * [stop\_indexing](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.stop_indexing)
    * [get\_indexer\_status](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.get_indexer_status)
* [spoon\_ai.bridge](#spoon_ai.bridge)
* [spoon\_ai.tools.turnkey\_tools](#spoon_ai.tools.turnkey_tools)
  * [TurnkeyBaseTool](#spoon_ai.tools.turnkey_tools.TurnkeyBaseTool)
    * [client](#spoon_ai.tools.turnkey_tools.TurnkeyBaseTool.client)
  * [SignEVMTransactionTool](#spoon_ai.tools.turnkey_tools.SignEVMTransactionTool)
    * [execute](#spoon_ai.tools.turnkey_tools.SignEVMTransactionTool.execute)
  * [SignMessageTool](#spoon_ai.tools.turnkey_tools.SignMessageTool)
    * [execute](#spoon_ai.tools.turnkey_tools.SignMessageTool.execute)
  * [SignTypedDataTool](#spoon_ai.tools.turnkey_tools.SignTypedDataTool)
    * [execute](#spoon_ai.tools.turnkey_tools.SignTypedDataTool.execute)
  * [BroadcastTransactionTool](#spoon_ai.tools.turnkey_tools.BroadcastTransactionTool)
    * [execute](#spoon_ai.tools.turnkey_tools.BroadcastTransactionTool.execute)
  * [ListWalletsTool](#spoon_ai.tools.turnkey_tools.ListWalletsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListWalletsTool.execute)
  * [ListWalletAccountsTool](#spoon_ai.tools.turnkey_tools.ListWalletAccountsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListWalletAccountsTool.execute)
  * [GetActivityTool](#spoon_ai.tools.turnkey_tools.GetActivityTool)
    * [execute](#spoon_ai.tools.turnkey_tools.GetActivityTool.execute)
  * [ListActivitiesTool](#spoon_ai.tools.turnkey_tools.ListActivitiesTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListActivitiesTool.execute)
  * [WhoAmITool](#spoon_ai.tools.turnkey_tools.WhoAmITool)
    * [execute](#spoon_ai.tools.turnkey_tools.WhoAmITool.execute)
  * [BuildUnsignedEIP1559TxTool](#spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool)
    * [execute](#spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool.execute)
  * [ListAllAccountsTool](#spoon_ai.tools.turnkey_tools.ListAllAccountsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListAllAccountsTool.execute)
  * [BatchSignTransactionsTool](#spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool.execute)
  * [CreateWalletTool](#spoon_ai.tools.turnkey_tools.CreateWalletTool)
    * [execute](#spoon_ai.tools.turnkey_tools.CreateWalletTool.execute)
  * [GetWalletTool](#spoon_ai.tools.turnkey_tools.GetWalletTool)
    * [execute](#spoon_ai.tools.turnkey_tools.GetWalletTool.execute)
  * [CreateWalletAccountsTool](#spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool.execute)
  * [CompleteTransactionWorkflowTool](#spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool)
    * [execute](#spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool.execute)
  * [get\_turnkey\_tools](#spoon_ai.tools.turnkey_tools.get_turnkey_tools)
* [spoon\_ai.tools.tool\_manager](#spoon_ai.tools.tool_manager)
  * [ToolManager](#spoon_ai.tools.tool_manager.ToolManager)
    * [reindex](#spoon_ai.tools.tool_manager.ToolManager.reindex)
* [spoon\_ai.tools.neofs\_tools](#spoon_ai.tools.neofs_tools)
  * [get\_shared\_neofs\_client](#spoon_ai.tools.neofs_tools.get_shared_neofs_client)
  * [CreateBearerTokenTool](#spoon_ai.tools.neofs_tools.CreateBearerTokenTool)
  * [CreateContainerTool](#spoon_ai.tools.neofs_tools.CreateContainerTool)
  * [UploadObjectTool](#spoon_ai.tools.neofs_tools.UploadObjectTool)
  * [DownloadObjectByIdTool](#spoon_ai.tools.neofs_tools.DownloadObjectByIdTool)
  * [GetObjectHeaderByIdTool](#spoon_ai.tools.neofs_tools.GetObjectHeaderByIdTool)
  * [DownloadObjectByAttributeTool](#spoon_ai.tools.neofs_tools.DownloadObjectByAttributeTool)
  * [GetObjectHeaderByAttributeTool](#spoon_ai.tools.neofs_tools.GetObjectHeaderByAttributeTool)
  * [DeleteObjectTool](#spoon_ai.tools.neofs_tools.DeleteObjectTool)
  * [SearchObjectsTool](#spoon_ai.tools.neofs_tools.SearchObjectsTool)
  * [SetContainerEaclTool](#spoon_ai.tools.neofs_tools.SetContainerEaclTool)
  * [GetContainerEaclTool](#spoon_ai.tools.neofs_tools.GetContainerEaclTool)
  * [ListContainersTool](#spoon_ai.tools.neofs_tools.ListContainersTool)
  * [GetContainerInfoTool](#spoon_ai.tools.neofs_tools.GetContainerInfoTool)
  * [DeleteContainerTool](#spoon_ai.tools.neofs_tools.DeleteContainerTool)
  * [GetNetworkInfoTool](#spoon_ai.tools.neofs_tools.GetNetworkInfoTool)
  * [GetBalanceTool](#spoon_ai.tools.neofs_tools.GetBalanceTool)
* [spoon\_ai.tools.rag\_tools](#spoon_ai.tools.rag_tools)
* [spoon\_ai.tools.x402\_payment](#spoon_ai.tools.x402_payment)
  * [X402PaymentHeaderTool](#spoon_ai.tools.x402_payment.X402PaymentHeaderTool)
  * [X402PaywalledRequestTool](#spoon_ai.tools.x402_payment.X402PaywalledRequestTool)
* [spoon\_ai.tools](#spoon_ai.tools)
* [spoon\_ai.tools.mcp\_tool](#spoon_ai.tools.mcp_tool)
  * [MCPTool](#spoon_ai.tools.mcp_tool.MCPTool)
    * [call\_mcp\_tool](#spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool)
    * [list\_available\_tools](#spoon_ai.tools.mcp_tool.MCPTool.list_available_tools)
* [spoon\_ai.tools.base](#spoon_ai.tools.base)
  * [ToolFailure](#spoon_ai.tools.base.ToolFailure)
* [spoon\_ai.graph.agent](#spoon_ai.graph.agent)
  * [Memory](#spoon_ai.graph.agent.Memory)
    * [clear](#spoon_ai.graph.agent.Memory.clear)
    * [add\_message](#spoon_ai.graph.agent.Memory.add_message)
    * [get\_messages](#spoon_ai.graph.agent.Memory.get_messages)
    * [get\_recent\_messages](#spoon_ai.graph.agent.Memory.get_recent_messages)
    * [search\_messages](#spoon_ai.graph.agent.Memory.search_messages)
    * [get\_statistics](#spoon_ai.graph.agent.Memory.get_statistics)
    * [set\_metadata](#spoon_ai.graph.agent.Memory.set_metadata)
    * [get\_metadata](#spoon_ai.graph.agent.Memory.get_metadata)
  * [MockMemory](#spoon_ai.graph.agent.MockMemory)
  * [GraphAgent](#spoon_ai.graph.agent.GraphAgent)
    * [search\_memory](#spoon_ai.graph.agent.GraphAgent.search_memory)
    * [get\_recent\_memory](#spoon_ai.graph.agent.GraphAgent.get_recent_memory)
    * [get\_memory\_statistics](#spoon_ai.graph.agent.GraphAgent.get_memory_statistics)
    * [set\_memory\_metadata](#spoon_ai.graph.agent.GraphAgent.set_memory_metadata)
    * [get\_memory\_metadata](#spoon_ai.graph.agent.GraphAgent.get_memory_metadata)
    * [save\_session](#spoon_ai.graph.agent.GraphAgent.save_session)
    * [load\_session](#spoon_ai.graph.agent.GraphAgent.load_session)
* [spoon\_ai.graph.types](#spoon_ai.graph.types)
* [spoon\_ai.graph.checkpointer](#spoon_ai.graph.checkpointer)
  * [InMemoryCheckpointer](#spoon_ai.graph.checkpointer.InMemoryCheckpointer)
    * [iter\_checkpoint\_history](#spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history)
* [spoon\_ai.graph.builder](#spoon_ai.graph.builder)
  * [Intent](#spoon_ai.graph.builder.Intent)
  * [IntentAnalyzer](#spoon_ai.graph.builder.IntentAnalyzer)
  * [AdaptiveStateBuilder](#spoon_ai.graph.builder.AdaptiveStateBuilder)
  * [ParameterInferenceEngine](#spoon_ai.graph.builder.ParameterInferenceEngine)
  * [NodeSpec](#spoon_ai.graph.builder.NodeSpec)
  * [EdgeSpec](#spoon_ai.graph.builder.EdgeSpec)
    * [end](#spoon_ai.graph.builder.EdgeSpec.end)
  * [ParallelGroupSpec](#spoon_ai.graph.builder.ParallelGroupSpec)
  * [GraphTemplate](#spoon_ai.graph.builder.GraphTemplate)
  * [DeclarativeGraphBuilder](#spoon_ai.graph.builder.DeclarativeGraphBuilder)
  * [NodePlugin](#spoon_ai.graph.builder.NodePlugin)
  * [NodePluginSystem](#spoon_ai.graph.builder.NodePluginSystem)
  * [HighLevelGraphAPI](#spoon_ai.graph.builder.HighLevelGraphAPI)
* [spoon\_ai.graph.mcp\_integration](#spoon_ai.graph.mcp_integration)
  * [MCPToolSpec](#spoon_ai.graph.mcp_integration.MCPToolSpec)
  * [MCPConfigManager](#spoon_ai.graph.mcp_integration.MCPConfigManager)
  * [MCPToolDiscoveryEngine](#spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine)
  * [MCPIntegrationManager](#spoon_ai.graph.mcp_integration.MCPIntegrationManager)
* [spoon\_ai.graph.exceptions](#spoon_ai.graph.exceptions)
* [spoon\_ai.graph.reducers](#spoon_ai.graph.reducers)
* [spoon\_ai.graph.decorators](#spoon_ai.graph.decorators)
* [spoon\_ai.graph.config](#spoon_ai.graph.config)
  * [RouterConfig](#spoon_ai.graph.config.RouterConfig)
  * [ParallelRetryPolicy](#spoon_ai.graph.config.ParallelRetryPolicy)
  * [ParallelGroupConfig](#spoon_ai.graph.config.ParallelGroupConfig)
    * [quorum](#spoon_ai.graph.config.ParallelGroupConfig.quorum)
    * [error\_strategy](#spoon_ai.graph.config.ParallelGroupConfig.error_strategy)
  * [GraphConfig](#spoon_ai.graph.config.GraphConfig)
* [spoon\_ai.graph.engine](#spoon_ai.graph.engine)
  * [BaseNode](#spoon_ai.graph.engine.BaseNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.BaseNode.__call__)
  * [RunnableNode](#spoon_ai.graph.engine.RunnableNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.RunnableNode.__call__)
  * [ToolNode](#spoon_ai.graph.engine.ToolNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.ToolNode.__call__)
  * [ConditionNode](#spoon_ai.graph.engine.ConditionNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.ConditionNode.__call__)
  * [interrupt](#spoon_ai.graph.engine.interrupt)
  * [RouteRule](#spoon_ai.graph.engine.RouteRule)
    * [matches](#spoon_ai.graph.engine.RouteRule.matches)
  * [RunningSummary](#spoon_ai.graph.engine.RunningSummary)
  * [SummarizationNode](#spoon_ai.graph.engine.SummarizationNode)
  * [StateGraph](#spoon_ai.graph.engine.StateGraph)
    * [add\_node](#spoon_ai.graph.engine.StateGraph.add_node)
    * [add\_edge](#spoon_ai.graph.engine.StateGraph.add_edge)
    * [add\_conditional\_edges](#spoon_ai.graph.engine.StateGraph.add_conditional_edges)
    * [set\_entry\_point](#spoon_ai.graph.engine.StateGraph.set_entry_point)
    * [add\_tool\_node](#spoon_ai.graph.engine.StateGraph.add_tool_node)
    * [add\_conditional\_node](#spoon_ai.graph.engine.StateGraph.add_conditional_node)
    * [add\_parallel\_group](#spoon_ai.graph.engine.StateGraph.add_parallel_group)
    * [add\_routing\_rule](#spoon_ai.graph.engine.StateGraph.add_routing_rule)
    * [get\_state](#spoon_ai.graph.engine.StateGraph.get_state)
    * [get\_state\_history](#spoon_ai.graph.engine.StateGraph.get_state_history)
    * [add\_pattern\_routing](#spoon_ai.graph.engine.StateGraph.add_pattern_routing)
    * [set\_intelligent\_router](#spoon_ai.graph.engine.StateGraph.set_intelligent_router)
    * [set\_llm\_router](#spoon_ai.graph.engine.StateGraph.set_llm_router)
    * [enable\_llm\_routing](#spoon_ai.graph.engine.StateGraph.enable_llm_routing)
    * [compile](#spoon_ai.graph.engine.StateGraph.compile)
    * [get\_graph](#spoon_ai.graph.engine.StateGraph.get_graph)
  * [CompiledGraph](#spoon_ai.graph.engine.CompiledGraph)
    * [get\_execution\_metrics](#spoon_ai.graph.engine.CompiledGraph.get_execution_metrics)
* [spoon\_ai.neofs.utils](#spoon_ai.neofs.utils)
  * [SignatureError](#spoon_ai.neofs.utils.SignatureError)
  * [sign\_bearer\_token](#spoon_ai.neofs.utils.sign_bearer_token)
* [spoon\_ai.neofs.client](#spoon_ai.neofs.client)
  * [NeoFSClient](#spoon_ai.neofs.client.NeoFSClient)
    * [set\_container\_eacl](#spoon_ai.neofs.client.NeoFSClient.set_container_eacl)
    * [download\_object\_by\_id](#spoon_ai.neofs.client.NeoFSClient.download_object_by_id)
    * [get\_object\_header\_by\_id](#spoon_ai.neofs.client.NeoFSClient.get_object_header_by_id)
    * [download\_object\_by\_attribute](#spoon_ai.neofs.client.NeoFSClient.download_object_by_attribute)
    * [get\_object\_header\_by\_attribute](#spoon_ai.neofs.client.NeoFSClient.get_object_header_by_attribute)
    * [delete\_object](#spoon_ai.neofs.client.NeoFSClient.delete_object)
    * [search\_objects](#spoon_ai.neofs.client.NeoFSClient.search_objects)
  * [NeoFSException](#spoon_ai.neofs.client.NeoFSException)
  * [NeoFSAPIException](#spoon_ai.neofs.client.NeoFSAPIException)
* [spoon\_ai.neofs](#spoon_ai.neofs)
* [spoon\_ai.neofs.models](#spoon_ai.neofs.models)
  * [NetworkInfo](#spoon_ai.neofs.models.NetworkInfo)
* [spoon\_ai.agents.toolcall](#spoon_ai.agents.toolcall)
  * [ToolCallAgent](#spoon_ai.agents.toolcall.ToolCallAgent)
    * [tool\_choices](#spoon_ai.agents.toolcall.ToolCallAgent.tool_choices)
    * [mcp\_tools\_cache\_ttl](#spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl)
    * [run](#spoon_ai.agents.toolcall.ToolCallAgent.run)
    * [step](#spoon_ai.agents.toolcall.ToolCallAgent.step)
* [spoon\_ai.agents.react](#spoon_ai.agents.react)
* [spoon\_ai.agents.mcp\_client\_mixin](#spoon_ai.agents.mcp_client_mixin)
  * [MCPClientMixin](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin)
    * [get\_session](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session)
    * [list\_mcp\_tools](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools)
    * [call\_mcp\_tool](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool)
    * [send\_mcp\_message](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message)
    * [cleanup](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup)
    * [get\_session\_stats](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats)
* [spoon\_ai.agents.spoon\_react\_mcp](#spoon_ai.agents.spoon_react_mcp)
  * [SpoonReactMCP](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP)
    * [list\_mcp\_tools](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP.list_mcp_tools)
* [spoon\_ai.agents.monitor](#spoon_ai.agents.monitor)
* [spoon\_ai.agents.rag](#spoon_ai.agents.rag)
  * [RetrievalMixin](#spoon_ai.agents.rag.RetrievalMixin)
    * [initialize\_retrieval\_client](#spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client)
    * [add\_documents](#spoon_ai.agents.rag.RetrievalMixin.add_documents)
    * [retrieve\_relevant\_documents](#spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents)
    * [get\_context\_from\_query](#spoon_ai.agents.rag.RetrievalMixin.get_context_from_query)
* [spoon\_ai.agents.custom\_agent](#spoon_ai.agents.custom_agent)
  * [CustomAgent](#spoon_ai.agents.custom_agent.CustomAgent)
    * [add\_tool](#spoon_ai.agents.custom_agent.CustomAgent.add_tool)
    * [add\_tools](#spoon_ai.agents.custom_agent.CustomAgent.add_tools)
    * [remove\_tool](#spoon_ai.agents.custom_agent.CustomAgent.remove_tool)
    * [list\_tools](#spoon_ai.agents.custom_agent.CustomAgent.list_tools)
    * [get\_tool\_info](#spoon_ai.agents.custom_agent.CustomAgent.get_tool_info)
    * [validate\_tools](#spoon_ai.agents.custom_agent.CustomAgent.validate_tools)
    * [run](#spoon_ai.agents.custom_agent.CustomAgent.run)
    * [clear](#spoon_ai.agents.custom_agent.CustomAgent.clear)
* [spoon\_ai.agents.graph\_agent](#spoon_ai.agents.graph_agent)
  * [GraphAgent](#spoon_ai.agents.graph_agent.GraphAgent)
    * [\_\_init\_\_](#spoon_ai.agents.graph_agent.GraphAgent.__init__)
    * [validate\_graph](#spoon_ai.agents.graph_agent.GraphAgent.validate_graph)
    * [run](#spoon_ai.agents.graph_agent.GraphAgent.run)
    * [step](#spoon_ai.agents.graph_agent.GraphAgent.step)
    * [get\_execution\_history](#spoon_ai.agents.graph_agent.GraphAgent.get_execution_history)
    * [get\_execution\_metadata](#spoon_ai.agents.graph_agent.GraphAgent.get_execution_metadata)
    * [clear\_state](#spoon_ai.agents.graph_agent.GraphAgent.clear_state)
    * [update\_initial\_state](#spoon_ai.agents.graph_agent.GraphAgent.update_initial_state)
    * [set\_preserve\_state](#spoon_ai.agents.graph_agent.GraphAgent.set_preserve_state)
* [spoon\_ai.agents](#spoon_ai.agents)
* [spoon\_ai.agents.spoon\_react](#spoon_ai.agents.spoon_react)
  * [create\_configured\_chatbot](#spoon_ai.agents.spoon_react.create_configured_chatbot)
  * [SpoonReactAI](#spoon_ai.agents.spoon_react.SpoonReactAI)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react.SpoonReactAI.__init__)
    * [initialize](#spoon_ai.agents.spoon_react.SpoonReactAI.initialize)
    * [run](#spoon_ai.agents.spoon_react.SpoonReactAI.run)
* [spoon\_ai.agents.base](#spoon_ai.agents.base)
  * [ThreadSafeOutputQueue](#spoon_ai.agents.base.ThreadSafeOutputQueue)
    * [get](#spoon_ai.agents.base.ThreadSafeOutputQueue.get)
  * [BaseAgent](#spoon_ai.agents.base.BaseAgent)
    * [add\_message](#spoon_ai.agents.base.BaseAgent.add_message)
    * [state\_context](#spoon_ai.agents.base.BaseAgent.state_context)
    * [run](#spoon_ai.agents.base.BaseAgent.run)
    * [step](#spoon_ai.agents.base.BaseAgent.step)
    * [is\_stuck](#spoon_ai.agents.base.BaseAgent.is_stuck)
    * [handle\_stuck\_state](#spoon_ai.agents.base.BaseAgent.handle_stuck_state)
    * [add\_documents](#spoon_ai.agents.base.BaseAgent.add_documents)
    * [save\_chat\_history](#spoon_ai.agents.base.BaseAgent.save_chat_history)
    * [stream](#spoon_ai.agents.base.BaseAgent.stream)
    * [process\_mcp\_message](#spoon_ai.agents.base.BaseAgent.process_mcp_message)
    * [shutdown](#spoon_ai.agents.base.BaseAgent.shutdown)
    * [get\_diagnostics](#spoon_ai.agents.base.BaseAgent.get_diagnostics)
* [spoon\_ai.rag.embeddings](#spoon_ai.rag.embeddings)
  * [HashEmbeddingClient](#spoon_ai.rag.embeddings.HashEmbeddingClient)
* [spoon\_ai.rag.loader](#spoon_ai.rag.loader)
* [spoon\_ai.rag.retriever](#spoon_ai.rag.retriever)
* [spoon\_ai.rag.qa](#spoon_ai.rag.qa)
* [spoon\_ai.rag.vectorstores.faiss\_store](#spoon_ai.rag.vectorstores.faiss_store)
  * [FaissVectorStore](#spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore)
* [spoon\_ai.rag.vectorstores.chroma\_store](#spoon_ai.rag.vectorstores.chroma_store)
* [spoon\_ai.rag.vectorstores.pinecone\_store](#spoon_ai.rag.vectorstores.pinecone_store)
* [spoon\_ai.rag.vectorstores.qdrant\_store](#spoon_ai.rag.vectorstores.qdrant_store)
* [spoon\_ai.rag.vectorstores.registry](#spoon_ai.rag.vectorstores.registry)
  * [get\_vector\_store](#spoon_ai.rag.vectorstores.registry.get_vector_store)
* [spoon\_ai.rag.vectorstores](#spoon_ai.rag.vectorstores)
* [spoon\_ai.rag.vectorstores.base](#spoon_ai.rag.vectorstores.base)
  * [VectorStore](#spoon_ai.rag.vectorstores.base.VectorStore)
    * [query](#spoon_ai.rag.vectorstores.base.VectorStore.query)
* [spoon\_ai.rag.config](#spoon_ai.rag.config)
  * [RagConfig](#spoon_ai.rag.config.RagConfig)
    * [backend](#spoon_ai.rag.config.RagConfig.backend)
    * [embeddings\_provider](#spoon_ai.rag.config.RagConfig.embeddings_provider)
* [spoon\_ai.rag](#spoon_ai.rag)
* [spoon\_ai.rag.index](#spoon_ai.rag.index)
* [spoon\_ai.prompts.toolcall](#spoon_ai.prompts.toolcall)
* [spoon\_ai.prompts](#spoon_ai.prompts)
* [spoon\_ai.prompts.spoon\_react](#spoon_ai.prompts.spoon_react)
* [spoon\_ai.turnkey.client](#spoon_ai.turnkey.client)
  * [Turnkey](#spoon_ai.turnkey.client.Turnkey)
    * [\_\_init\_\_](#spoon_ai.turnkey.client.Turnkey.__init__)
    * [whoami](#spoon_ai.turnkey.client.Turnkey.whoami)
    * [import\_private\_key](#spoon_ai.turnkey.client.Turnkey.import_private_key)
    * [sign\_evm\_transaction](#spoon_ai.turnkey.client.Turnkey.sign_evm_transaction)
    * [sign\_typed\_data](#spoon_ai.turnkey.client.Turnkey.sign_typed_data)
    * [sign\_message](#spoon_ai.turnkey.client.Turnkey.sign_message)
    * [get\_activity](#spoon_ai.turnkey.client.Turnkey.get_activity)
    * [list\_activities](#spoon_ai.turnkey.client.Turnkey.list_activities)
    * [get\_policy\_evaluations](#spoon_ai.turnkey.client.Turnkey.get_policy_evaluations)
    * [get\_private\_key](#spoon_ai.turnkey.client.Turnkey.get_private_key)
    * [create\_wallet](#spoon_ai.turnkey.client.Turnkey.create_wallet)
    * [create\_wallet\_accounts](#spoon_ai.turnkey.client.Turnkey.create_wallet_accounts)
    * [get\_wallet](#spoon_ai.turnkey.client.Turnkey.get_wallet)
    * [get\_wallet\_account](#spoon_ai.turnkey.client.Turnkey.get_wallet_account)
    * [list\_wallets](#spoon_ai.turnkey.client.Turnkey.list_wallets)
    * [list\_wallet\_accounts](#spoon_ai.turnkey.client.Turnkey.list_wallet_accounts)
    * [init\_import\_wallet](#spoon_ai.turnkey.client.Turnkey.init_import_wallet)
    * [encrypt\_wallet](#spoon_ai.turnkey.client.Turnkey.encrypt_wallet)
    * [encrypt\_private\_key](#spoon_ai.turnkey.client.Turnkey.encrypt_private_key)
    * [init\_import\_private\_key](#spoon_ai.turnkey.client.Turnkey.init_import_private_key)
    * [import\_wallet](#spoon_ai.turnkey.client.Turnkey.import_wallet)
* [spoon\_ai.turnkey](#spoon_ai.turnkey)
* [spoon\_ai.callbacks.streaming\_stdout](#spoon_ai.callbacks.streaming_stdout)
  * [StreamingStdOutCallbackHandler](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler)
    * [on\_llm\_new\_token](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_new_token)
    * [on\_llm\_end](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_end)
* [spoon\_ai.callbacks.statistics](#spoon_ai.callbacks.statistics)
  * [StreamingStatisticsCallback](#spoon_ai.callbacks.statistics.StreamingStatisticsCallback)
* [spoon\_ai.callbacks.stream\_event](#spoon_ai.callbacks.stream_event)
  * [StreamEventCallbackHandler](#spoon_ai.callbacks.stream_event.StreamEventCallbackHandler)
* [spoon\_ai.callbacks.manager](#spoon_ai.callbacks.manager)
  * [CallbackManager](#spoon_ai.callbacks.manager.CallbackManager)
* [spoon\_ai.callbacks](#spoon_ai.callbacks)
* [spoon\_ai.callbacks.base](#spoon_ai.callbacks.base)
  * [RetrieverManagerMixin](#spoon_ai.callbacks.base.RetrieverManagerMixin)
    * [on\_retriever\_start](#spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_start)
    * [on\_retriever\_end](#spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_end)
    * [on\_retriever\_error](#spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_error)
  * [LLMManagerMixin](#spoon_ai.callbacks.base.LLMManagerMixin)
    * [on\_llm\_start](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_start)
    * [on\_llm\_new\_token](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_new_token)
    * [on\_llm\_end](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_end)
    * [on\_llm\_error](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_error)
  * [ChainManagerMixin](#spoon_ai.callbacks.base.ChainManagerMixin)
    * [on\_chain\_start](#spoon_ai.callbacks.base.ChainManagerMixin.on_chain_start)
    * [on\_chain\_end](#spoon_ai.callbacks.base.ChainManagerMixin.on_chain_end)
    * [on\_chain\_error](#spoon_ai.callbacks.base.ChainManagerMixin.on_chain_error)
  * [ToolManagerMixin](#spoon_ai.callbacks.base.ToolManagerMixin)
    * [on\_tool\_start](#spoon_ai.callbacks.base.ToolManagerMixin.on_tool_start)
    * [on\_tool\_end](#spoon_ai.callbacks.base.ToolManagerMixin.on_tool_end)
    * [on\_tool\_error](#spoon_ai.callbacks.base.ToolManagerMixin.on_tool_error)
  * [PromptManagerMixin](#spoon_ai.callbacks.base.PromptManagerMixin)
    * [on\_prompt\_start](#spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_start)
    * [on\_prompt\_end](#spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_end)
    * [on\_prompt\_error](#spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_error)
  * [BaseCallbackHandler](#spoon_ai.callbacks.base.BaseCallbackHandler)
    * [raise\_error](#spoon_ai.callbacks.base.BaseCallbackHandler.raise_error)
    * [run\_inline](#spoon_ai.callbacks.base.BaseCallbackHandler.run_inline)
    * [ignore\_llm](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_llm)
    * [ignore\_chain](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_chain)
    * [ignore\_tool](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_tool)
    * [ignore\_retriever](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_retriever)
    * [ignore\_prompt](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_prompt)
  * [AsyncCallbackHandler](#spoon_ai.callbacks.base.AsyncCallbackHandler)
* [spoon\_ai.schema](#spoon_ai.schema)
  * [Function](#spoon_ai.schema.Function)
    * [get\_arguments\_dict](#spoon_ai.schema.Function.get_arguments_dict)
    * [create](#spoon_ai.schema.Function.create)
  * [AgentState](#spoon_ai.schema.AgentState)
  * [ToolChoice](#spoon_ai.schema.ToolChoice)
  * [Role](#spoon_ai.schema.Role)
  * [ROLE\_TYPE](#spoon_ai.schema.ROLE_TYPE)
  * [Message](#spoon_ai.schema.Message)
    * [role](#spoon_ai.schema.Message.role)
  * [SystemMessage](#spoon_ai.schema.SystemMessage)
    * [role](#spoon_ai.schema.SystemMessage.role)
  * [TOOL\_CHOICE\_TYPE](#spoon_ai.schema.TOOL_CHOICE_TYPE)
  * [LLMConfig](#spoon_ai.schema.LLMConfig)
  * [LLMResponse](#spoon_ai.schema.LLMResponse)
    * [text](#spoon_ai.schema.LLMResponse.text)
  * [LLMResponseChunk](#spoon_ai.schema.LLMResponseChunk)
* [spoon\_ai.memory.utils](#spoon_ai.memory.utils)
  * [extract\_memories](#spoon_ai.memory.utils.extract_memories)
  * [extract\_first\_memory\_id](#spoon_ai.memory.utils.extract_first_memory_id)
* [spoon\_ai.memory.short\_term\_manager](#spoon_ai.memory.short_term_manager)
  * [TrimStrategy](#spoon_ai.memory.short_term_manager.TrimStrategy)
    * [FROM\_START](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_START)
    * [FROM\_END](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_END)
  * [MessageTokenCounter](#spoon_ai.memory.short_term_manager.MessageTokenCounter)
  * [ShortTermMemoryManager](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager)
    * [trim\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.trim_messages)
    * [summarize\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.summarize_messages)
* [spoon\_ai.memory.remove\_message](#spoon_ai.memory.remove_message)
  * [RemoveMessage](#spoon_ai.memory.remove_message.RemoveMessage)
* [spoon\_ai.memory](#spoon_ai.memory)
* [spoon\_ai.memory.mem0\_client](#spoon_ai.memory.mem0_client)
  * [SpoonMem0](#spoon_ai.memory.mem0_client.SpoonMem0)
    * [add\_text](#spoon_ai.memory.mem0_client.SpoonMem0.add_text)
    * [get\_all\_memory](#spoon_ai.memory.mem0_client.SpoonMem0.get_all_memory)
* [spoon\_ai.retrieval.chroma](#spoon_ai.retrieval.chroma)
* [spoon\_ai.retrieval.qdrant](#spoon_ai.retrieval.qdrant)
* [spoon\_ai.retrieval.document\_loader](#spoon_ai.retrieval.document_loader)
  * [BasicTextSplitter](#spoon_ai.retrieval.document_loader.BasicTextSplitter)
    * [split\_text](#spoon_ai.retrieval.document_loader.BasicTextSplitter.split_text)
    * [split\_documents](#spoon_ai.retrieval.document_loader.BasicTextSplitter.split_documents)
  * [DocumentLoader](#spoon_ai.retrieval.document_loader.DocumentLoader)
    * [load\_directory](#spoon_ai.retrieval.document_loader.DocumentLoader.load_directory)
    * [load\_file](#spoon_ai.retrieval.document_loader.DocumentLoader.load_file)
* [spoon\_ai.retrieval](#spoon_ai.retrieval)
* [spoon\_ai.retrieval.base](#spoon_ai.retrieval.base)
  * [BaseRetrievalClient](#spoon_ai.retrieval.base.BaseRetrievalClient)

<a id="spoon_ai"></a>

# Module `spoon_ai`

<a id="spoon_ai.graph"></a>

# Module `spoon_ai.graph`

Graph-based execution system for SpoonOS agents.

This module provides a LangGraph-inspired framework with advanced features:
- State management with TypedDict and reducers
- LLM Manager integration
- Error handling and recovery
- Human-in-the-loop patterns
- Multi-agent coordination
- Comprehensive testing support
- Checkpointing and persistence

<a id="spoon_ai.graph.GraphExecutionError"></a>

## `GraphExecutionError` Objects

```python
class GraphExecutionError(Exception)
```

Raised when graph execution encounters an error.

<a id="spoon_ai.graph.NodeExecutionError"></a>

## `NodeExecutionError` Objects

```python
class NodeExecutionError(Exception)
```

Raised when a node fails to execute.

<a id="spoon_ai.graph.StateValidationError"></a>

## `StateValidationError` Objects

```python
class StateValidationError(Exception)
```

Raised when state validation fails.

<a id="spoon_ai.graph.CheckpointError"></a>

## `CheckpointError` Objects

```python
class CheckpointError(Exception)
```

Raised when checkpoint operations fail.

<a id="spoon_ai.graph.GraphConfigurationError"></a>

## `GraphConfigurationError` Objects

```python
class GraphConfigurationError(Exception)
```

Raised when graph configuration is invalid.

<a id="spoon_ai.graph.EdgeRoutingError"></a>

## `EdgeRoutingError` Objects

```python
class EdgeRoutingError(Exception)
```

Raised when edge routing fails.

<a id="spoon_ai.graph.InterruptError"></a>

## `InterruptError` Objects

```python
class InterruptError(Exception)
```

Raised when graph execution is interrupted for human input.

<a id="spoon_ai.graph.Command"></a>

## `Command` Objects

```python
@dataclass
class Command()
```

Command object for controlling graph flow and state updates.

<a id="spoon_ai.graph.StateSnapshot"></a>

## `StateSnapshot` Objects

```python
@dataclass
class StateSnapshot()
```

Snapshot of graph state at a specific point in time.

<a id="spoon_ai.graph.InMemoryCheckpointer"></a>

## `InMemoryCheckpointer` Objects

```python
class InMemoryCheckpointer()
```

Simple in-memory checkpointer for development and testing.

This checkpointer stores state snapshots in memory and provides
basic checkpoint management functionality. For production use,
consider using persistent checkpointers like Redis or PostgreSQL.

<a id="spoon_ai.graph.InMemoryCheckpointer.__init__"></a>

#### `__init__`

```python
def __init__(max_checkpoints_per_thread: int = 100)
```

Initialize the in-memory checkpointer.

**Arguments**:

- `max_checkpoints_per_thread` - Maximum number of checkpoints to keep per thread

<a id="spoon_ai.graph.InMemoryCheckpointer.save_checkpoint"></a>

#### `save_checkpoint`

```python
def save_checkpoint(thread_id: str, snapshot: StateSnapshot) -> None
```

Save a checkpoint for a thread.

**Arguments**:

- `thread_id` - Unique identifier for the thread
- `snapshot` - State snapshot to save
  

**Raises**:

- `CheckpointError` - If checkpoint saving fails

<a id="spoon_ai.graph.InMemoryCheckpointer.get_checkpoint"></a>

#### `get_checkpoint`

```python
def get_checkpoint(thread_id: str,
                   checkpoint_id: str = None) -> Optional[StateSnapshot]
```

Get a specific checkpoint or the latest one.

**Arguments**:

- `thread_id` - Unique identifier for the thread
- `checkpoint_id` - Optional specific checkpoint ID
  

**Returns**:

  StateSnapshot or None if not found
  

**Raises**:

- `CheckpointError` - If checkpoint retrieval fails

<a id="spoon_ai.graph.InMemoryCheckpointer.list_checkpoints"></a>

#### `list_checkpoints`

```python
def list_checkpoints(thread_id: str) -> List[StateSnapshot]
```

List all checkpoints for a thread.

**Arguments**:

- `thread_id` - Unique identifier for the thread
  

**Returns**:

  List of state snapshots
  

**Raises**:

- `CheckpointError` - If checkpoint listing fails

<a id="spoon_ai.graph.InMemoryCheckpointer.clear_thread"></a>

#### `clear_thread`

```python
def clear_thread(thread_id: str) -> None
```

Clear all checkpoints for a thread.

**Arguments**:

- `thread_id` - Unique identifier for the thread

<a id="spoon_ai.graph.InMemoryCheckpointer.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get checkpointer statistics.

**Returns**:

  Dictionary with statistics

<a id="spoon_ai.graph.add_messages"></a>

#### `add_messages`

```python
def add_messages(existing: List[Any], new: List[Any]) -> List[Any]
```

Reducer function for adding messages to a list.

<a id="spoon_ai.graph.interrupt"></a>

#### `interrupt`

```python
def interrupt(data: Dict[str, Any]) -> Any
```

Interrupt execution and wait for human input.

<a id="spoon_ai.graph.StateGraph"></a>

## `StateGraph` Objects

```python
class StateGraph()
```

Enhanced StateGraph with LangGraph-inspired features and SpoonOS integration.

Features:
- TypedDict state management with reducers
- LLM Manager integration
- Error handling and recovery
- Human-in-the-loop patterns
- Checkpointing and persistence
- Multi-agent coordination support

<a id="spoon_ai.graph.StateGraph.__init__"></a>

#### `__init__`

```python
def __init__(state_schema: type, checkpointer: InMemoryCheckpointer = None)
```

Initialize the enhanced state graph.

**Arguments**:

- `state_schema` - TypedDict class defining the state structure
- `checkpointer` - Optional checkpointer for state persistence

<a id="spoon_ai.graph.StateGraph.add_node"></a>

#### `add_node`

```python
def add_node(name: str, action: Callable) -> "StateGraph"
```

Add a node to the graph.

**Arguments**:

- `name` - Unique identifier for the node
- `action` - Function or coroutine that processes the state
  Should accept state dict and return dict of updates or Command
  

**Returns**:

  Self for method chaining
  

**Raises**:

- `GraphConfigurationError` - If node name already exists or is invalid

<a id="spoon_ai.graph.StateGraph.add_llm_node"></a>

#### `add_llm_node`

```python
def add_llm_node(
        name: str,
        system_prompt: str,
        provider: Optional[str] = None,
        model_params: Optional[Dict[str, Any]] = None) -> "StateGraph"
```

Add an LLM-powered node to the graph.

**Arguments**:

- `name` - Unique identifier for the node
- `system_prompt` - System prompt for the LLM
- `provider` - Specific LLM provider to use
- `model_params` - Parameters for the LLM call
  

**Returns**:

  Self for method chaining

<a id="spoon_ai.graph.StateGraph.add_edge"></a>

#### `add_edge`

```python
def add_edge(start_node: str, end_node: str) -> "StateGraph"
```

Add a direct, unconditional edge between two nodes.

**Arguments**:

- `start_node` - Name of the source node (or "START")
- `end_node` - Name of the destination node (or "END")
  

**Returns**:

  Self for method chaining
  

**Raises**:

- `GraphConfigurationError` - If nodes don't exist or edge is invalid

<a id="spoon_ai.graph.StateGraph.add_conditional_edges"></a>

#### `add_conditional_edges`

```python
def add_conditional_edges(start_node: str,
                          condition: Callable[[Dict[str, Any]], str],
                          path_map: Dict[str, str]) -> "StateGraph"
```

Add conditional edges that route to different nodes based on state.

**Arguments**:

- `start_node` - Name of the source node
- `condition` - Function that takes state and returns a key from path_map
- `path_map` - Mapping from condition results to destination node names
  

**Returns**:

  Self for method chaining
  

**Raises**:

- `GraphConfigurationError` - If configuration is invalid

<a id="spoon_ai.graph.StateGraph.set_entry_point"></a>

#### `set_entry_point`

```python
def set_entry_point(node_name: str) -> "StateGraph"
```

Set the starting node for graph execution.

**Arguments**:

- `node_name` - Name of the node to start execution from
  

**Returns**:

  Self for method chaining
  

**Raises**:

- `GraphConfigurationError` - If entry point node doesn't exist

<a id="spoon_ai.graph.StateGraph.compile"></a>

#### `compile`

```python
def compile() -> "CompiledGraph"
```

Compile the graph into an executable form.

**Returns**:

  CompiledGraph instance ready for execution
  

**Raises**:

- `GraphConfigurationError` - If graph configuration is invalid

<a id="spoon_ai.graph.CompiledGraph"></a>

## `CompiledGraph` Objects

```python
class CompiledGraph()
```

Executable version of a StateGraph with advanced features.

<a id="spoon_ai.graph.CompiledGraph.__init__"></a>

#### `__init__`

```python
def __init__(graph: StateGraph)
```

Initialize with a compiled StateGraph.

<a id="spoon_ai.graph.CompiledGraph.invoke"></a>

#### `invoke`

```python
async def invoke(initial_state: Optional[Dict[str, Any]] = None,
                 config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute the graph from the entry point.

<a id="spoon_ai.graph.CompiledGraph.stream"></a>

#### `stream`

```python
async def stream(initial_state: Optional[Dict[str, Any]] = None,
                 config: Optional[Dict[str, Any]] = None,
                 stream_mode: str = "values")
```

Stream graph execution with different modes.

<a id="spoon_ai.graph.CompiledGraph.get_execution_history"></a>

#### `get_execution_history`

```python
def get_execution_history() -> List[Dict[str, Any]]
```

Get the execution history for debugging and analysis.

<a id="spoon_ai.graph.CompiledGraph.get_state"></a>

#### `get_state`

```python
def get_state(config: Dict[str, Any]) -> Optional[StateSnapshot]
```

Get the current state snapshot for a thread.

<a id="spoon_ai.llm.vlm_provider.gemini"></a>

# Module `spoon_ai.llm.vlm_provider.gemini`

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiConfig"></a>

## `GeminiConfig` Objects

```python
class GeminiConfig(LLMConfig)
```

Gemini Configuration

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiConfig.validate_api_key"></a>

#### `validate_api_key`

```python
@model_validator(mode='after')
def validate_api_key()
```

Validate that API key is provided

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider"></a>

## `GeminiProvider` Objects

```python
@LLMFactory.register("gemini")
class GeminiProvider(LLMBase)
```

Gemini Provider Implementation

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "chitchat")
```

Initialize Gemini Provider

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name
  

**Raises**:

- `ValueError` - If GEMINI_API_KEY environment variable is not set

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               response_modalities: Optional[List[str]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to Gemini and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `response_modalities` - List of response modalities (optional, e.g. ['Text', 'Image'])
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to Gemini and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request to Gemini that may contain tool calls and get response

Note: Gemini currently doesn't support tool calls, this method will use regular chat method

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools (not supported by Gemini)
- `tool_choice` - Tool choice mode (not supported by Gemini)
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.generate_content"></a>

#### `generate_content`

```python
async def generate_content(model: Optional[str] = None,
                           contents: Union[str, List, types.Content,
                                           types.Part] = None,
                           config: Optional[
                               types.GenerateContentConfig] = None,
                           **kwargs) -> LLMResponse
```

Directly call Gemini's generate_content interface

**Arguments**:

- `model` - Model name (optional, will override model in configuration)
- `contents` - Request content, can be string, list, or types.Content/types.Part object
- `config` - Generation configuration
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base"></a>

# Module `spoon_ai.llm.vlm_provider.base`

<a id="spoon_ai.llm.vlm_provider.base.LLMConfig"></a>

## `LLMConfig` Objects

```python
class LLMConfig(BaseModel)
```

Base class for LLM configuration

<a id="spoon_ai.llm.vlm_provider.base.LLMResponse"></a>

## `LLMResponse` Objects

```python
class LLMResponse(BaseModel)
```

Base class for LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMResponse.text"></a>

#### `text`

Original text response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase"></a>

## `LLMBase` Objects

```python
class LLMBase(ABC)
```

Base abstract class for LLM, defining interfaces that all LLM providers must implement

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "llm")
```

Initialize LLM interface

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to LLM and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request that may contain tool calls to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools
- `tool_choice` - Tool selection mode
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.generate_image"></a>

#### `generate_image`

```python
async def generate_image(prompt: str, **kwargs) -> Union[str, List[str]]
```

Generate image (optional implementation)

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

  Union[str, List[str]]: Image URL or list of URLs

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.reset_output_handler"></a>

#### `reset_output_handler`

```python
def reset_output_handler()
```

Reset output handler

<a id="spoon_ai.llm.factory"></a>

# Module `spoon_ai.llm.factory`

<a id="spoon_ai.llm.factory.LLMFactory"></a>

## `LLMFactory` Objects

```python
class LLMFactory()
```

LLM factory class, used to create different LLM instances

<a id="spoon_ai.llm.factory.LLMFactory.register"></a>

#### `register`

```python
@classmethod
def register(cls, provider_name: str)
```

Register LLM provider

**Arguments**:

- `provider_name` - Provider name
  

**Returns**:

  Decorator function

<a id="spoon_ai.llm.factory.LLMFactory.create"></a>

#### `create`

```python
@classmethod
def create(cls,
           provider: Optional[str] = None,
           config_path: str = "config/config.toml",
           config_name: str = "llm") -> LLMBase
```

Create LLM instance

**Arguments**:

- `provider` - Provider name, if None, read from configuration file
- `config_path` - Configuration file path
- `config_name` - Configuration name
  

**Returns**:

- `LLMBase` - LLM instance
  

**Raises**:

- `ValueError` - If provider does not exist

<a id="spoon_ai.llm.monitoring"></a>

# Module `spoon_ai.llm.monitoring`

Comprehensive monitoring, debugging, and metrics collection for LLM operations.

<a id="spoon_ai.llm.monitoring.RequestMetrics"></a>

## `RequestMetrics` Objects

```python
@dataclass
class RequestMetrics()
```

Metrics for a single LLM request.

<a id="spoon_ai.llm.monitoring.ProviderStats"></a>

## `ProviderStats` Objects

```python
@dataclass
class ProviderStats()
```

Aggregated statistics for a provider.

<a id="spoon_ai.llm.monitoring.ProviderStats.get"></a>

#### `get`

```python
def get(key: str, default=None)
```

Get attribute value with default fallback for dictionary-like access.

**Arguments**:

- `key` - Attribute name
- `default` - Default value if attribute doesn't exist
  

**Returns**:

  Attribute value or default

<a id="spoon_ai.llm.monitoring.ProviderStats.success_rate"></a>

#### `success_rate`

```python
@property
def success_rate() -> float
```

Calculate success rate as a percentage.

<a id="spoon_ai.llm.monitoring.ProviderStats.avg_response_time"></a>

#### `avg_response_time`

```python
@property
def avg_response_time() -> float
```

Get average response time.

<a id="spoon_ai.llm.monitoring.DebugLogger"></a>

## `DebugLogger` Objects

```python
class DebugLogger()
```

Comprehensive logging and debugging system for LLM operations.

<a id="spoon_ai.llm.monitoring.DebugLogger.__init__"></a>

#### `__init__`

```python
def __init__(max_history: int = 1000, enable_detailed_logging: bool = True)
```

Initialize debug logger.

**Arguments**:

- `max_history` - Maximum number of requests to keep in history
- `enable_detailed_logging` - Whether to enable detailed request/response logging

<a id="spoon_ai.llm.monitoring.DebugLogger.log_request"></a>

#### `log_request`

```python
def log_request(provider: str, method: str, params: Dict[str, Any]) -> str
```

Log request with unique ID.

**Arguments**:

- `provider` - Provider name
- `method` - Method being called (chat, completion, etc.)
- `params` - Request parameters
  

**Returns**:

- `str` - Unique request ID

<a id="spoon_ai.llm.monitoring.DebugLogger.log_response"></a>

#### `log_response`

```python
def log_response(request_id: str, response: LLMResponse,
                 duration: float) -> None
```

Log response with timing information.

**Arguments**:

- `request_id` - Request ID from log_request
- `response` - LLM response object
- `duration` - Request duration in seconds

<a id="spoon_ai.llm.monitoring.DebugLogger.log_error"></a>

#### `log_error`

```python
def log_error(request_id: str, error: Exception, context: Dict[str,
                                                               Any]) -> None
```

Log error with context.

**Arguments**:

- `request_id` - Request ID from log_request
- `error` - Exception that occurred
- `context` - Additional error context

<a id="spoon_ai.llm.monitoring.DebugLogger.log_fallback"></a>

#### `log_fallback`

```python
def log_fallback(from_provider: str, to_provider: str, reason: str) -> None
```

Log provider fallback event.

**Arguments**:

- `from_provider` - Provider that failed
- `to_provider` - Provider being used as fallback
- `reason` - Reason for fallback

<a id="spoon_ai.llm.monitoring.DebugLogger.get_request_history"></a>

#### `get_request_history`

```python
def get_request_history(provider: Optional[str] = None,
                        limit: Optional[int] = None) -> List[RequestMetrics]
```

Get request history.

**Arguments**:

- `provider` - Filter by provider (optional)
- `limit` - Maximum number of requests to return (optional)
  

**Returns**:

- `List[RequestMetrics]` - List of request metrics

<a id="spoon_ai.llm.monitoring.DebugLogger.get_active_requests"></a>

#### `get_active_requests`

```python
def get_active_requests() -> List[RequestMetrics]
```

Get currently active requests.

**Returns**:

- `List[RequestMetrics]` - List of active request metrics

<a id="spoon_ai.llm.monitoring.DebugLogger.clear_history"></a>

#### `clear_history`

```python
def clear_history() -> None
```

Clear request history.

<a id="spoon_ai.llm.monitoring.MetricsCollector"></a>

## `MetricsCollector` Objects

```python
class MetricsCollector()
```

Collects and aggregates performance metrics for LLM providers.

<a id="spoon_ai.llm.monitoring.MetricsCollector.__init__"></a>

#### `__init__`

```python
def __init__(window_size: int = 3600)
```

Initialize metrics collector.

**Arguments**:

- `window_size` - Time window in seconds for rolling metrics

<a id="spoon_ai.llm.monitoring.MetricsCollector.record_request"></a>

#### `record_request`

```python
def record_request(provider: str,
                   method: str,
                   duration: float,
                   success: bool,
                   tokens: int = 0,
                   model: str = '',
                   error: Optional[str] = None) -> None
```

Record request metrics.

**Arguments**:

- `provider` - Provider name
- `method` - Method called
- `duration` - Request duration in seconds
- `success` - Whether request was successful
- `tokens` - Number of tokens used
- `model` - Model name
- `error` - Error message if failed

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_provider_stats"></a>

#### `get_provider_stats`

```python
def get_provider_stats(provider: str) -> Optional[ProviderStats]
```

Get statistics for a specific provider.

**Arguments**:

- `provider` - Provider name
  

**Returns**:

- `Optional[ProviderStats]` - Provider statistics or None if not found

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_all_stats"></a>

#### `get_all_stats`

```python
def get_all_stats() -> Dict[str, ProviderStats]
```

Get statistics for all providers.

**Returns**:

  Dict[str, ProviderStats]: Dictionary of provider statistics

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_rolling_metrics"></a>

#### `get_rolling_metrics`

```python
def get_rolling_metrics(provider: Optional[str] = None,
                        method: Optional[str] = None) -> List[Dict[str, Any]]
```

Get rolling metrics with optional filtering.

**Arguments**:

- `provider` - Filter by provider (optional)
- `method` - Filter by method (optional)
  

**Returns**:

  List[Dict[str, Any]]: List of metrics

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_summary"></a>

#### `get_summary`

```python
def get_summary() -> Dict[str, Any]
```

Get overall summary statistics.

**Returns**:

  Dict[str, Any]: Summary statistics

<a id="spoon_ai.llm.monitoring.MetricsCollector.reset_stats"></a>

#### `reset_stats`

```python
def reset_stats(provider: Optional[str] = None) -> None
```

Reset statistics.

**Arguments**:

- `provider` - Reset specific provider only (optional)

<a id="spoon_ai.llm.monitoring.get_debug_logger"></a>

#### `get_debug_logger`

```python
def get_debug_logger() -> DebugLogger
```

Get global debug logger instance.

**Returns**:

- `DebugLogger` - Global debug logger

<a id="spoon_ai.llm.monitoring.get_metrics_collector"></a>

#### `get_metrics_collector`

```python
def get_metrics_collector() -> MetricsCollector
```

Get global metrics collector instance.

**Returns**:

- `MetricsCollector` - Global metrics collector

<a id="spoon_ai.llm.response_normalizer"></a>

# Module `spoon_ai.llm.response_normalizer`

Response normalizer for ensuring consistent response formats across providers.

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer"></a>

## `ResponseNormalizer` Objects

```python
class ResponseNormalizer()
```

Normalizes responses from different providers to ensure consistency.

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response"></a>

#### `normalize_response`

```python
def normalize_response(response: LLMResponse) -> LLMResponse
```

Normalize a response from any provider.

**Arguments**:

- `response` - Raw LLM response
  

**Returns**:

- `LLMResponse` - Normalized response
  

**Raises**:

- `ValidationError` - If response cannot be normalized

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response"></a>

#### `validate_response`

```python
def validate_response(response: LLMResponse) -> bool
```

Validate that a response meets minimum requirements.

**Arguments**:

- `response` - Response to validate
  

**Returns**:

- `bool` - True if response is valid
  

**Raises**:

- `ValidationError` - If response is invalid

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping"></a>

#### `add_provider_mapping`

```python
def add_provider_mapping(provider_name: str, normalizer_func) -> None
```

Add a custom normalizer for a new provider.

**Arguments**:

- `provider_name` - Name of the provider
- `normalizer_func` - Function that takes and returns LLMResponse

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers"></a>

#### `get_supported_providers`

```python
def get_supported_providers() -> List[str]
```

Get list of providers with custom normalizers.

**Returns**:

- `List[str]` - List of provider names

<a id="spoon_ai.llm.response_normalizer.get_response_normalizer"></a>

#### `get_response_normalizer`

```python
def get_response_normalizer() -> ResponseNormalizer
```

Get global response normalizer instance.

**Returns**:

- `ResponseNormalizer` - Global normalizer instance

<a id="spoon_ai.llm.cache"></a>

# Module `spoon_ai.llm.cache`

Caching system for LLM responses to improve performance.

<a id="spoon_ai.llm.cache.CacheEntry"></a>

## `CacheEntry` Objects

```python
@dataclass
class CacheEntry()
```

Cache entry for LLM responses.

<a id="spoon_ai.llm.cache.CacheEntry.is_expired"></a>

#### `is_expired`

```python
def is_expired(ttl: float) -> bool
```

Check if cache entry is expired.

**Arguments**:

- `ttl` - Time to live in seconds
  

**Returns**:

- `bool` - True if expired

<a id="spoon_ai.llm.cache.CacheEntry.touch"></a>

#### `touch`

```python
def touch() -> None
```

Update access information.

<a id="spoon_ai.llm.cache.LLMResponseCache"></a>

## `LLMResponseCache` Objects

```python
class LLMResponseCache()
```

Cache for LLM responses with TTL and size limits.

<a id="spoon_ai.llm.cache.LLMResponseCache.__init__"></a>

#### `__init__`

```python
def __init__(max_size: int = 1000, default_ttl: float = 3600)
```

Initialize cache.

**Arguments**:

- `max_size` - Maximum number of entries
- `default_ttl` - Default time to live in seconds

<a id="spoon_ai.llm.cache.LLMResponseCache.get"></a>

#### `get`

```python
def get(messages: List[Message],
        provider: str,
        ttl: Optional[float] = None,
        **kwargs) -> Optional[LLMResponse]
```

Get cached response if available and not expired.

**Arguments**:

- `messages` - List of messages
- `provider` - Provider name
- `ttl` - Time to live override
- `**kwargs` - Additional parameters
  

**Returns**:

- `Optional[LLMResponse]` - Cached response if available

<a id="spoon_ai.llm.cache.LLMResponseCache.put"></a>

#### `put`

```python
def put(messages: List[Message], provider: str, response: LLMResponse,
        **kwargs) -> None
```

Store response in cache.

**Arguments**:

- `messages` - List of messages
- `provider` - Provider name
- `response` - Response to cache
- `**kwargs` - Additional parameters

<a id="spoon_ai.llm.cache.LLMResponseCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cache entries.

<a id="spoon_ai.llm.cache.LLMResponseCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

<a id="spoon_ai.llm.cache.LLMResponseCache.cleanup_expired"></a>

#### `cleanup_expired`

```python
def cleanup_expired() -> int
```

Remove expired entries.

**Returns**:

- `int` - Number of entries removed

<a id="spoon_ai.llm.cache.get_global_cache"></a>

#### `get_global_cache`

```python
def get_global_cache() -> LLMResponseCache
```

Get global cache instance.

**Returns**:

- `LLMResponseCache` - Global cache instance

<a id="spoon_ai.llm.cache.set_global_cache"></a>

#### `set_global_cache`

```python
def set_global_cache(cache: LLMResponseCache) -> None
```

Set global cache instance.

**Arguments**:

- `cache` - Cache instance to set as global

<a id="spoon_ai.llm.cache.CachedLLMManager"></a>

## `CachedLLMManager` Objects

```python
class CachedLLMManager()
```

LLM Manager wrapper with caching support.

<a id="spoon_ai.llm.cache.CachedLLMManager.__init__"></a>

#### `__init__`

```python
def __init__(manager, cache: Optional[LLMResponseCache] = None)
```

Initialize cached manager.

**Arguments**:

- `manager` - LLM manager instance
- `cache` - Cache instance (optional)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               use_cache: bool = True,
               **kwargs) -> LLMResponse
```

Chat with caching support.

**Arguments**:

- `messages` - List of messages
- `provider` - Provider name
- `use_cache` - Whether to use cache
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Response (cached or fresh)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          tools: List[Dict],
                          provider: Optional[str] = None,
                          use_cache: bool = True,
                          **kwargs) -> LLMResponse
```

Chat with tools and caching support.

**Arguments**:

- `messages` - List of messages
- `tools` - List of tools
- `provider` - Provider name
- `use_cache` - Whether to use cache
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Response (cached or fresh)

<a id="spoon_ai.llm.cache.CachedLLMManager.enable_cache"></a>

#### `enable_cache`

```python
def enable_cache() -> None
```

Enable caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.disable_cache"></a>

#### `disable_cache`

```python
def disable_cache() -> None
```

Disable caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear cache.

<a id="spoon_ai.llm.cache.CachedLLMManager.get_cache_stats"></a>

#### `get_cache_stats`

```python
def get_cache_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

<a id="spoon_ai.llm.cache.CachedLLMManager.__getattr__"></a>

#### `__getattr__`

```python
def __getattr__(name)
```

Delegate other methods to the underlying manager.

<a id="spoon_ai.llm.interface"></a>

# Module `spoon_ai.llm.interface`

LLM Provider Interface - Abstract base class defining the unified interface for all LLM providers.

<a id="spoon_ai.llm.interface.ProviderCapability"></a>

## `ProviderCapability` Objects

```python
class ProviderCapability(Enum)
```

Enumeration of capabilities that LLM providers can support.

<a id="spoon_ai.llm.interface.ProviderMetadata"></a>

## `ProviderMetadata` Objects

```python
@dataclass
class ProviderMetadata()
```

Metadata describing a provider's capabilities and limits.

<a id="spoon_ai.llm.interface.LLMResponse"></a>

## `LLMResponse` Objects

```python
@dataclass
class LLMResponse()
```

Enhanced LLM response with comprehensive metadata and debugging information.

<a id="spoon_ai.llm.interface.LLMProviderInterface"></a>

## `LLMProviderInterface` Objects

```python
class LLMProviderInterface(ABC)
```

Abstract base class defining the unified interface for all LLM providers.

<a id="spoon_ai.llm.interface.LLMProviderInterface.initialize"></a>

#### `initialize`

```python
@abstractmethod
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the provider with configuration.

**Arguments**:

- `config` - Provider-specific configuration dictionary
  

**Raises**:

- `ConfigurationError` - If configuration is invalid

<a id="spoon_ai.llm.interface.LLMProviderInterface.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to the provider.

**Arguments**:

- `messages` - List of conversation messages
- `**kwargs` - Additional provider-specific parameters
  

**Returns**:

- `LLMResponse` - Standardized response object
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.chat_stream"></a>

#### `chat_stream`

```python
@abstractmethod
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request to the provider with callback support.

**Arguments**:

- `messages` - List of conversation messages
- `callbacks` - Optional list of callback handlers for real-time events
- `**kwargs` - Additional provider-specific parameters
  

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to the provider.

**Arguments**:

- `prompt` - Text prompt for completion
- `**kwargs` - Additional provider-specific parameters
  

**Returns**:

- `LLMResponse` - Standardized response object
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tool support.

**Arguments**:

- `messages` - List of conversation messages
- `tools` - List of available tools
- `**kwargs` - Additional provider-specific parameters
  

**Returns**:

- `LLMResponse` - Standardized response object with potential tool calls
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.get_metadata"></a>

#### `get_metadata`

```python
@abstractmethod
def get_metadata() -> ProviderMetadata
```

Get provider metadata and capabilities.

**Returns**:

- `ProviderMetadata` - Provider information and capabilities

<a id="spoon_ai.llm.interface.LLMProviderInterface.health_check"></a>

#### `health_check`

```python
@abstractmethod
async def health_check() -> bool
```

Check if provider is healthy and available.

**Returns**:

- `bool` - True if provider is healthy, False otherwise

<a id="spoon_ai.llm.interface.LLMProviderInterface.cleanup"></a>

#### `cleanup`

```python
@abstractmethod
async def cleanup() -> None
```

Cleanup resources and connections.

This method should be called when the provider is no longer needed.

<a id="spoon_ai.llm.providers.deepseek_provider"></a>

# Module `spoon_ai.llm.providers.deepseek_provider`

DeepSeek Provider implementation for the unified LLM interface.
DeepSeek provides access to their models through an OpenAI-compatible API.

<a id="spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider"></a>

## `DeepSeekProvider` Objects

```python
@register_provider("deepseek", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class DeepSeekProvider(OpenAICompatibleProvider)
```

DeepSeek provider implementation using OpenAI-compatible API.

<a id="spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get DeepSeek provider metadata.

<a id="spoon_ai.llm.providers.gemini_provider"></a>

# Module `spoon_ai.llm.providers.gemini_provider`

Gemini Provider implementation for the unified LLM interface.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider"></a>

## `GeminiProvider` Objects

```python
@register_provider("gemini", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.STREAMING,
    ProviderCapability.TOOLS,
    ProviderCapability.IMAGE_GENERATION,
    ProviderCapability.VISION
])
class GeminiProvider(LLMProviderInterface)
```

Gemini provider implementation.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.initialize"></a>

#### `initialize`

```python
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the Gemini provider with configuration.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to Gemini.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request to Gemini with callback support.

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to Gemini.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tools to Gemini using native function calling.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get Gemini provider metadata.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.health_check"></a>

#### `health_check`

```python
async def health_check() -> bool
```

Check if Gemini provider is healthy.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup Gemini provider resources.

<a id="spoon_ai.llm.providers.openai_compatible_provider"></a>

# Module `spoon_ai.llm.providers.openai_compatible_provider`

OpenAI Compatible Provider base class for providers that use OpenAI-compatible APIs.
This includes OpenAI, OpenRouter, DeepSeek, and other providers with similar interfaces.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider"></a>

## `OpenAICompatibleProvider` Objects

```python
class OpenAICompatibleProvider(LLMProviderInterface)
```

Base class for OpenAI-compatible providers.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_provider_name"></a>

#### `get_provider_name`

```python
def get_provider_name() -> str
```

Get the provider name. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_base_url"></a>

#### `get_default_base_url`

```python
def get_default_base_url() -> str
```

Get the default base URL. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_model"></a>

#### `get_default_model`

```python
def get_default_model() -> str
```

Get the default model. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_additional_headers"></a>

#### `get_additional_headers`

```python
def get_additional_headers(config: Dict[str, Any]) -> Dict[str, str]
```

Get additional headers for the provider. Can be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.initialize"></a>

#### `initialize`

```python
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the provider with configuration.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to the provider.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request with full callback support.

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to the provider.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tools to the provider.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get provider metadata. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.health_check"></a>

#### `health_check`

```python
async def health_check() -> bool
```

Check if provider is healthy.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup provider resources.

<a id="spoon_ai.llm.providers.openai_provider"></a>

# Module `spoon_ai.llm.providers.openai_provider`

OpenAI Provider implementation for the unified LLM interface.

<a id="spoon_ai.llm.providers.openai_provider.OpenAIProvider"></a>

## `OpenAIProvider` Objects

```python
@register_provider("openai", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class OpenAIProvider(OpenAICompatibleProvider)
```

OpenAI provider implementation.

<a id="spoon_ai.llm.providers.openai_provider.OpenAIProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get OpenAI provider metadata.

<a id="spoon_ai.llm.providers.anthropic_provider"></a>

# Module `spoon_ai.llm.providers.anthropic_provider`

Anthropic Provider implementation for the unified LLM interface.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider"></a>

## `AnthropicProvider` Objects

```python
@register_provider("anthropic", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class AnthropicProvider(LLMProviderInterface)
```

Anthropic provider implementation.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.initialize"></a>

#### `initialize`

```python
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the Anthropic provider with configuration.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_cache_metrics"></a>

#### `get_cache_metrics`

```python
def get_cache_metrics() -> Dict[str, int]
```

Get current cache performance metrics.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to Anthropic.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request to Anthropic with callback support.

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to Anthropic.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tools to Anthropic.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get Anthropic provider metadata.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.health_check"></a>

#### `health_check`

```python
async def health_check() -> bool
```

Check if Anthropic provider is healthy.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup Anthropic provider resources.

<a id="spoon_ai.llm.providers.openrouter_provider"></a>

# Module `spoon_ai.llm.providers.openrouter_provider`

OpenRouter Provider implementation for the unified LLM interface.
OpenRouter provides access to multiple LLM models through a unified API compatible with OpenAI.

<a id="spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider"></a>

## `OpenRouterProvider` Objects

```python
@register_provider("openrouter", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class OpenRouterProvider(OpenAICompatibleProvider)
```

OpenRouter provider implementation using OpenAI-compatible API.

<a id="spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_additional_headers"></a>

#### `get_additional_headers`

```python
def get_additional_headers(config: Dict[str, Any]) -> Dict[str, str]
```

Get OpenRouter-specific headers.

<a id="spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get OpenRouter provider metadata.

<a id="spoon_ai.llm.providers"></a>

# Module `spoon_ai.llm.providers`

LLM Provider implementations.

<a id="spoon_ai.llm.manager"></a>

# Module `spoon_ai.llm.manager`

LLM Manager - Central orchestrator for managing providers, fallback, and load balancing.

<a id="spoon_ai.llm.manager.ProviderState"></a>

## `ProviderState` Objects

```python
@dataclass
class ProviderState()
```

Track provider initialization and health state.

<a id="spoon_ai.llm.manager.ProviderState.can_retry_initialization"></a>

#### `can_retry_initialization`

```python
def can_retry_initialization() -> bool
```

Check if provider initialization can be retried.

<a id="spoon_ai.llm.manager.ProviderState.record_initialization_failure"></a>

#### `record_initialization_failure`

```python
def record_initialization_failure(error: Exception) -> None
```

Record initialization failure with exponential backoff.

<a id="spoon_ai.llm.manager.ProviderState.record_initialization_success"></a>

#### `record_initialization_success`

```python
def record_initialization_success() -> None
```

Record successful initialization.

<a id="spoon_ai.llm.manager.FallbackStrategy"></a>

## `FallbackStrategy` Objects

```python
class FallbackStrategy()
```

Handles fallback logic between providers.

<a id="spoon_ai.llm.manager.FallbackStrategy.execute_with_fallback"></a>

#### `execute_with_fallback`

```python
async def execute_with_fallback(providers: List[str], operation, *args,
                                **kwargs) -> LLMResponse
```

Execute operation with fallback chain.

**Arguments**:

- `providers` - List of provider names in fallback order
- `operation` - Async operation to execute
  *args, **kwargs: Arguments for the operation
  

**Returns**:

- `LLMResponse` - Response from successful provider
  

**Raises**:

- `ProviderError` - If all providers fail

<a id="spoon_ai.llm.manager.LoadBalancer"></a>

## `LoadBalancer` Objects

```python
class LoadBalancer()
```

Handles load balancing between multiple provider instances.

<a id="spoon_ai.llm.manager.LoadBalancer.select_provider"></a>

#### `select_provider`

```python
def select_provider(providers: List[str],
                    strategy: str = "round_robin") -> str
```

Select a provider based on load balancing strategy.

**Arguments**:

- `providers` - List of available providers
- `strategy` - Load balancing strategy ('round_robin', 'weighted', 'random')
  

**Returns**:

- `str` - Selected provider name

<a id="spoon_ai.llm.manager.LoadBalancer.update_provider_health"></a>

#### `update_provider_health`

```python
def update_provider_health(provider: str, is_healthy: bool) -> None
```

Update provider health status.

<a id="spoon_ai.llm.manager.LoadBalancer.set_provider_weight"></a>

#### `set_provider_weight`

```python
def set_provider_weight(provider: str, weight: float) -> None
```

Set provider weight for weighted load balancing.

<a id="spoon_ai.llm.manager.LLMManager"></a>

## `LLMManager` Objects

```python
class LLMManager()
```

Central orchestrator for LLM providers with fallback and load balancing.

<a id="spoon_ai.llm.manager.LLMManager.__init__"></a>

#### `__init__`

```python
def __init__(config_manager: Optional[ConfigurationManager] = None,
             debug_logger: Optional[DebugLogger] = None,
             metrics_collector: Optional[MetricsCollector] = None,
             response_normalizer: Optional[ResponseNormalizer] = None,
             registry: Optional[LLMProviderRegistry] = None)
```

Initialize LLM Manager with enhanced provider state tracking.

<a id="spoon_ai.llm.manager.LLMManager.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Enhanced cleanup with proper resource management.

<a id="spoon_ai.llm.manager.LLMManager.get_provider_status"></a>

#### `get_provider_status`

```python
def get_provider_status() -> Dict[str, Dict[str, Any]]
```

Get detailed status of all providers.

<a id="spoon_ai.llm.manager.LLMManager.reset_provider"></a>

#### `reset_provider`

```python
async def reset_provider(provider_name: str) -> bool
```

Reset a provider's state and force reinitialization.

**Arguments**:

- `provider_name` - Name of provider to reset
  

**Returns**:

- `bool` - True if reset successful

<a id="spoon_ai.llm.manager.LLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               **kwargs) -> LLMResponse
```

Send chat request with automatic provider selection and fallback.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      provider: Optional[str] = None,
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncGenerator[LLMResponseChunk, None]
```

Send streaming chat request with callback support.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `callbacks` - Optional callback handlers for monitoring
- `**kwargs` - Additional parameters
  

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.manager.LLMManager.completion"></a>

#### `completion`

```python
async def completion(prompt: str,
                     provider: Optional[str] = None,
                     **kwargs) -> LLMResponse
```

Send completion request.

**Arguments**:

- `prompt` - Text prompt
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          tools: List[Dict],
                          provider: Optional[str] = None,
                          **kwargs) -> LLMResponse
```

Send tool-enabled chat request.

**Arguments**:

- `messages` - List of conversation messages
- `tools` - List of available tools
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.set_fallback_chain"></a>

#### `set_fallback_chain`

```python
def set_fallback_chain(providers: List[str]) -> None
```

Set fallback provider chain.

**Arguments**:

- `providers` - List of provider names in fallback order

<a id="spoon_ai.llm.manager.LLMManager.enable_load_balancing"></a>

#### `enable_load_balancing`

```python
def enable_load_balancing(strategy: str = "round_robin") -> None
```

Enable load balancing with specified strategy.

**Arguments**:

- `strategy` - Load balancing strategy ('round_robin', 'weighted', 'random')

<a id="spoon_ai.llm.manager.LLMManager.disable_load_balancing"></a>

#### `disable_load_balancing`

```python
def disable_load_balancing() -> None
```

Disable load balancing.

<a id="spoon_ai.llm.manager.LLMManager.health_check_all"></a>

#### `health_check_all`

```python
async def health_check_all() -> Dict[str, bool]
```

Check health of all registered providers.

**Returns**:

  Dict[str, bool]: Provider health status

<a id="spoon_ai.llm.manager.LLMManager.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get comprehensive statistics.

**Returns**:

  Dict[str, Any]: Manager and provider statistics

<a id="spoon_ai.llm.manager.get_llm_manager"></a>

#### `get_llm_manager`

```python
def get_llm_manager() -> LLMManager
```

Get global LLM manager instance.

**Returns**:

- `LLMManager` - Global manager instance

<a id="spoon_ai.llm.manager.set_llm_manager"></a>

#### `set_llm_manager`

```python
def set_llm_manager(manager: LLMManager) -> None
```

Set global LLM manager instance.

**Arguments**:

- `manager` - Manager instance to set as global

<a id="spoon_ai.llm.registry"></a>

# Module `spoon_ai.llm.registry`

LLM Provider Registry for dynamic provider registration and discovery.

<a id="spoon_ai.llm.registry.LLMProviderRegistry"></a>

## `LLMProviderRegistry` Objects

```python
class LLMProviderRegistry()
```

Registry for managing LLM provider classes and instances.

<a id="spoon_ai.llm.registry.LLMProviderRegistry.register"></a>

#### `register`

```python
def register(name: str, provider_class: Type[LLMProviderInterface]) -> None
```

Register a provider class.

**Arguments**:

- `name` - Unique provider name
- `provider_class` - Provider class implementing LLMProviderInterface
  

**Raises**:

- `ConfigurationError` - If provider name already exists or class is invalid

<a id="spoon_ai.llm.registry.LLMProviderRegistry.get_provider"></a>

#### `get_provider`

```python
def get_provider(
        name: str,
        config: Optional[Dict[str, Any]] = None) -> LLMProviderInterface
```

Get or create provider instance.

**Arguments**:

- `name` - Provider name
- `config` - Provider configuration (optional if already configured)
  

**Returns**:

- `LLMProviderInterface` - Provider instance
  

**Raises**:

- `ConfigurationError` - If provider not found or configuration invalid

<a id="spoon_ai.llm.registry.LLMProviderRegistry.list_providers"></a>

#### `list_providers`

```python
def list_providers() -> List[str]
```

List all registered provider names.

**Returns**:

- `List[str]` - List of provider names

<a id="spoon_ai.llm.registry.LLMProviderRegistry.get_capabilities"></a>

#### `get_capabilities`

```python
def get_capabilities(name: str) -> List[ProviderCapability]
```

Get provider capabilities.

**Arguments**:

- `name` - Provider name
  

**Returns**:

- `List[ProviderCapability]` - List of supported capabilities
  

**Raises**:

- `ConfigurationError` - If provider not found

<a id="spoon_ai.llm.registry.LLMProviderRegistry.is_registered"></a>

#### `is_registered`

```python
def is_registered(name: str) -> bool
```

Check if a provider is registered.

**Arguments**:

- `name` - Provider name
  

**Returns**:

- `bool` - True if provider is registered

<a id="spoon_ai.llm.registry.LLMProviderRegistry.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> None
```

Unregister a provider.

**Arguments**:

- `name` - Provider name

<a id="spoon_ai.llm.registry.LLMProviderRegistry.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all registered providers and instances.

<a id="spoon_ai.llm.registry.register_provider"></a>

#### `register_provider`

```python
def register_provider(name: str,
                      capabilities: Optional[List[ProviderCapability]] = None)
```

Decorator for automatic provider registration.

**Arguments**:

- `name` - Provider name
- `capabilities` - List of supported capabilities (optional)
  

**Returns**:

  Decorator function

<a id="spoon_ai.llm.registry.get_global_registry"></a>

#### `get_global_registry`

```python
def get_global_registry() -> LLMProviderRegistry
```

Get the global provider registry instance.

**Returns**:

- `LLMProviderRegistry` - Global registry instance

<a id="spoon_ai.llm.config"></a>

# Module `spoon_ai.llm.config`

Configuration management for LLM providers using environment variables.

<a id="spoon_ai.llm.config.ProviderConfig"></a>

## `ProviderConfig` Objects

```python
@dataclass
class ProviderConfig()
```

Configuration for a specific LLM provider.

<a id="spoon_ai.llm.config.ProviderConfig.__post_init__"></a>

#### `__post_init__`

```python
def __post_init__()
```

Validate configuration after initialization.

<a id="spoon_ai.llm.config.ProviderConfig.model_dump"></a>

#### `model_dump`

```python
def model_dump() -> Dict[str, Any]
```

Convert the configuration to a dictionary.

**Returns**:

  Dict[str, Any]: Configuration as dictionary

<a id="spoon_ai.llm.config.ConfigurationManager"></a>

## `ConfigurationManager` Objects

```python
class ConfigurationManager()
```

Manages environment-driven configuration for LLM providers.

<a id="spoon_ai.llm.config.ConfigurationManager.__init__"></a>

#### `__init__`

```python
def __init__() -> None
```

Initialize configuration manager and load environment variables.

<a id="spoon_ai.llm.config.ConfigurationManager.load_provider_config"></a>

#### `load_provider_config`

```python
def load_provider_config(provider_name: str) -> ProviderConfig
```

Load and validate provider configuration.

**Arguments**:

- `provider_name` - Name of the provider
  

**Returns**:

- `ProviderConfig` - Validated provider configuration
  

**Raises**:

- `ConfigurationError` - If configuration is invalid or missing

<a id="spoon_ai.llm.config.ConfigurationManager.validate_config"></a>

#### `validate_config`

```python
def validate_config(config: ProviderConfig) -> bool
```

Validate provider configuration.

**Arguments**:

- `config` - Provider configuration to validate
  

**Returns**:

- `bool` - True if configuration is valid
  

**Raises**:

- `ConfigurationError` - If configuration is invalid

<a id="spoon_ai.llm.config.ConfigurationManager.get_default_provider"></a>

#### `get_default_provider`

```python
def get_default_provider() -> str
```

Get default provider from configuration with intelligent selection.

**Returns**:

- `str` - Default provider name

<a id="spoon_ai.llm.config.ConfigurationManager.get_fallback_chain"></a>

#### `get_fallback_chain`

```python
def get_fallback_chain() -> List[str]
```

Get fallback chain from configuration.

**Returns**:

- `List[str]` - List of provider names in fallback order

<a id="spoon_ai.llm.config.ConfigurationManager.list_configured_providers"></a>

#### `list_configured_providers`

```python
def list_configured_providers() -> List[str]
```

List all configured providers.

**Returns**:

- `List[str]` - List of provider names that have configuration

<a id="spoon_ai.llm.config.ConfigurationManager.get_available_providers_by_priority"></a>

#### `get_available_providers_by_priority`

```python
def get_available_providers_by_priority() -> List[str]
```

Get available providers ordered by priority and quality.

**Returns**:

- `List[str]` - List of available provider names in priority order

<a id="spoon_ai.llm.config.ConfigurationManager.get_provider_info"></a>

#### `get_provider_info`

```python
def get_provider_info() -> Dict[str, Dict[str, Any]]
```

Get information about all providers and their availability.

**Returns**:

  Dict[str, Dict[str, Any]]: Provider information including availability

<a id="spoon_ai.llm.config.ConfigurationManager.reload_config"></a>

#### `reload_config`

```python
def reload_config() -> None
```

Reload configuration from file.

<a id="spoon_ai.llm"></a>

# Module `spoon_ai.llm`

Unified LLM infrastructure package.

This package provides a unified interface for working with different LLM providers,
including comprehensive configuration management, monitoring, and error handling.

<a id="spoon_ai.llm.errors"></a>

# Module `spoon_ai.llm.errors`

Standardized error hierarchy for LLM operations.

<a id="spoon_ai.llm.errors.LLMError"></a>

## `LLMError` Objects

```python
class LLMError(Exception)
```

Base exception for all LLM-related errors.

<a id="spoon_ai.llm.errors.ProviderError"></a>

## `ProviderError` Objects

```python
class ProviderError(LLMError)
```

Provider-specific error with detailed context.

<a id="spoon_ai.llm.errors.ConfigurationError"></a>

## `ConfigurationError` Objects

```python
class ConfigurationError(LLMError)
```

Configuration validation or loading error.

<a id="spoon_ai.llm.errors.RateLimitError"></a>

## `RateLimitError` Objects

```python
class RateLimitError(ProviderError)
```

Rate limit exceeded error.

<a id="spoon_ai.llm.errors.AuthenticationError"></a>

## `AuthenticationError` Objects

```python
class AuthenticationError(ProviderError)
```

Authentication failed error.

<a id="spoon_ai.llm.errors.ModelNotFoundError"></a>

## `ModelNotFoundError` Objects

```python
class ModelNotFoundError(ProviderError)
```

Model not found or not available error.

<a id="spoon_ai.llm.errors.TokenLimitError"></a>

## `TokenLimitError` Objects

```python
class TokenLimitError(ProviderError)
```

Token limit exceeded error.

<a id="spoon_ai.llm.errors.NetworkError"></a>

## `NetworkError` Objects

```python
class NetworkError(ProviderError)
```

Network connectivity or timeout error.

<a id="spoon_ai.llm.errors.ProviderUnavailableError"></a>

## `ProviderUnavailableError` Objects

```python
class ProviderUnavailableError(ProviderError)
```

Provider service unavailable error.

<a id="spoon_ai.llm.errors.ValidationError"></a>

## `ValidationError` Objects

```python
class ValidationError(LLMError)
```

Input validation error.

<a id="spoon_ai.llm.base"></a>

# Module `spoon_ai.llm.base`

<a id="spoon_ai.llm.base.LLMBase"></a>

## `LLMBase` Objects

```python
class LLMBase(ABC)
```

Base abstract class for LLM, defining interfaces that all LLM providers must implement

<a id="spoon_ai.llm.base.LLMBase.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "llm")
```

Initialize LLM interface

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name

<a id="spoon_ai.llm.base.LLMBase.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to LLM and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request that may contain tool calls to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools
- `tool_choice` - Tool selection mode
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.generate_image"></a>

#### `generate_image`

```python
async def generate_image(prompt: str, **kwargs) -> Union[str, List[str]]
```

Generate image (optional implementation)

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

  Union[str, List[str]]: Image URL or list of URLs

<a id="spoon_ai.llm.base.LLMBase.reset_output_handler"></a>

#### `reset_output_handler`

```python
def reset_output_handler()
```

Reset output handler

<a id="spoon_ai.utils.utils"></a>

# Module `spoon_ai.utils.utils`

<a id="spoon_ai.utils.config_manager"></a>

# Module `spoon_ai.utils.config_manager`

<a id="spoon_ai.utils.config_manager.ConfigManager"></a>

## `ConfigManager` Objects

```python
class ConfigManager()
```

Environment-based configuration helper for core usage.

<a id="spoon_ai.utils.config_manager.ConfigManager.__init__"></a>

#### `__init__`

```python
def __init__() -> None
```

Initialize manager with environment-backed cache.

<a id="spoon_ai.utils.config_manager.ConfigManager.refresh"></a>

#### `refresh`

```python
def refresh() -> None
```

Reload configuration snapshot from environment variables.

<a id="spoon_ai.utils.config_manager.ConfigManager.get"></a>

#### `get`

```python
def get(key: str, default: Any = None) -> Any
```

Get configuration item from environment snapshot.

<a id="spoon_ai.utils.config_manager.ConfigManager.set"></a>

#### `set`

```python
def set(key: str, value: Any) -> None
```

Set configuration item by exporting to environment variables.

<a id="spoon_ai.utils.config_manager.ConfigManager.list_config"></a>

#### `list_config`

```python
def list_config() -> Dict[str, Any]
```

List configuration snapshot without persisting secrets.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_api_key"></a>

#### `get_api_key`

```python
def get_api_key(provider: str) -> Optional[str]
```

Get API key for specified provider with environment priority.

<a id="spoon_ai.utils.config_manager.ConfigManager.set_api_key"></a>

#### `set_api_key`

```python
def set_api_key(provider: str, api_key: str) -> None
```

Set API key by exporting to environment variables.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_model_name"></a>

#### `get_model_name`

```python
def get_model_name() -> Optional[str]
```

Get model name override from environment.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_base_url"></a>

#### `get_base_url`

```python
def get_base_url() -> Optional[str]
```

Get base URL override from environment.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_llm_provider"></a>

#### `get_llm_provider`

```python
def get_llm_provider() -> Optional[str]
```

Determine LLM provider from environment variables.

<a id="spoon_ai.utils.config"></a>

# Module `spoon_ai.utils.config`

<a id="spoon_ai.utils"></a>

# Module `spoon_ai.utils`

<a id="spoon_ai.utils.streaming"></a>

# Module `spoon_ai.utils.streaming`

<a id="spoon_ai.utils.streaming.StreamOutcome"></a>

## `StreamOutcome` Objects

```python
@dataclass
class StreamOutcome()
```

Accumulator for streaming output state.

<a id="spoon_ai.runnables.events"></a>

# Module `spoon_ai.runnables.events`

<a id="spoon_ai.runnables.events.StreamEventBuilder"></a>

## `StreamEventBuilder` Objects

```python
class StreamEventBuilder()
```

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_start"></a>

#### `chain_start`

```python
@staticmethod
def chain_start(run_id: UUID, name: str, inputs: Any,
                **kwargs: Any) -> StreamEvent
```

Build chain start event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_stream"></a>

#### `chain_stream`

```python
@staticmethod
def chain_stream(run_id: UUID, name: str, chunk: Any,
                 **kwargs: Any) -> StreamEvent
```

Build chain stream event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_end"></a>

#### `chain_end`

```python
@staticmethod
def chain_end(run_id: UUID, name: str, output: Any,
              **kwargs: Any) -> StreamEvent
```

Build chain end event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_error"></a>

#### `chain_error`

```python
@staticmethod
def chain_error(run_id: UUID, name: str, error: Exception,
                **kwargs: Any) -> StreamEvent
```

Build chain error event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.llm_stream"></a>

#### `llm_stream`

```python
@staticmethod
def llm_stream(run_id: UUID,
               name: str,
               token: str,
               chunk: Optional[Any] = None,
               **kwargs: Any) -> StreamEvent
```

Build LLM stream event.

<a id="spoon_ai.runnables"></a>

# Module `spoon_ai.runnables`

Runnable interface and utilities for composable AI components.

This module provides the foundational Runnable interface that all Spoon AI
components implement, enabling streaming, composition, and standardized execution.

<a id="spoon_ai.runnables.base"></a>

# Module `spoon_ai.runnables.base`

<a id="spoon_ai.runnables.base.log_patches_from_events"></a>

#### `log_patches_from_events`

```python
async def log_patches_from_events(
        event_iter: AsyncIterator[Dict[str, Any]],
        *,
        diff: bool = True) -> AsyncIterator[RunLogPatch]
```

Convert a stream of events into run log patches.

<a id="spoon_ai.runnables.base.Runnable"></a>

## `Runnable` Objects

```python
class Runnable(ABC, Generic[Input, Output])
```

<a id="spoon_ai.runnables.base.Runnable.astream_log"></a>

#### `astream_log`

```python
async def astream_log(input: Input,
                      config: Optional[RunnableConfig] = None,
                      *,
                      diff: bool = True) -> AsyncIterator[RunLogPatch]
```

Asynchronously stream structured log patches derived from execution events.

<a id="spoon_ai.runnables.base.Runnable.astream_events"></a>

#### `astream_events`

```python
async def astream_events(
        input: Input,
        config: Optional[RunnableConfig] = None
) -> AsyncIterator[Dict[str, Any]]
```

Asynchronously stream structured execution events.

<a id="spoon_ai.payments.server"></a>

# Module `spoon_ai.payments.server`

<a id="spoon_ai.payments.server.create_paywalled_router"></a>

#### `create_paywalled_router`

```python
def create_paywalled_router(
    service: Optional[X402PaymentService] = None,
    agent_factory: AgentFactory = _default_agent_factory,
    payment_message: str = "Payment required to invoke this agent."
) -> APIRouter
```

Build a FastAPI router that protects agent invocations behind an x402 paywall.

**Arguments**:

- `service` - Optional pre-configured payment service.
- `agent_factory` - Coroutine that returns an initialized agent given its name.
- `payment_message` - Message displayed when payment is required.
  

**Returns**:

- `APIRouter` - Router with `/invoke/&#123;agent_name&#125;` endpoint ready to mount.

<a id="spoon_ai.payments.cli"></a>

# Module `spoon_ai.payments.cli`

<a id="spoon_ai.payments.facilitator_client"></a>

# Module `spoon_ai.payments.facilitator_client`

<a id="spoon_ai.payments.facilitator_client.X402FacilitatorClient"></a>

## `X402FacilitatorClient` Objects

```python
class X402FacilitatorClient()
```

Thin wrapper over the upstream facilitator client with async header hooks.

<a id="spoon_ai.payments.exceptions"></a>

# Module `spoon_ai.payments.exceptions`

<a id="spoon_ai.payments.exceptions.X402PaymentError"></a>

## `X402PaymentError` Objects

```python
class X402PaymentError(Exception)
```

Base exception for x402 payment operations.

<a id="spoon_ai.payments.exceptions.X402ConfigurationError"></a>

## `X402ConfigurationError` Objects

```python
class X402ConfigurationError(X402PaymentError)
```

Raised when integration configuration is invalid or incomplete.

<a id="spoon_ai.payments.exceptions.X402VerificationError"></a>

## `X402VerificationError` Objects

```python
class X402VerificationError(X402PaymentError)
```

Raised when a payment header fails verification against the facilitator.

<a id="spoon_ai.payments.exceptions.X402SettlementError"></a>

## `X402SettlementError` Objects

```python
class X402SettlementError(X402PaymentError)
```

Raised when settlement fails or returns an error response.

<a id="spoon_ai.payments.x402_service"></a>

# Module `spoon_ai.payments.x402_service`

<a id="spoon_ai.payments.x402_service.X402PaymentService"></a>

## `X402PaymentService` Objects

```python
class X402PaymentService()
```

High level service that aligns the x402 SDK with SpoonOS conventions.

<a id="spoon_ai.payments.x402_service.X402PaymentService.discover_resources"></a>

#### `discover_resources`

```python
async def discover_resources(
        *,
        resource_type: Optional[str] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None) -> ListDiscoveryResourcesResponse
```

Query the facilitator discovery endpoint for registered paywalled resources.

<a id="spoon_ai.payments.x402_service.X402PaymentService.render_paywall_html"></a>

#### `render_paywall_html`

```python
def render_paywall_html(error: str,
                        request: Optional[X402PaymentRequest] = None,
                        headers: Optional[Dict[str, Any]] = None) -> str
```

Render the embedded paywall HTML with payment requirements.

<a id="spoon_ai.payments.x402_service.X402PaymentService.build_payment_header"></a>

#### `build_payment_header`

```python
def build_payment_header(requirements: PaymentRequirements,
                         *,
                         max_value: Optional[int] = None) -> str
```

Create a signed X-PAYMENT header for outbound requests.

<a id="spoon_ai.payments.x402_service.X402PaymentService.decode_payment_response"></a>

#### `decode_payment_response`

```python
def decode_payment_response(header_value: str) -> X402PaymentReceipt
```

Decode an X-PAYMENT-RESPONSE header into a structured receipt.

<a id="spoon_ai.payments.config"></a>

# Module `spoon_ai.payments.config`

<a id="spoon_ai.payments.config.X402ConfigurationError"></a>

## `X402ConfigurationError` Objects

```python
class X402ConfigurationError(Exception)
```

Raised when required x402 configuration is missing or invalid.

<a id="spoon_ai.payments.config.X402PaywallBranding"></a>

## `X402PaywallBranding` Objects

```python
class X402PaywallBranding(BaseModel)
```

Optional branding customisations for the embedded paywall template.

<a id="spoon_ai.payments.config.X402ClientConfig"></a>

## `X402ClientConfig` Objects

```python
class X402ClientConfig(BaseModel)
```

Holds client-side signing configuration used for outbound payments.

<a id="spoon_ai.payments.config.X402Settings"></a>

## `X402Settings` Objects

```python
class X402Settings(BaseModel)
```

Resolved configuration view for x402 payments inside SpoonOS.

<a id="spoon_ai.payments.config.X402Settings.amount_in_atomic_units"></a>

#### `amount_in_atomic_units`

```python
@property
def amount_in_atomic_units() -> str
```

Return the configured maximum amount encoded as atomic units (string).

<a id="spoon_ai.payments.config.X402Settings.build_asset_extra"></a>

#### `build_asset_extra`

```python
def build_asset_extra() -> Dict[str, Any]
```

Construct the `extra` payload for the payment requirements.

<a id="spoon_ai.payments.config.X402Settings.load"></a>

#### `load`

```python
@classmethod
def load(cls,
         config_manager: Optional[ConfigManager] = None) -> "X402Settings"
```

Load settings from config.json with .env fallbacks.

<a id="spoon_ai.payments.app"></a>

# Module `spoon_ai.payments.app`

<a id="spoon_ai.payments"></a>

# Module `spoon_ai.payments`

Payment utilities for integrating the SpoonOS core with the x402 payments protocol.

This package wraps the upstream `x402` Python SDK with configuration and service
abstractions that align to SpoonOS conventions (config.json priority, .env overrides,
and async-friendly helper utilities).

<a id="spoon_ai.payments.models"></a>

# Module `spoon_ai.payments.models`

<a id="spoon_ai.payments.models.X402PaymentRequest"></a>

## `X402PaymentRequest` Objects

```python
class X402PaymentRequest(BaseModel)
```

Describes a payment requirement that should be issued for a resource.

<a id="spoon_ai.payments.models.X402VerifyResult"></a>

## `X402VerifyResult` Objects

```python
class X402VerifyResult(BaseModel)
```

Captures the facilitator verification response.

<a id="spoon_ai.payments.models.X402SettleResult"></a>

## `X402SettleResult` Objects

```python
class X402SettleResult(BaseModel)
```

Captures settlement details.

<a id="spoon_ai.payments.models.X402PaymentOutcome"></a>

## `X402PaymentOutcome` Objects

```python
class X402PaymentOutcome(BaseModel)
```

Aggregates verification and settlement outcomes.

<a id="spoon_ai.payments.models.X402PaymentReceipt"></a>

## `X402PaymentReceipt` Objects

```python
class X402PaymentReceipt(BaseModel)
```

Decoded representation of the X-PAYMENT-RESPONSE header.

<a id="spoon_ai.chat"></a>

# Module `spoon_ai.chat`

<a id="spoon_ai.chat.ShortTermMemoryConfig"></a>

## `ShortTermMemoryConfig` Objects

```python
class ShortTermMemoryConfig(BaseModel)
```

Configuration for short-term memory management.

<a id="spoon_ai.chat.ShortTermMemoryConfig.enabled"></a>

#### `enabled`

Enable automatic short-term memory management.

<a id="spoon_ai.chat.ShortTermMemoryConfig.max_tokens"></a>

#### `max_tokens`

Maximum token count before triggering trimming/summarization.

<a id="spoon_ai.chat.ShortTermMemoryConfig.strategy"></a>

#### `strategy`

Strategy to use when exceeding max_tokens: 'summarize' or 'trim'.

<a id="spoon_ai.chat.ShortTermMemoryConfig.messages_to_keep"></a>

#### `messages_to_keep`

Number of recent messages to keep when summarizing.

<a id="spoon_ai.chat.ShortTermMemoryConfig.trim_strategy"></a>

#### `trim_strategy`

Trimming strategy when using 'trim' mode.

<a id="spoon_ai.chat.ShortTermMemoryConfig.keep_system_messages"></a>

#### `keep_system_messages`

Always keep system messages during trimming.

<a id="spoon_ai.chat.ShortTermMemoryConfig.auto_checkpoint"></a>

#### `auto_checkpoint`

Automatically save checkpoints before trimming/summarization.

<a id="spoon_ai.chat.ShortTermMemoryConfig.checkpoint_thread_id"></a>

#### `checkpoint_thread_id`

Thread ID for checkpoint management.

<a id="spoon_ai.chat.ShortTermMemoryConfig.summary_model"></a>

#### `summary_model`

Model to use for summarization (defaults to ChatBot's model).

<a id="spoon_ai.chat.ChatBot"></a>

## `ChatBot` Objects

```python
class ChatBot()
```

<a id="spoon_ai.chat.ChatBot.__init__"></a>

#### `__init__`

```python
def __init__(use_llm_manager: bool = True,
             model_name: str = None,
             llm_provider: str = None,
             api_key: str = None,
             base_url: str = None,
             enable_short_term_memory: bool = True,
             short_term_memory_config: Optional[Union[Dict[
                 str, Any], ShortTermMemoryConfig]] = None,
             token_counter: Optional[MessageTokenCounter] = None,
             enable_long_term_memory: bool = False,
             mem0_config: Optional[Dict[str, Any]] = None,
             callbacks: Optional[List[BaseCallbackHandler]] = None,
             **kwargs)
```

Initialize ChatBot with hierarchical configuration priority system.

Configuration Priority System:
1. Full manual override (highest priority) - all params provided
2. Partial override with config fallback - llm_provider provided, credentials pulled from environment (or config files if explicitly enabled)
3. Full environment-based loading - only use_llm_manager=True, reads from environment variables

**Arguments**:

- `use_llm_manager` - Enable LLM manager architecture (default: True)
- `model_name` - Model name override
- `llm_provider` - Provider name override
- `api_key` - API key override
- `base_url` - Base URL override
- `enable_short_term_memory` - Enable short-term memory management (default: True)
- `short_term_memory_config` - Configuration dict or ShortTermMemoryConfig instance
- `token_counter` - Optional custom token counter instance
- `enable_long_term_memory` - Enable Mem0-backed long-term memory retrieval/storage
- `mem0_config` - Configuration dict for Mem0 (api_key, user_id/agent_id, collection, etc.)
- `callbacks` - Optional list of callback handlers for monitoring
- `**kwargs` - Additional parameters

<a id="spoon_ai.chat.ChatBot.update_mem0_config"></a>

#### `update_mem0_config`

```python
def update_mem0_config(config: Optional[Dict[str, Any]] = None,
                       enable: Optional[bool] = None) -> None
```

Update Mem0 configuration and re-initialize the client if needed.

<a id="spoon_ai.chat.ChatBot.ask"></a>

#### `ask`

```python
async def ask(messages: List[Union[dict, Message]],
              system_msg: Optional[str] = None,
              output_queue: Optional[asyncio.Queue] = None) -> str
```

Ask method using the LLM manager architecture.

Automatically applies short-term memory strategy if enabled.

<a id="spoon_ai.chat.ChatBot.ask_tool"></a>

#### `ask_tool`

```python
async def ask_tool(messages: List[Union[dict, Message]],
                   system_msg: Optional[str] = None,
                   tools: Optional[List[dict]] = None,
                   tool_choice: Optional[str] = None,
                   output_queue: Optional[asyncio.Queue] = None,
                   **kwargs) -> LLMResponse
```

Ask tool method using the LLM manager architecture.

Automatically applies short-term memory strategy if enabled.

<a id="spoon_ai.chat.ChatBot.trim_messages"></a>

#### `trim_messages`

```python
async def trim_messages(messages: List[Message],
                        max_tokens: int,
                        strategy: TrimStrategy = TrimStrategy.FROM_END,
                        keep_system: bool = True,
                        model: Optional[str] = None) -> List[Message]
```

Trim messages to stay within the token budget.

**Arguments**:

- `messages` - List of messages to trim
- `max_tokens` - Maximum token count to retain
- `strategy` - Trimming strategy (from_start or from_end)
- `keep_system` - Whether to always keep the leading system message
- `model` - Model name for token counting
  

**Returns**:

- `List[Message]` - Trimmed messages list

<a id="spoon_ai.chat.ChatBot.remove_message"></a>

#### `remove_message`

```python
def remove_message(message_id: str, **kwargs: Any) -> "RemoveMessage"
```

Construct a removal instruction for the message with the given ID.

<a id="spoon_ai.chat.ChatBot.remove_all_messages"></a>

#### `remove_all_messages`

```python
def remove_all_messages() -> "RemoveMessage"
```

Construct a removal instruction that clears the entire history.

<a id="spoon_ai.chat.ChatBot.summarize_messages"></a>

#### `summarize_messages`

```python
async def summarize_messages(
    messages: List[Message],
    max_tokens_before_summary: int,
    messages_to_keep: int = 5,
    summary_model: Optional[str] = None,
    existing_summary: str = ""
) -> Tuple[List[Message], List[RemoveMessage], Optional[str]]
```

Summarize earlier messages and emit removal directives.

Returns a tuple ``(messages_for_llm, removals, summary_text)`` where
``messages_for_llm`` are the messages that should be sent to the language
model for the next turn, ``removals`` contains ``RemoveMessage``
directives that should be applied to the stored history, and
``summary_text`` is the newly generated summary (if any).

**Arguments**:

- `messages` - List of messages to process
- `max_tokens_before_summary` - Token threshold for triggering summary
- `messages_to_keep` - Number of recent messages to keep uncompressed
- `summary_model` - Model to use for summarization
- `existing_summary` - Previously stored summary text

<a id="spoon_ai.chat.ChatBot.latest_summary"></a>

#### `latest_summary`

```python
@property
def latest_summary() -> Optional[str]
```

Return the most recent summary generated by short-term memory.

<a id="spoon_ai.chat.ChatBot.latest_removals"></a>

#### `latest_removals`

```python
@property
def latest_removals() -> List[RemoveMessage]
```

Return the most recent removal directives emitted by summarization.

<a id="spoon_ai.chat.ChatBot.save_checkpoint"></a>

#### `save_checkpoint`

```python
def save_checkpoint(thread_id: str,
                    messages: List[Message],
                    metadata: Optional[dict] = None) -> str
```

Save current message state to checkpoint.

**Arguments**:

- `thread_id` - Thread identifier
- `messages` - Messages to save
- `metadata` - Optional metadata to store
  

**Returns**:

- `str` - Checkpoint ID

<a id="spoon_ai.chat.ChatBot.restore_checkpoint"></a>

#### `restore_checkpoint`

```python
def restore_checkpoint(
        thread_id: str,
        checkpoint_id: Optional[str] = None) -> Optional[List[Message]]
```

Restore messages from checkpoint.

**Arguments**:

- `thread_id` - Thread identifier
- `checkpoint_id` - Optional specific checkpoint ID
  

**Returns**:

- `Optional[List[Message]]` - Restored messages, or None if checkpoint not found

<a id="spoon_ai.chat.ChatBot.list_checkpoints"></a>

#### `list_checkpoints`

```python
def list_checkpoints(thread_id: str) -> List[dict]
```

List all checkpoints for a thread.

**Arguments**:

- `thread_id` - Thread identifier
  

**Returns**:

- `List[dict]` - List of checkpoint metadata

<a id="spoon_ai.chat.ChatBot.clear_checkpoints"></a>

#### `clear_checkpoints`

```python
def clear_checkpoints(thread_id: str) -> None
```

Clear all checkpoints for a thread.

**Arguments**:

- `thread_id` - Thread identifier

<a id="spoon_ai.chat.ChatBot.astream"></a>

#### `astream`

```python
async def astream(messages: List[Union[dict, Message]],
                  system_msg: Optional[str] = None,
                  callbacks: Optional[List[BaseCallbackHandler]] = None,
                  **kwargs: Any) -> AsyncIterator[LLMResponseChunk]
```

Stream LLM responses chunk by chunk.

<a id="spoon_ai.chat.ChatBot.astream_events"></a>

#### `astream_events`

```python
async def astream_events(messages: List[Union[dict, Message]],
                         system_msg: Optional[str] = None,
                         callbacks: Optional[List[BaseCallbackHandler]] = None,
                         **kwargs) -> AsyncIterator[dict]
```

Stream structured events during LLM execution.

This method yields detailed events tracking the execution flow,
useful for monitoring and debugging.

**Arguments**:

- `messages` - List of messages or dicts
- `system_msg` - Optional system message
- `callbacks` - Optional callback handlers
- `**kwargs` - Additional provider parameters
  

**Yields**:

  Event dictionaries with structure:
  &#123;
- `"event"` - event_type,
- `"run_id"` - str,
- `"timestamp"` - ISO datetime string,
- `"data"` - &#123;event-specific data&#125;
  &#125;

<a id="spoon_ai.chat.ChatBot.astream_log"></a>

#### `astream_log`

```python
async def astream_log(messages: List[Union[dict, Message]],
                      system_msg: Optional[str] = None,
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      *,
                      diff: bool = True,
                      **kwargs: Any) -> AsyncIterator[RunLogPatch]
```

Stream run log patches describing ChatBot execution.

<a id="spoon_ai.identity.did_models"></a>

# Module `spoon_ai.identity.did_models`

DID Data Models for SpoonOS Agents
Following W3C DID Core specification and ERC-8004 standard

<a id="spoon_ai.identity.did_models.VerificationMethodType"></a>

## `VerificationMethodType` Objects

```python
class VerificationMethodType(str, Enum)
```

Supported verification method types

<a id="spoon_ai.identity.did_models.ServiceType"></a>

## `ServiceType` Objects

```python
class ServiceType(str, Enum)
```

Agent service endpoint types

<a id="spoon_ai.identity.did_models.VerificationMethod"></a>

## `VerificationMethod` Objects

```python
class VerificationMethod(BaseModel)
```

Cryptographic verification method for DID authentication

<a id="spoon_ai.identity.did_models.ServiceEndpoint"></a>

## `ServiceEndpoint` Objects

```python
class ServiceEndpoint(BaseModel)
```

Service endpoint for agent interaction

<a id="spoon_ai.identity.did_models.ReputationScore"></a>

## `ReputationScore` Objects

```python
class ReputationScore(BaseModel)
```

Aggregated reputation score

<a id="spoon_ai.identity.did_models.Attestation"></a>

## `Attestation` Objects

```python
class Attestation(BaseModel)
```

Verifiable attestation about an agent

<a id="spoon_ai.identity.did_models.AgentCard"></a>

## `AgentCard` Objects

```python
class AgentCard(BaseModel)
```

Agent Card following Google's A2A protocol
Provides human-readable agent information

<a id="spoon_ai.identity.did_models.AgentDID"></a>

## `AgentDID` Objects

```python
class AgentDID(BaseModel)
```

Complete W3C DID Document for SpoonOS Agent

<a id="spoon_ai.identity.did_models.AgentDID.to_did_document"></a>

#### `to_did_document`

```python
def to_did_document() -> Dict[str, Any]
```

Export as standard W3C DID Document

<a id="spoon_ai.identity.did_models.AgentDID.to_agent_card"></a>

#### `to_agent_card`

```python
def to_agent_card() -> Dict[str, Any]
```

Export agent card separately

<a id="spoon_ai.identity.did_models.DIDResolutionResult"></a>

## `DIDResolutionResult` Objects

```python
class DIDResolutionResult(BaseModel)
```

Result of DID resolution

<a id="spoon_ai.identity.attestation"></a>

# Module `spoon_ai.identity.attestation`

Attestation and Trust Score Management
Handles verifiable credentials and reputation calculations

<a id="spoon_ai.identity.attestation.AttestationManager"></a>

## `AttestationManager` Objects

```python
class AttestationManager()
```

Manages verifiable attestations for agents

<a id="spoon_ai.identity.attestation.AttestationManager.create_attestation"></a>

#### `create_attestation`

```python
def create_attestation(issuer_did: str,
                       subject_did: str,
                       claim: Dict,
                       evidence: Optional[str] = None) -> Attestation
```

Create a verifiable attestation

**Arguments**:

- `issuer_did` - DID of the attestation issuer
- `subject_did` - DID of the agent being attested
- `claim` - Attestation claim data
- `evidence` - Optional supporting evidence
  

**Returns**:

  Signed Attestation object

<a id="spoon_ai.identity.attestation.AttestationManager.verify_attestation"></a>

#### `verify_attestation`

```python
def verify_attestation(attestation: Attestation) -> bool
```

Verify attestation signature

<a id="spoon_ai.identity.attestation.AttestationManager.submit_reputation_on_chain"></a>

#### `submit_reputation_on_chain`

```python
def submit_reputation_on_chain(subject_did: str, score: int,
                               evidence: str) -> str
```

Submit reputation score to on-chain registry

**Arguments**:

- `subject_did` - DID of agent being rated
- `score` - Score between -100 and 100
- `evidence` - Evidence for the score
  

**Returns**:

  Transaction hash

<a id="spoon_ai.identity.attestation.AttestationManager.submit_validation_on_chain"></a>

#### `submit_validation_on_chain`

```python
def submit_validation_on_chain(subject_did: str, is_valid: bool,
                               reason: str) -> str
```

Submit validation for an agent

**Arguments**:

- `subject_did` - DID of agent being validated
- `is_valid` - Whether agent is valid
- `reason` - Reason for validation decision
  

**Returns**:

  Transaction hash

<a id="spoon_ai.identity.attestation.TrustScoreCalculator"></a>

## `TrustScoreCalculator` Objects

```python
class TrustScoreCalculator()
```

Calculates trust scores for agents

<a id="spoon_ai.identity.attestation.TrustScoreCalculator.calculate_trust_score"></a>

#### `calculate_trust_score`

```python
def calculate_trust_score(did: str) -> Dict
```

Calculate comprehensive trust score

**Returns**:

  Dict with trust score components:
  - reputation_score: -100 to 100
  - validation_status: bool
  - trust_level: "high" | "medium" | "low" | "untrusted"
  - confidence: 0 to 1

<a id="spoon_ai.identity.attestation.TrustScoreCalculator.get_reputation_breakdown"></a>

#### `get_reputation_breakdown`

```python
def get_reputation_breakdown(did: str, limit: int = 10) -> List[Dict]
```

Get detailed reputation submissions

<a id="spoon_ai.identity.attestation.TrustScoreCalculator.get_validation_breakdown"></a>

#### `get_validation_breakdown`

```python
def get_validation_breakdown(did: str, limit: int = 10) -> List[Dict]
```

Get detailed validation submissions

<a id="spoon_ai.identity.storage_client"></a>

# Module `spoon_ai.identity.storage_client`

Storage clients for DID documents and agent cards
Supports NeoFS (primary) and IPFS (backup replication)

<a id="spoon_ai.identity.storage_client.DIDStorageClient"></a>

## `DIDStorageClient` Objects

```python
class DIDStorageClient()
```

Unified storage client for DID documents
NeoFS primary with IPFS replication

<a id="spoon_ai.identity.storage_client.DIDStorageClient.publish_did_document"></a>

#### `publish_did_document`

```python
def publish_did_document(agent_id: str, did_document: Dict,
                         agent_card: Dict) -> Tuple[str, str]
```

Publish DID document and agent card to storage
Returns (didDocURI, agentCardURI)

<a id="spoon_ai.identity.storage_client.DIDStorageClient.fetch_did_document"></a>

#### `fetch_did_document`

```python
def fetch_did_document(uri: str) -> Dict
```

Fetch DID document from URI (NeoFS or IPFS)

<a id="spoon_ai.identity.storage_client.DIDStorageClient.publish_credential"></a>

#### `publish_credential`

```python
def publish_credential(agent_id: str, credential: Dict) -> str
```

Publish verifiable credential

<a id="spoon_ai.identity.storage_client.DIDStorageClient.close"></a>

#### `close`

```python
def close()
```

Close HTTP clients

<a id="spoon_ai.identity.did_resolver"></a>

# Module `spoon_ai.identity.did_resolver`

DID Resolver for SpoonOS Agents
Implements unified DID resolution with NeoFS-first policy

<a id="spoon_ai.identity.did_resolver.DIDResolver"></a>

## `DIDResolver` Objects

```python
class DIDResolver()
```

Unified DID resolver for SpoonOS agents
Resolution flow: On-chain anchor → NeoFS (primary) → IPFS (fallback)

<a id="spoon_ai.identity.did_resolver.DIDResolver.resolve"></a>

#### `resolve`

```python
def resolve(did: str) -> DIDResolutionResult
```

Resolve DID to complete DID document

**Arguments**:

- `did` - DID string (did:spoon:agent:&lt;identifier&gt;)
  

**Returns**:

  DIDResolutionResult with document and metadata

<a id="spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only"></a>

#### `resolve_metadata_only`

```python
def resolve_metadata_only(did: str) -> Dict
```

Resolve only on-chain metadata (fast path)

<a id="spoon_ai.identity.did_resolver.DIDResolver.verify_did"></a>

#### `verify_did`

```python
def verify_did(did: str) -> bool
```

Verify DID exists and is resolvable

<a id="spoon_ai.identity.erc8004_abi"></a>

# Module `spoon_ai.identity.erc8004_abi`

Shared ERC-8004 ABI fragments (minimal, artifact-free).

These ABIs cover the common calls used by the Python SDK and demos.

<a id="spoon_ai.identity"></a>

# Module `spoon_ai.identity`

SpoonOS Agent DID Identity Module
Implements ERC-8004 compliant decentralized identity for agents

<a id="spoon_ai.identity.erc8004_client"></a>

# Module `spoon_ai.identity.erc8004_client`

ERC-8004 Smart Contract Client
Handles on-chain interactions with agent registries

<a id="spoon_ai.identity.erc8004_client.ERC8004Client"></a>

## `ERC8004Client` Objects

```python
class ERC8004Client()
```

Client for interacting with ERC-8004 agent registries

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.calculate_did_hash"></a>

#### `calculate_did_hash`

```python
def calculate_did_hash(did: str) -> bytes
```

Calculate keccak256 hash of DID string

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.create_eip712_signature"></a>

#### `create_eip712_signature`

```python
def create_eip712_signature(did_hash: bytes, agent_card_uri: str,
                            did_doc_uri: str) -> str
```

Create EIP-712 signature for agent registration

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.register_agent"></a>

#### `register_agent`

```python
def register_agent(did: str, agent_card_uri: str, did_doc_uri: str) -> str
```

Register agent on-chain

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.resolve_agent"></a>

#### `resolve_agent`

```python
def resolve_agent(did: str) -> Dict
```

Resolve agent metadata from on-chain registry

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.update_capabilities"></a>

#### `update_capabilities`

```python
def update_capabilities(did: str, capabilities: List[str]) -> str
```

Update agent capabilities on-chain

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.build_feedback_auth"></a>

#### `build_feedback_auth`

```python
def build_feedback_auth(agent_id: Union[int, bytes],
                        client_address: str,
                        index_limit: int,
                        expiry: int,
                        signer_address: Optional[str] = None,
                        identity_registry: Optional[str] = None,
                        chain_id: Optional[int] = None) -> bytes
```

Build and sign feedbackAuth payload required by chaoschain ERC8004 reputation registry.
Returns abi.encode(struct) ++ signature (65 bytes).

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.give_feedback"></a>

#### `give_feedback`

```python
def give_feedback(did: str,
                  score: int,
                  tag1: bytes = b"",
                  tag2: bytes = b"",
                  fileuri: str = "",
                  filehash: bytes = b"\x00" * 32,
                  index_limit: int = 10,
                  expiry: Optional[int] = None,
                  client_address: Optional[str] = None) -> str
```

Submit feedback using ERC8004 giveFeedback with feedbackAuth.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation_summary"></a>

#### `get_reputation_summary`

```python
def get_reputation_summary(did: str,
                           client_addresses: Optional[List[str]] = None,
                           tag1: bytes = b"\x00" * 32,
                           tag2: bytes = b"\x00" * 32) -> Tuple[int, int]
```

Return (count, averageScore 0-100).

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation"></a>

#### `get_reputation`

```python
def get_reputation(did: str) -> Tuple[int, int]
```

Backward compatible: (averageScore, count).

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.validation_request"></a>

#### `validation_request`

```python
def validation_request(
        did: str,
        validator: str,
        request_uri: str,
        request_hash: Optional[bytes] = None) -> Tuple[str, bytes]
```

Create validation request; returns tx hash and requestHash used.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_validation_status"></a>

#### `get_validation_status`

```python
def get_validation_status(request_hash: bytes) -> Dict
```

Get per-request validation status.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.submit_validation"></a>

#### `submit_validation`

```python
def submit_validation(did: str, is_valid: bool, reason: str = "") -> str
```

Map boolean into 0/100 scale response.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.register_agent"></a>

#### `register_agent`

```python
def register_agent(token_uri: str,
                   metadata: Optional[List[Tuple[str, bytes]]] = None) -> int
```

Register agent on IdentityRegistry; returns agentId.

<a id="spoon_ai.bridge.eth_neofs_indexer"></a>

# Module `spoon_ai.bridge.eth_neofs_indexer`

Ethereum to NeoFS/IPFS Event Indexer
Listens to ERC-8004 registry events and ensures off-chain storage is synchronized

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer"></a>

## `EthereumNeoFSIndexer` Objects

```python
class EthereumNeoFSIndexer()
```

Event indexer that syncs Ethereum registry events to NeoFS/IPFS
Ensures content hash verification and storage consistency

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.register_event_handler"></a>

#### `register_event_handler`

```python
def register_event_handler(event_name: str, handler: Callable)
```

Register custom event handler

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.start_indexing"></a>

#### `start_indexing`

```python
def start_indexing(block_limit: Optional[int] = None)
```

Start indexing events

**Arguments**:

- `block_limit` - Optional block limit for testing (stops after N blocks)

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.stop_indexing"></a>

#### `stop_indexing`

```python
def stop_indexing()
```

Stop the indexer

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.get_indexer_status"></a>

#### `get_indexer_status`

```python
def get_indexer_status() -> Dict
```

Get current indexer status

<a id="spoon_ai.bridge"></a>

# Module `spoon_ai.bridge`

Cross-chain bridge module for DID synchronization
Ethereum ← → NeoFS/IPFS event indexing

<a id="spoon_ai.tools.turnkey_tools"></a>

# Module `spoon_ai.tools.turnkey_tools`

Turnkey Tools - Secure Blockchain Operations

This module provides Turnkey SDK tools for secure blockchain operations including:
- Transaction signing and broadcasting
- Message and EIP-712 signing
- Multi-account management
- Activity audit and monitoring
- Wallet and account operations

<a id="spoon_ai.tools.turnkey_tools.TurnkeyBaseTool"></a>

## `TurnkeyBaseTool` Objects

```python
class TurnkeyBaseTool(BaseTool)
```

Base class for Turnkey tools with shared client initialization

<a id="spoon_ai.tools.turnkey_tools.TurnkeyBaseTool.client"></a>

#### `client`

```python
@property
def client()
```

Lazy initialization of Turnkey client

<a id="spoon_ai.tools.turnkey_tools.SignEVMTransactionTool"></a>

## `SignEVMTransactionTool` Objects

```python
class SignEVMTransactionTool(TurnkeyBaseTool)
```

Sign EVM transaction using Turnkey

<a id="spoon_ai.tools.turnkey_tools.SignEVMTransactionTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str, unsigned_tx: str, **kwargs) -> str
```

Sign EVM transaction

<a id="spoon_ai.tools.turnkey_tools.SignMessageTool"></a>

## `SignMessageTool` Objects

```python
class SignMessageTool(TurnkeyBaseTool)
```

Sign arbitrary message using Turnkey

<a id="spoon_ai.tools.turnkey_tools.SignMessageTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str,
                  message: str,
                  use_keccak256: bool = True,
                  **kwargs) -> str
```

Sign message

<a id="spoon_ai.tools.turnkey_tools.SignTypedDataTool"></a>

## `SignTypedDataTool` Objects

```python
class SignTypedDataTool(TurnkeyBaseTool)
```

Sign EIP-712 structured data using Turnkey

<a id="spoon_ai.tools.turnkey_tools.SignTypedDataTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str, typed_data: dict, **kwargs) -> str
```

Sign EIP-712 typed data

<a id="spoon_ai.tools.turnkey_tools.BroadcastTransactionTool"></a>

## `BroadcastTransactionTool` Objects

```python
class BroadcastTransactionTool(TurnkeyBaseTool)
```

Broadcast signed transaction to blockchain

<a id="spoon_ai.tools.turnkey_tools.BroadcastTransactionTool.execute"></a>

#### `execute`

```python
async def execute(signed_tx: str, rpc_url: str = None, **kwargs) -> str
```

Broadcast transaction

<a id="spoon_ai.tools.turnkey_tools.ListWalletsTool"></a>

## `ListWalletsTool` Objects

```python
class ListWalletsTool(TurnkeyBaseTool)
```

List all wallets in the organization

<a id="spoon_ai.tools.turnkey_tools.ListWalletsTool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

List wallets

<a id="spoon_ai.tools.turnkey_tools.ListWalletAccountsTool"></a>

## `ListWalletAccountsTool` Objects

```python
class ListWalletAccountsTool(TurnkeyBaseTool)
```

List accounts for a specific wallet

<a id="spoon_ai.tools.turnkey_tools.ListWalletAccountsTool.execute"></a>

#### `execute`

```python
async def execute(wallet_id: str,
                  limit: str = None,
                  before: str = None,
                  after: str = None,
                  **kwargs) -> str
```

List wallet accounts

<a id="spoon_ai.tools.turnkey_tools.GetActivityTool"></a>

## `GetActivityTool` Objects

```python
class GetActivityTool(TurnkeyBaseTool)
```

Get activity details by ID

<a id="spoon_ai.tools.turnkey_tools.GetActivityTool.execute"></a>

#### `execute`

```python
async def execute(activity_id: str, **kwargs) -> str
```

Get activity details

<a id="spoon_ai.tools.turnkey_tools.ListActivitiesTool"></a>

## `ListActivitiesTool` Objects

```python
class ListActivitiesTool(TurnkeyBaseTool)
```

List recent activities in the organization

<a id="spoon_ai.tools.turnkey_tools.ListActivitiesTool.execute"></a>

#### `execute`

```python
async def execute(limit: str = "10",
                  before: str = None,
                  after: str = None,
                  filter_by_status: list = None,
                  filter_by_type: list = None,
                  **kwargs) -> str
```

List activities

<a id="spoon_ai.tools.turnkey_tools.WhoAmITool"></a>

## `WhoAmITool` Objects

```python
class WhoAmITool(TurnkeyBaseTool)
```

Get organization information

<a id="spoon_ai.tools.turnkey_tools.WhoAmITool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

Get organization info

<a id="spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool"></a>

## `BuildUnsignedEIP1559TxTool` Objects

```python
class BuildUnsignedEIP1559TxTool(BaseTool)
```

Build unsigned EIP-1559 transaction (supports NeoX)

<a id="spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool.execute"></a>

#### `execute`

```python
async def execute(from_addr: str,
                  to_addr: str = None,
                  value_wei: str = "0",
                  data_hex: str = "0x",
                  priority_gwei: str = "1",
                  max_fee_gwei: str = None,
                  gas_limit: str = None,
                  rpc_url: str = None,
                  **kwargs) -> str
```

Build unsigned transaction (auto-detects NeoX)

<a id="spoon_ai.tools.turnkey_tools.ListAllAccountsTool"></a>

## `ListAllAccountsTool` Objects

```python
class ListAllAccountsTool(TurnkeyBaseTool)
```

List all accounts across all wallets in the organization

<a id="spoon_ai.tools.turnkey_tools.ListAllAccountsTool.execute"></a>

#### `execute`

```python
async def execute(limit: str = "50", **kwargs) -> str
```

List all accounts across all wallets

<a id="spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool"></a>

## `BatchSignTransactionsTool` Objects

```python
class BatchSignTransactionsTool(TurnkeyBaseTool)
```

Batch sign transactions for multiple accounts

<a id="spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool.execute"></a>

#### `execute`

```python
async def execute(to_address: str,
                  value_wei: str,
                  data_hex: str = "0x",
                  max_accounts: str = "3",
                  enable_broadcast: bool = False,
                  rpc_url: str = None,
                  **kwargs) -> str
```

Batch sign transactions for multiple accounts

<a id="spoon_ai.tools.turnkey_tools.CreateWalletTool"></a>

## `CreateWalletTool` Objects

```python
class CreateWalletTool(TurnkeyBaseTool)
```

Create a new wallet

<a id="spoon_ai.tools.turnkey_tools.CreateWalletTool.execute"></a>

#### `execute`

```python
async def execute(wallet_name: str,
                  accounts_json: str = None,
                  mnemonic_length: str = "24",
                  **kwargs) -> str
```

Create a new wallet

<a id="spoon_ai.tools.turnkey_tools.GetWalletTool"></a>

## `GetWalletTool` Objects

```python
class GetWalletTool(TurnkeyBaseTool)
```

Get wallet information by wallet ID

<a id="spoon_ai.tools.turnkey_tools.GetWalletTool.execute"></a>

#### `execute`

```python
async def execute(wallet_id: str, **kwargs) -> str
```

Get wallet information

<a id="spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool"></a>

## `CreateWalletAccountsTool` Objects

```python
class CreateWalletAccountsTool(TurnkeyBaseTool)
```

Add accounts to an existing wallet

<a id="spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool.execute"></a>

#### `execute`

```python
async def execute(wallet_id: str, accounts_json: str, **kwargs) -> str
```

Add accounts to existing wallet

<a id="spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool"></a>

## `CompleteTransactionWorkflowTool` Objects

```python
class CompleteTransactionWorkflowTool(TurnkeyBaseTool)
```

Complete transaction workflow: build, sign, and optionally broadcast

<a id="spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str,
                  to_address: str,
                  value_wei: str,
                  data_hex: str = "0x",
                  enable_broadcast: bool = False,
                  rpc_url: str = None,
                  **kwargs) -> str
```

Complete transaction workflow

<a id="spoon_ai.tools.turnkey_tools.get_turnkey_tools"></a>

#### `get_turnkey_tools`

```python
def get_turnkey_tools() -> List[BaseTool]
```

Get all Turnkey tools

<a id="spoon_ai.tools.tool_manager"></a>

# Module `spoon_ai.tools.tool_manager`

<a id="spoon_ai.tools.tool_manager.ToolManager"></a>

## `ToolManager` Objects

```python
class ToolManager()
```

<a id="spoon_ai.tools.tool_manager.ToolManager.reindex"></a>

#### `reindex`

```python
def reindex() -> None
```

Rebuild the internal name-&gt;tool mapping. Useful if tools have been renamed dynamically.

<a id="spoon_ai.tools.neofs_tools"></a>

# Module `spoon_ai.tools.neofs_tools`

NeoFS Tools for spoon_ai framework

Simple wrappers around NeoFS client methods.
Tools do NOT auto-create bearer tokens - Agent manages tokens.
All parameters map directly to client method parameters.

<a id="spoon_ai.tools.neofs_tools.get_shared_neofs_client"></a>

#### `get_shared_neofs_client`

```python
def get_shared_neofs_client() -> NeoFSClient
```

Get shared NeoFSClient instance for all NeoFS tools.

Returns the same client instance across all tool calls to ensure
bearer token authentication works correctly.

<a id="spoon_ai.tools.neofs_tools.CreateBearerTokenTool"></a>

## `CreateBearerTokenTool` Objects

```python
class CreateBearerTokenTool(BaseTool)
```

Create a bearer token for NeoFS operations

<a id="spoon_ai.tools.neofs_tools.CreateContainerTool"></a>

## `CreateContainerTool` Objects

```python
class CreateContainerTool(BaseTool)
```

Create a NeoFS container

<a id="spoon_ai.tools.neofs_tools.UploadObjectTool"></a>

## `UploadObjectTool` Objects

```python
class UploadObjectTool(BaseTool)
```

Upload object to container

<a id="spoon_ai.tools.neofs_tools.DownloadObjectByIdTool"></a>

## `DownloadObjectByIdTool` Objects

```python
class DownloadObjectByIdTool(BaseTool)
```

Download object by ID

<a id="spoon_ai.tools.neofs_tools.GetObjectHeaderByIdTool"></a>

## `GetObjectHeaderByIdTool` Objects

```python
class GetObjectHeaderByIdTool(BaseTool)
```

Get object header by ID

<a id="spoon_ai.tools.neofs_tools.DownloadObjectByAttributeTool"></a>

## `DownloadObjectByAttributeTool` Objects

```python
class DownloadObjectByAttributeTool(BaseTool)
```

Download object by attribute

<a id="spoon_ai.tools.neofs_tools.GetObjectHeaderByAttributeTool"></a>

## `GetObjectHeaderByAttributeTool` Objects

```python
class GetObjectHeaderByAttributeTool(BaseTool)
```

Get object header by attribute

<a id="spoon_ai.tools.neofs_tools.DeleteObjectTool"></a>

## `DeleteObjectTool` Objects

```python
class DeleteObjectTool(BaseTool)
```

Delete an object

<a id="spoon_ai.tools.neofs_tools.SearchObjectsTool"></a>

## `SearchObjectsTool` Objects

```python
class SearchObjectsTool(BaseTool)
```

Search objects in container

<a id="spoon_ai.tools.neofs_tools.SetContainerEaclTool"></a>

## `SetContainerEaclTool` Objects

```python
class SetContainerEaclTool(BaseTool)
```

Set eACL for container

<a id="spoon_ai.tools.neofs_tools.GetContainerEaclTool"></a>

## `GetContainerEaclTool` Objects

```python
class GetContainerEaclTool(BaseTool)
```

Get eACL for container

<a id="spoon_ai.tools.neofs_tools.ListContainersTool"></a>

## `ListContainersTool` Objects

```python
class ListContainersTool(BaseTool)
```

List all containers

<a id="spoon_ai.tools.neofs_tools.GetContainerInfoTool"></a>

## `GetContainerInfoTool` Objects

```python
class GetContainerInfoTool(BaseTool)
```

Get container info

<a id="spoon_ai.tools.neofs_tools.DeleteContainerTool"></a>

## `DeleteContainerTool` Objects

```python
class DeleteContainerTool(BaseTool)
```

Delete container

<a id="spoon_ai.tools.neofs_tools.GetNetworkInfoTool"></a>

## `GetNetworkInfoTool` Objects

```python
class GetNetworkInfoTool(BaseTool)
```

Get network info

<a id="spoon_ai.tools.neofs_tools.GetBalanceTool"></a>

## `GetBalanceTool` Objects

```python
class GetBalanceTool(BaseTool)
```

Get balance for an address

<a id="spoon_ai.tools.rag_tools"></a>

# Module `spoon_ai.tools.rag_tools`

<a id="spoon_ai.tools.x402_payment"></a>

# Module `spoon_ai.tools.x402_payment`

<a id="spoon_ai.tools.x402_payment.X402PaymentHeaderTool"></a>

## `X402PaymentHeaderTool` Objects

```python
class X402PaymentHeaderTool(BaseTool)
```

Create a signed X-PAYMENT header for a given resource.

<a id="spoon_ai.tools.x402_payment.X402PaywalledRequestTool"></a>

## `X402PaywalledRequestTool` Objects

```python
class X402PaywalledRequestTool(BaseTool)
```

Fetch a paywalled resource, handling the x402 402 negotiation automatically.

<a id="spoon_ai.tools"></a>

# Module `spoon_ai.tools`

<a id="spoon_ai.tools.mcp_tool"></a>

# Module `spoon_ai.tools.mcp_tool`

<a id="spoon_ai.tools.mcp_tool.MCPTool"></a>

## `MCPTool` Objects

```python
class MCPTool(BaseTool, MCPClientMixin)
```

<a id="spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool"></a>

#### `call_mcp_tool`

```python
async def call_mcp_tool(tool_name: str, **kwargs)
```

Override the mixin method to add tool-specific error handling.

<a id="spoon_ai.tools.mcp_tool.MCPTool.list_available_tools"></a>

#### `list_available_tools`

```python
async def list_available_tools() -> list
```

List available tools from the MCP server.

<a id="spoon_ai.tools.base"></a>

# Module `spoon_ai.tools.base`

<a id="spoon_ai.tools.base.ToolFailure"></a>

## `ToolFailure` Objects

```python
class ToolFailure(Exception)
```

Exception to indicate a tool execution failure.

<a id="spoon_ai.graph.agent"></a>

# Module `spoon_ai.graph.agent`

GraphAgent implementation for the graph package.

<a id="spoon_ai.graph.agent.Memory"></a>

## `Memory` Objects

```python
class Memory()
```

Memory implementation with persistent storage

<a id="spoon_ai.graph.agent.Memory.clear"></a>

#### `clear`

```python
def clear()
```

Clear all messages and reset memory

<a id="spoon_ai.graph.agent.Memory.add_message"></a>

#### `add_message`

```python
def add_message(msg)
```

Add a message to memory

<a id="spoon_ai.graph.agent.Memory.get_messages"></a>

#### `get_messages`

```python
def get_messages(limit: Optional[int] = None) -> List[Dict[str, Any]]
```

Get messages from memory

<a id="spoon_ai.graph.agent.Memory.get_recent_messages"></a>

#### `get_recent_messages`

```python
def get_recent_messages(hours: int = 24) -> List[Dict[str, Any]]
```

Get messages from the last N hours

<a id="spoon_ai.graph.agent.Memory.search_messages"></a>

#### `search_messages`

```python
def search_messages(query: str, limit: int = 10) -> List[Dict[str, Any]]
```

Search messages containing the query

<a id="spoon_ai.graph.agent.Memory.get_statistics"></a>

#### `get_statistics`

```python
def get_statistics() -> Dict[str, Any]
```

Get memory statistics

<a id="spoon_ai.graph.agent.Memory.set_metadata"></a>

#### `set_metadata`

```python
def set_metadata(key: str, value: Any)
```

Set metadata

<a id="spoon_ai.graph.agent.Memory.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata(key: str, default: Any = None) -> Any
```

Get metadata

<a id="spoon_ai.graph.agent.MockMemory"></a>

## `MockMemory` Objects

```python
class MockMemory(Memory)
```

Alias for backward compatibility - now uses persistent memory

<a id="spoon_ai.graph.agent.GraphAgent"></a>

## `GraphAgent` Objects

```python
class GraphAgent()
```

<a id="spoon_ai.graph.agent.GraphAgent.search_memory"></a>

#### `search_memory`

```python
def search_memory(query: str, limit: int = 10) -> List[Dict[str, Any]]
```

Search memory for messages containing the query

<a id="spoon_ai.graph.agent.GraphAgent.get_recent_memory"></a>

#### `get_recent_memory`

```python
def get_recent_memory(hours: int = 24) -> List[Dict[str, Any]]
```

Get recent messages from memory

<a id="spoon_ai.graph.agent.GraphAgent.get_memory_statistics"></a>

#### `get_memory_statistics`

```python
def get_memory_statistics() -> Dict[str, Any]
```

Get memory statistics

<a id="spoon_ai.graph.agent.GraphAgent.set_memory_metadata"></a>

#### `set_memory_metadata`

```python
def set_memory_metadata(key: str, value: Any)
```

Set memory metadata

<a id="spoon_ai.graph.agent.GraphAgent.get_memory_metadata"></a>

#### `get_memory_metadata`

```python
def get_memory_metadata(key: str, default: Any = None) -> Any
```

Get memory metadata

<a id="spoon_ai.graph.agent.GraphAgent.save_session"></a>

#### `save_session`

```python
def save_session()
```

Manually save current session

<a id="spoon_ai.graph.agent.GraphAgent.load_session"></a>

#### `load_session`

```python
def load_session(session_id: str)
```

Load a specific session

<a id="spoon_ai.graph.types"></a>

# Module `spoon_ai.graph.types`

Typed structures for the graph package.

<a id="spoon_ai.graph.checkpointer"></a>

# Module `spoon_ai.graph.checkpointer`

In-memory checkpointer for the graph package.

<a id="spoon_ai.graph.checkpointer.InMemoryCheckpointer"></a>

## `InMemoryCheckpointer` Objects

```python
class InMemoryCheckpointer()
```

<a id="spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history"></a>

#### `iter_checkpoint_history`

```python
def iter_checkpoint_history(
        config: Dict[str, Any]) -> Iterable[CheckpointTuple]
```

Return checkpoint tuples for the specified thread, newest last.

<a id="spoon_ai.graph.builder"></a>

# Module `spoon_ai.graph.builder`

Declarative builders and helpers for SpoonAI graphs.

<a id="spoon_ai.graph.builder.Intent"></a>

## `Intent` Objects

```python
@dataclass
class Intent()
```

Result of intent analysis.

<a id="spoon_ai.graph.builder.IntentAnalyzer"></a>

## `IntentAnalyzer` Objects

```python
class IntentAnalyzer()
```

LLM-powered intent analyzer.

Core stays generic; concrete prompts/parsers are supplied by callers.

<a id="spoon_ai.graph.builder.AdaptiveStateBuilder"></a>

## `AdaptiveStateBuilder` Objects

```python
class AdaptiveStateBuilder()
```

Construct initial graph state using query intent and optional parameters.

<a id="spoon_ai.graph.builder.ParameterInferenceEngine"></a>

## `ParameterInferenceEngine` Objects

```python
class ParameterInferenceEngine()
```

LLM delegator for parameter extraction.

Core keeps this generic; applications provide formatting/parsing via options.

<a id="spoon_ai.graph.builder.NodeSpec"></a>

## `NodeSpec` Objects

```python
@dataclass
class NodeSpec()
```

Declarative node specification.

<a id="spoon_ai.graph.builder.EdgeSpec"></a>

## `EdgeSpec` Objects

```python
@dataclass
class EdgeSpec()
```

Declarative edge specification.

<a id="spoon_ai.graph.builder.EdgeSpec.end"></a>

#### `end`

target name or callable router

<a id="spoon_ai.graph.builder.ParallelGroupSpec"></a>

## `ParallelGroupSpec` Objects

```python
@dataclass
class ParallelGroupSpec()
```

Parallel group specification.

<a id="spoon_ai.graph.builder.GraphTemplate"></a>

## `GraphTemplate` Objects

```python
@dataclass
class GraphTemplate()
```

Complete declarative template for a graph.

<a id="spoon_ai.graph.builder.DeclarativeGraphBuilder"></a>

## `DeclarativeGraphBuilder` Objects

```python
class DeclarativeGraphBuilder()
```

Build StateGraph instances from declarative templates.

<a id="spoon_ai.graph.builder.NodePlugin"></a>

## `NodePlugin` Objects

```python
class NodePlugin()
```

Pluggable node provider.

<a id="spoon_ai.graph.builder.NodePluginSystem"></a>

## `NodePluginSystem` Objects

```python
class NodePluginSystem()
```

Registry and discovery for node plugins.

<a id="spoon_ai.graph.builder.HighLevelGraphAPI"></a>

## `HighLevelGraphAPI` Objects

```python
class HighLevelGraphAPI()
```

Convenience facade for building graphs per query.

<a id="spoon_ai.graph.mcp_integration"></a>

# Module `spoon_ai.graph.mcp_integration`

Utility classes for intelligent MCP tool discovery and configuration.

Core graph components no longer hard-code external tools; instead, user code
registers tool specifications and optional transport/configuration details via
these helpers.

<a id="spoon_ai.graph.mcp_integration.MCPToolSpec"></a>

## `MCPToolSpec` Objects

```python
@dataclass
class MCPToolSpec()
```

Specification describing a desired MCP tool.

<a id="spoon_ai.graph.mcp_integration.MCPConfigManager"></a>

## `MCPConfigManager` Objects

```python
class MCPConfigManager()
```

Centralised configuration loader for MCP tools.

<a id="spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine"></a>

## `MCPToolDiscoveryEngine` Objects

```python
class MCPToolDiscoveryEngine()
```

Discover MCP tools based on registered intent mappings.

<a id="spoon_ai.graph.mcp_integration.MCPIntegrationManager"></a>

## `MCPIntegrationManager` Objects

```python
class MCPIntegrationManager()
```

High level coordinator for MCP tool usage within graphs.

<a id="spoon_ai.graph.exceptions"></a>

# Module `spoon_ai.graph.exceptions`

Graph engine exception definitions (public within graph package).

<a id="spoon_ai.graph.reducers"></a>

# Module `spoon_ai.graph.reducers`

Reducers and validators for the graph package.

<a id="spoon_ai.graph.decorators"></a>

# Module `spoon_ai.graph.decorators`

Decorators and executor for the graph package.

<a id="spoon_ai.graph.config"></a>

# Module `spoon_ai.graph.config`

Configuration primitives for the SpoonAI graph engine.

<a id="spoon_ai.graph.config.RouterConfig"></a>

## `RouterConfig` Objects

```python
@dataclass
class RouterConfig()
```

Controls how the graph chooses the next node after each execution step.

<a id="spoon_ai.graph.config.ParallelRetryPolicy"></a>

## `ParallelRetryPolicy` Objects

```python
@dataclass
class ParallelRetryPolicy()
```

Retry policy for individual nodes inside a parallel group.

<a id="spoon_ai.graph.config.ParallelGroupConfig"></a>

## `ParallelGroupConfig` Objects

```python
@dataclass
class ParallelGroupConfig()
```

Controls how a parallel group executes and aggregates results.

<a id="spoon_ai.graph.config.ParallelGroupConfig.quorum"></a>

#### `quorum`

floats in (0, 1] treated as ratio, ints as absolute

<a id="spoon_ai.graph.config.ParallelGroupConfig.error_strategy"></a>

#### `error_strategy`

fail_fast, collect_errors, ignore_errors

<a id="spoon_ai.graph.config.GraphConfig"></a>

## `GraphConfig` Objects

```python
@dataclass
class GraphConfig()
```

Top-level configuration applied to an entire graph instance.

<a id="spoon_ai.graph.engine"></a>

# Module `spoon_ai.graph.engine`

Graph engine: StateGraph, CompiledGraph, and interrupt API implementation.

<a id="spoon_ai.graph.engine.BaseNode"></a>

## `BaseNode` Objects

```python
class BaseNode(ABC, Generic[State])
```

Base class for all graph nodes

<a id="spoon_ai.graph.engine.BaseNode.__call__"></a>

#### `__call__`

```python
@abstractmethod
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute the node logic

<a id="spoon_ai.graph.engine.RunnableNode"></a>

## `RunnableNode` Objects

```python
class RunnableNode(BaseNode[State])
```

Runnable node that wraps a function

<a id="spoon_ai.graph.engine.RunnableNode.__call__"></a>

#### `__call__`

```python
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute the wrapped function

<a id="spoon_ai.graph.engine.ToolNode"></a>

## `ToolNode` Objects

```python
class ToolNode(BaseNode[State])
```

Tool node for executing tools

<a id="spoon_ai.graph.engine.ToolNode.__call__"></a>

#### `__call__`

```python
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute tools based on state

<a id="spoon_ai.graph.engine.ConditionNode"></a>

## `ConditionNode` Objects

```python
class ConditionNode(BaseNode[State])
```

Conditional node for routing decisions

<a id="spoon_ai.graph.engine.ConditionNode.__call__"></a>

#### `__call__`

```python
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute condition and return routing decision

<a id="spoon_ai.graph.engine.interrupt"></a>

#### `interrupt`

```python
def interrupt(data: Dict[str, Any]) -> Any
```

Interrupt execution and wait for human input.

<a id="spoon_ai.graph.engine.RouteRule"></a>

## `RouteRule` Objects

```python
class RouteRule()
```

Advanced routing rule for automatic path selection

<a id="spoon_ai.graph.engine.RouteRule.matches"></a>

#### `matches`

```python
def matches(state: Dict[str, Any], query: str = "") -> bool
```

Check if this rule matches the current state/query

<a id="spoon_ai.graph.engine.RunningSummary"></a>

## `RunningSummary` Objects

```python
@dataclass
class RunningSummary()
```

Rolling conversation summary used by the summarisation node.

<a id="spoon_ai.graph.engine.SummarizationNode"></a>

## `SummarizationNode` Objects

```python
class SummarizationNode(BaseNode[Dict[str, Any]])
```

Node that summarises conversation history before model invocation.

<a id="spoon_ai.graph.engine.StateGraph"></a>

## `StateGraph` Objects

```python
class StateGraph(Generic[State])
```

<a id="spoon_ai.graph.engine.StateGraph.add_node"></a>

#### `add_node`

```python
def add_node(
        node_name: str, node: Union[BaseNode[State],
                                    Callable[[State], Any]]) -> "StateGraph"
```

Add a node to the graph

<a id="spoon_ai.graph.engine.StateGraph.add_edge"></a>

#### `add_edge`

```python
def add_edge(
        start_node: str,
        end_node: str,
        condition: Optional[Callable[[State], bool]] = None) -> "StateGraph"
```

Add an edge. When condition is provided, edge becomes conditional.

<a id="spoon_ai.graph.engine.StateGraph.add_conditional_edges"></a>

#### `add_conditional_edges`

```python
def add_conditional_edges(start_node: str, condition: Callable[[State], str],
                          path_map: Dict[str, str]) -> "StateGraph"
```

Add conditional edges

<a id="spoon_ai.graph.engine.StateGraph.set_entry_point"></a>

#### `set_entry_point`

```python
def set_entry_point(node_name: str) -> "StateGraph"
```

Set the entry point

<a id="spoon_ai.graph.engine.StateGraph.add_tool_node"></a>

#### `add_tool_node`

```python
def add_tool_node(tools: List[Any], name: str = "tools") -> "StateGraph"
```

Add a tool node

<a id="spoon_ai.graph.engine.StateGraph.add_conditional_node"></a>

#### `add_conditional_node`

```python
def add_conditional_node(condition_func: Callable[[State], str],
                         name: str = "condition") -> "StateGraph"
```

Add a conditional node

<a id="spoon_ai.graph.engine.StateGraph.add_parallel_group"></a>

#### `add_parallel_group`

```python
def add_parallel_group(
    group_name: str,
    nodes: List[str],
    config: Optional[Union[Dict[str, Any], ParallelGroupConfig]] = None
) -> "StateGraph"
```

Add a parallel execution group

<a id="spoon_ai.graph.engine.StateGraph.add_routing_rule"></a>

#### `add_routing_rule`

```python
def add_routing_rule(source_node: str,
                     condition: Union[str, Callable[[State, str], bool]],
                     target_node: str,
                     priority: int = 0) -> "StateGraph"
```

Add an intelligent routing rule

<a id="spoon_ai.graph.engine.StateGraph.get_state"></a>

#### `get_state`

```python
def get_state(
        config: Optional[Dict[str, Any]] = None) -> Optional[StateSnapshot]
```

Fetch the latest (or specified) checkpoint snapshot for a thread.

<a id="spoon_ai.graph.engine.StateGraph.get_state_history"></a>

#### `get_state_history`

```python
def get_state_history(
        config: Optional[Dict[str, Any]] = None) -> Iterable[StateSnapshot]
```

Return all checkpoints for the given thread, ordered by creation time.

<a id="spoon_ai.graph.engine.StateGraph.add_pattern_routing"></a>

#### `add_pattern_routing`

```python
def add_pattern_routing(source_node: str,
                        pattern: str,
                        target_node: str,
                        priority: int = 0) -> "StateGraph"
```

Add pattern-based routing rule

<a id="spoon_ai.graph.engine.StateGraph.set_intelligent_router"></a>

#### `set_intelligent_router`

```python
def set_intelligent_router(
        router_func: Callable[[Dict[str, Any], str], str]) -> "StateGraph"
```

Set the intelligent router function

<a id="spoon_ai.graph.engine.StateGraph.set_llm_router"></a>

#### `set_llm_router`

```python
def set_llm_router(router_func: Optional[Callable[[Dict[str, Any], str],
                                                  str]] = None,
                   config: Optional[Dict[str, Any]] = None) -> "StateGraph"
```

Set the LLM-powered router function

**Arguments**:

- `router_func` - Custom LLM router function. If None, uses default LLM router.
- `config` - Configuration for LLM router (model, temperature, max_tokens, etc.)

<a id="spoon_ai.graph.engine.StateGraph.enable_llm_routing"></a>

#### `enable_llm_routing`

```python
def enable_llm_routing(
        config: Optional[Dict[str, Any]] = None) -> "StateGraph"
```

Enable LLM-powered natural language routing

This automatically sets up LLM routing for the graph entry point.

<a id="spoon_ai.graph.engine.StateGraph.compile"></a>

#### `compile`

```python
def compile(checkpointer: Optional[Any] = None) -> "CompiledGraph"
```

Compile the graph

<a id="spoon_ai.graph.engine.StateGraph.get_graph"></a>

#### `get_graph`

```python
def get_graph() -> Dict[str, Any]
```

Get graph structure for visualization/debugging

<a id="spoon_ai.graph.engine.CompiledGraph"></a>

## `CompiledGraph` Objects

```python
class CompiledGraph(Generic[State])
```

Compiled graph for execution

<a id="spoon_ai.graph.engine.CompiledGraph.get_execution_metrics"></a>

#### `get_execution_metrics`

```python
def get_execution_metrics() -> Dict[str, Any]
```

Get aggregated execution metrics

<a id="spoon_ai.neofs.utils"></a>

# Module `spoon_ai.neofs.utils`

<a id="spoon_ai.neofs.utils.SignatureError"></a>

## `SignatureError` Objects

```python
class SignatureError(Exception)
```

Raised when signature payload construction fails.

<a id="spoon_ai.neofs.utils.sign_bearer_token"></a>

#### `sign_bearer_token`

```python
def sign_bearer_token(bearer_token: str,
                      private_key_wif: str,
                      *,
                      wallet_connect: bool = True) -> tuple[str, str]
```

Returns (signature_hex, compressed_pubkey_hex)

- wallet_connect=True:
    msg = WC format (with prefix/len/salt/postfix), hash=SHA-256
    X-Bearer-Signature = &lt;DER signature hex&gt; + &lt;16B salt hex&gt;
    X-Bearer-Signature-Key = &lt;compressed public key hex&gt;
    URL needs to append ?walletConnect=true

<a id="spoon_ai.neofs.client"></a>

# Module `spoon_ai.neofs.client`

<a id="spoon_ai.neofs.client.NeoFSClient"></a>

## `NeoFSClient` Objects

```python
class NeoFSClient()
```

<a id="spoon_ai.neofs.client.NeoFSClient.set_container_eacl"></a>

#### `set_container_eacl`

```python
def set_container_eacl(container_id: str,
                       eacl: Eacl,
                       *,
                       bearer_token: Optional[str] = None,
                       wallet_connect: bool = True) -> SuccessResponse
```

Set container eACL.

**Arguments**:

- `container_id` - Container ID
- `eacl` - eACL object
- `bearer_token` - Optional Bearer Token (recommended for eACL operations)
- `wallet_connect` - Whether to use wallet_connect mode (default True)

<a id="spoon_ai.neofs.client.NeoFSClient.download_object_by_id"></a>

#### `download_object_by_id`

```python
def download_object_by_id(container_id: str,
                          object_id: str,
                          *,
                          bearer_token: Optional[str] = None,
                          download: bool | None = None,
                          range_header: str | None = None) -> httpx.Response
```

Download object by ID. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.get_object_header_by_id"></a>

#### `get_object_header_by_id`

```python
def get_object_header_by_id(container_id: str,
                            object_id: str,
                            *,
                            bearer_token: Optional[str] = None,
                            range_header: str | None = None) -> httpx.Response
```

Get object header by ID. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.download_object_by_attribute"></a>

#### `download_object_by_attribute`

```python
def download_object_by_attribute(
        container_id: str,
        attr_key: str,
        attr_val: str,
        *,
        bearer_token: Optional[str] = None,
        download: bool | None = None,
        range_header: str | None = None) -> httpx.Response
```

Download object by attribute. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.get_object_header_by_attribute"></a>

#### `get_object_header_by_attribute`

```python
def get_object_header_by_attribute(
        container_id: str,
        attr_key: str,
        attr_val: str,
        *,
        bearer_token: Optional[str] = None,
        range_header: str | None = None) -> httpx.Response
```

Get object header by attribute. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.delete_object"></a>

#### `delete_object`

```python
def delete_object(container_id: str,
                  object_id: str,
                  *,
                  bearer_token: Optional[str] = None) -> SuccessResponse
```

Delete object. Bearer token is optional for public containers, required for eACL containers with DENY DELETE rule.

<a id="spoon_ai.neofs.client.NeoFSClient.search_objects"></a>

#### `search_objects`

```python
def search_objects(container_id: str,
                   search_request: SearchRequest,
                   *,
                   bearer_token: Optional[str] = None,
                   cursor: str = "",
                   limit: int = 100) -> ObjectListV2
```

Search objects. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSException"></a>

## `NeoFSException` Objects

```python
class NeoFSException(Exception)
```

Base exception for the NeoFS client.

<a id="spoon_ai.neofs.client.NeoFSAPIException"></a>

## `NeoFSAPIException` Objects

```python
class NeoFSAPIException(NeoFSException)
```

Raised when the API returns an error.

<a id="spoon_ai.neofs"></a>

# Module `spoon_ai.neofs`

NeoFS integration for Spoon Core.

<a id="spoon_ai.neofs.models"></a>

# Module `spoon_ai.neofs.models`

Pydantic models describing NeoFS REST API payloads.

<a id="spoon_ai.neofs.models.NetworkInfo"></a>

## `NetworkInfo` Objects

```python
class NetworkInfo(BaseModel)
```

Describes network configuration fees reported by the gateway.

<a id="spoon_ai.agents.toolcall"></a>

# Module `spoon_ai.agents.toolcall`

<a id="spoon_ai.agents.toolcall.ToolCallAgent"></a>

## `ToolCallAgent` Objects

```python
class ToolCallAgent(ReActAgent)
```

<a id="spoon_ai.agents.toolcall.ToolCallAgent.tool_choices"></a>

#### `tool_choices`

type: ignore

<a id="spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl"></a>

#### `mcp_tools_cache_ttl`

5 minutes TTL

<a id="spoon_ai.agents.toolcall.ToolCallAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Override run method to handle finish_reason termination specially.

<a id="spoon_ai.agents.toolcall.ToolCallAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Override the step method to handle finish_reason termination properly.

<a id="spoon_ai.agents.react"></a>

# Module `spoon_ai.agents.react`

<a id="spoon_ai.agents.mcp_client_mixin"></a>

# Module `spoon_ai.agents.mcp_client_mixin`

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin"></a>

## `MCPClientMixin` Objects

```python
class MCPClientMixin()
```

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session"></a>

#### `get_session`

```python
@asynccontextmanager
async def get_session()
```

Get a session with robust resource management and cleanup.

Features:
- Automatic session reuse per task
- Resource limits to prevent exhaustion
- Proper cleanup on cancellation/failure
- Periodic cleanup of stale sessions

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools"></a>

#### `list_mcp_tools`

```python
async def list_mcp_tools()
```

Get the list of available tools from the MCP server

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool"></a>

#### `call_mcp_tool`

```python
async def call_mcp_tool(tool_name: str, **kwargs)
```

Call a tool on the MCP server

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message"></a>

#### `send_mcp_message`

```python
async def send_mcp_message(recipient: str,
                           message: Union[str, Dict[str, Any]],
                           topic: Optional[str] = None,
                           metadata: Optional[Dict[str, Any]] = None) -> bool
```

Send a message to the MCP system

**Arguments**:

- `recipient` - Recipient ID
- `message` - Message content (string or dictionary)
- `topic` - Message topic
- `metadata` - Additional metadata
  

**Returns**:

- `bool` - Whether the message was sent successfully

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup"></a>

#### `cleanup`

```python
async def cleanup()
```

Enhanced cleanup method with comprehensive resource cleanup.

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats"></a>

#### `get_session_stats`

```python
def get_session_stats() -> Dict[str, Any]
```

Get session statistics for monitoring.

<a id="spoon_ai.agents.spoon_react_mcp"></a>

# Module `spoon_ai.agents.spoon_react_mcp`

<a id="spoon_ai.agents.spoon_react_mcp.SpoonReactMCP"></a>

## `SpoonReactMCP` Objects

```python
class SpoonReactMCP(SpoonReactAI)
```

<a id="spoon_ai.agents.spoon_react_mcp.SpoonReactMCP.list_mcp_tools"></a>

#### `list_mcp_tools`

```python
async def list_mcp_tools()
```

Return MCP tools from available_tools manager

<a id="spoon_ai.agents.monitor"></a>

# Module `spoon_ai.agents.monitor`

<a id="spoon_ai.agents.rag"></a>

# Module `spoon_ai.agents.rag`

<a id="spoon_ai.agents.rag.RetrievalMixin"></a>

## `RetrievalMixin` Objects

```python
class RetrievalMixin()
```

Mixin class for retrieval-augmented generation functionality

<a id="spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client"></a>

#### `initialize_retrieval_client`

```python
def initialize_retrieval_client(backend: str = 'chroma', **kwargs)
```

Initialize the retrieval client if it doesn't exist

<a id="spoon_ai.agents.rag.RetrievalMixin.add_documents"></a>

#### `add_documents`

```python
def add_documents(documents, backend: str = 'chroma', **kwargs)
```

Add documents to the retrieval system

<a id="spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents"></a>

#### `retrieve_relevant_documents`

```python
def retrieve_relevant_documents(query, k=5, backend: str = 'chroma', **kwargs)
```

Retrieve relevant documents for a query

<a id="spoon_ai.agents.rag.RetrievalMixin.get_context_from_query"></a>

#### `get_context_from_query`

```python
def get_context_from_query(query)
```

Get context string from relevant documents for a query

<a id="spoon_ai.agents.custom_agent"></a>

# Module `spoon_ai.agents.custom_agent`

<a id="spoon_ai.agents.custom_agent.CustomAgent"></a>

## `CustomAgent` Objects

```python
class CustomAgent(ToolCallAgent)
```

Custom Agent class allowing users to create their own agents and add custom tools

Usage:
Create custom agent and add tools:
   agent = CustomAgent(name="my_agent", description="My custom agent")
   agent.add_tool(MyCustomTool())
   result = await agent.run("Use my custom tool")

<a id="spoon_ai.agents.custom_agent.CustomAgent.add_tool"></a>

#### `add_tool`

```python
def add_tool(tool: BaseTool) -> None
```

Add a tool to the agent with validation.

**Arguments**:

- `tool` - Tool instance to add
  

**Raises**:

- `ValueError` - If tool is invalid or already exists

<a id="spoon_ai.agents.custom_agent.CustomAgent.add_tools"></a>

#### `add_tools`

```python
def add_tools(tools: List[BaseTool]) -> None
```

Add multiple tools to the agent with atomic operation.

**Arguments**:

- `tools` - List of tool instances to add
  

**Raises**:

- `ValueError` - If any tool is invalid

<a id="spoon_ai.agents.custom_agent.CustomAgent.remove_tool"></a>

#### `remove_tool`

```python
def remove_tool(tool_name: str) -> bool
```

Remove a tool from the agent.

**Arguments**:

- `tool_name` - Name of the tool to remove
  

**Returns**:

- `bool` - True if tool was removed, False if not found

<a id="spoon_ai.agents.custom_agent.CustomAgent.list_tools"></a>

#### `list_tools`

```python
def list_tools() -> List[str]
```

List all available tools in the agent.

**Returns**:

  List of tool names, empty list if no tools

<a id="spoon_ai.agents.custom_agent.CustomAgent.get_tool_info"></a>

#### `get_tool_info`

```python
def get_tool_info() -> Dict[str, Dict[str, Any]]
```

Get detailed information about all tools.

**Returns**:

  Dictionary with tool names as keys and tool info as values

<a id="spoon_ai.agents.custom_agent.CustomAgent.validate_tools"></a>

#### `validate_tools`

```python
def validate_tools() -> Dict[str, Any]
```

Validate all current tools and return validation report.

**Returns**:

  Dictionary with validation results

<a id="spoon_ai.agents.custom_agent.CustomAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Run the agent with enhanced tool validation.

**Arguments**:

- `request` - User request
  

**Returns**:

  Processing result

<a id="spoon_ai.agents.custom_agent.CustomAgent.clear"></a>

#### `clear`

```python
def clear()
```

Enhanced clear method with proper tool state management.

<a id="spoon_ai.agents.graph_agent"></a>

# Module `spoon_ai.agents.graph_agent`

Graph-based agent implementation for SpoonOS.

This module provides the GraphAgent class that executes StateGraph workflows,
integrating the graph execution system with the existing agent architecture.

<a id="spoon_ai.agents.graph_agent.GraphAgent"></a>

## `GraphAgent` Objects

```python
class GraphAgent(BaseAgent)
```

An agent that executes StateGraph workflows.

This agent provides a bridge between the existing SpoonOS agent architecture
and the new graph-based execution system. It allows complex, stateful workflows
to be defined as graphs and executed with proper state management.

Key Features:
- Executes StateGraph workflows
- Maintains compatibility with existing agent interfaces
- Provides detailed execution logging and error handling
- Supports both sync and async node functions

<a id="spoon_ai.agents.graph_agent.GraphAgent.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize the GraphAgent.

**Arguments**:

- `graph` - StateGraph instance to execute
- `**kwargs` - Additional arguments passed to BaseAgent
  

**Raises**:

- `ValueError` - If no graph is provided

<a id="spoon_ai.agents.graph_agent.GraphAgent.validate_graph"></a>

#### `validate_graph`

```python
@validator('graph')
def validate_graph(cls, v)
```

Validate that the provided graph is a StateGraph instance.

<a id="spoon_ai.agents.graph_agent.GraphAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Execute the graph workflow.

This method overrides the base run method to invoke the compiled graph
instead of the traditional step-based execution loop.

**Arguments**:

- `request` - Optional input request to include in initial state
  

**Returns**:

  String representation of the execution result
  

**Raises**:

- `RuntimeError` - If agent is not in IDLE state
- `GraphExecutionError` - If graph execution fails

<a id="spoon_ai.agents.graph_agent.GraphAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Step method for compatibility with BaseAgent.

Since GraphAgent uses graph execution instead of step-based execution,
this method is not used in normal operation but is required by the
BaseAgent interface.

**Returns**:

  Status message indicating graph-based execution

<a id="spoon_ai.agents.graph_agent.GraphAgent.get_execution_history"></a>

#### `get_execution_history`

```python
def get_execution_history() -> list
```

Get the execution history from the last graph run.

**Returns**:

  List of execution steps with metadata

<a id="spoon_ai.agents.graph_agent.GraphAgent.get_execution_metadata"></a>

#### `get_execution_metadata`

```python
def get_execution_metadata() -> Dict[str, Any]
```

Get metadata from the last execution.

**Returns**:

  Dictionary containing execution metadata

<a id="spoon_ai.agents.graph_agent.GraphAgent.clear_state"></a>

#### `clear_state`

```python
def clear_state()
```

Clear preserved state and execution history.

<a id="spoon_ai.agents.graph_agent.GraphAgent.update_initial_state"></a>

#### `update_initial_state`

```python
def update_initial_state(updates: Dict[str, Any])
```

Update the initial state for future executions.

**Arguments**:

- `updates` - Dictionary of state updates to merge

<a id="spoon_ai.agents.graph_agent.GraphAgent.set_preserve_state"></a>

#### `set_preserve_state`

```python
def set_preserve_state(preserve: bool)
```

Enable or disable state preservation between runs.

**Arguments**:

- `preserve` - Whether to preserve state between runs

<a id="spoon_ai.agents"></a>

# Module `spoon_ai.agents`

<a id="spoon_ai.agents.spoon_react"></a>

# Module `spoon_ai.agents.spoon_react`

<a id="spoon_ai.agents.spoon_react.create_configured_chatbot"></a>

#### `create_configured_chatbot`

```python
def create_configured_chatbot()
```

Create a ChatBot instance with intelligent provider selection.

<a id="spoon_ai.agents.spoon_react.SpoonReactAI"></a>

## `SpoonReactAI` Objects

```python
class SpoonReactAI(ToolCallAgent)
```

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactAI with both ToolCallAgent and MCPClientMixin initialization

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.initialize"></a>

#### `initialize`

```python
async def initialize(__context: Any = None)
```

Initialize async components and subscribe to topics

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Ensure prompts reflect current tools before running.

<a id="spoon_ai.agents.base"></a>

# Module `spoon_ai.agents.base`

<a id="spoon_ai.agents.base.ThreadSafeOutputQueue"></a>

## `ThreadSafeOutputQueue` Objects

```python
class ThreadSafeOutputQueue()
```

Thread-safe output queue with fair access and timeout protection

<a id="spoon_ai.agents.base.ThreadSafeOutputQueue.get"></a>

#### `get`

```python
async def get(timeout: Optional[float] = 30.0) -> Any
```

Get item with timeout and fair access

<a id="spoon_ai.agents.base.BaseAgent"></a>

## `BaseAgent` Objects

```python
class BaseAgent(BaseModel, ABC)
```

Thread-safe base class for all agents with proper concurrency handling.

<a id="spoon_ai.agents.base.BaseAgent.add_message"></a>

#### `add_message`

```python
async def add_message(role: Literal["user", "assistant", "tool"],
                      content: str,
                      tool_call_id: Optional[str] = None,
                      tool_calls: Optional[List[ToolCall]] = None,
                      tool_name: Optional[str] = None,
                      timeout: Optional[float] = None) -> None
```

Thread-safe message addition with timeout protection

<a id="spoon_ai.agents.base.BaseAgent.state_context"></a>

#### `state_context`

```python
@asynccontextmanager
async def state_context(new_state: AgentState,
                        timeout: Optional[float] = None)
```

Thread-safe state context manager with deadlock prevention.
Acquires the state lock only to perform quick transitions, not for the
duration of the work inside the context, avoiding long-held locks and
false timeouts during network calls.

<a id="spoon_ai.agents.base.BaseAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None,
              timeout: Optional[float] = None) -> str
```

Thread-safe run method with proper concurrency control and callback support.

<a id="spoon_ai.agents.base.BaseAgent.step"></a>

#### `step`

```python
async def step(run_id: Optional[uuid.UUID] = None) -> str
```

Override this method in subclasses - now with step-level locking and callback support.

<a id="spoon_ai.agents.base.BaseAgent.is_stuck"></a>

#### `is_stuck`

```python
async def is_stuck() -> bool
```

Thread-safe stuck detection

<a id="spoon_ai.agents.base.BaseAgent.handle_stuck_state"></a>

#### `handle_stuck_state`

```python
async def handle_stuck_state()
```

Thread-safe stuck state handling

<a id="spoon_ai.agents.base.BaseAgent.add_documents"></a>

#### `add_documents`

```python
def add_documents(documents) -> None
```

Store documents on the agent so CLI load-docs works without RAG mixin.

This default implementation keeps the documents in-memory under
self._loaded_documents. Agents that support retrieval should override
this method to index documents into their vector store.

<a id="spoon_ai.agents.base.BaseAgent.save_chat_history"></a>

#### `save_chat_history`

```python
def save_chat_history()
```

Thread-safe chat history saving

<a id="spoon_ai.agents.base.BaseAgent.stream"></a>

#### `stream`

```python
async def stream(timeout: Optional[float] = None)
```

Thread-safe streaming with proper cleanup and timeout

<a id="spoon_ai.agents.base.BaseAgent.process_mcp_message"></a>

#### `process_mcp_message`

```python
async def process_mcp_message(content: Any,
                              sender: str,
                              message: Dict[str, Any],
                              agent_id: str,
                              timeout: Optional[float] = None)
```

Thread-safe MCP message processing with timeout protection

<a id="spoon_ai.agents.base.BaseAgent.shutdown"></a>

#### `shutdown`

```python
async def shutdown(timeout: float = 30.0)
```

Graceful shutdown with cleanup of active operations

<a id="spoon_ai.agents.base.BaseAgent.get_diagnostics"></a>

#### `get_diagnostics`

```python
def get_diagnostics() -> Dict[str, Any]
```

Get diagnostic information about the agent's state

<a id="spoon_ai.rag.embeddings"></a>

# Module `spoon_ai.rag.embeddings`

<a id="spoon_ai.rag.embeddings.HashEmbeddingClient"></a>

## `HashEmbeddingClient` Objects

```python
class HashEmbeddingClient(EmbeddingClient)
```

Deterministic offline embedding via hashing.

Produces fixed-length vectors in [0,1] normalized range. Not semantically meaningful
but stable for tests and offline demos.

<a id="spoon_ai.rag.loader"></a>

# Module `spoon_ai.rag.loader`

<a id="spoon_ai.rag.retriever"></a>

# Module `spoon_ai.rag.retriever`

<a id="spoon_ai.rag.qa"></a>

# Module `spoon_ai.rag.qa`

<a id="spoon_ai.rag.vectorstores.faiss_store"></a>

# Module `spoon_ai.rag.vectorstores.faiss_store`

<a id="spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore"></a>

## `FaissVectorStore` Objects

```python
class FaissVectorStore(VectorStore)
```

FAISS-backed local vector store (cosine via inner product + L2 norm).

<a id="spoon_ai.rag.vectorstores.chroma_store"></a>

# Module `spoon_ai.rag.vectorstores.chroma_store`

<a id="spoon_ai.rag.vectorstores.pinecone_store"></a>

# Module `spoon_ai.rag.vectorstores.pinecone_store`

<a id="spoon_ai.rag.vectorstores.qdrant_store"></a>

# Module `spoon_ai.rag.vectorstores.qdrant_store`

<a id="spoon_ai.rag.vectorstores.registry"></a>

# Module `spoon_ai.rag.vectorstores.registry`

<a id="spoon_ai.rag.vectorstores.registry.get_vector_store"></a>

#### `get_vector_store`

```python
def get_vector_store(backend: Optional[str] = None) -> VectorStore
```

Return a vector store by backend name.

Backends:
- faiss: local/offline (mapped to in-memory cosine store)
- pinecone: cloud Pinecone (requires PINECONE_API_KEY)
- qdrant: local/cloud Qdrant (requires qdrant-client, default http://localhost:6333)
- chroma: local Chroma (requires chromadb)

<a id="spoon_ai.rag.vectorstores"></a>

# Module `spoon_ai.rag.vectorstores`

<a id="spoon_ai.rag.vectorstores.base"></a>

# Module `spoon_ai.rag.vectorstores.base`

<a id="spoon_ai.rag.vectorstores.base.VectorStore"></a>

## `VectorStore` Objects

```python
class VectorStore(ABC)
```

<a id="spoon_ai.rag.vectorstores.base.VectorStore.query"></a>

#### `query`

```python
@abstractmethod
def query(
        *,
        collection: str,
        query_embeddings: List[List[float]],
        top_k: int = 5,
        filter: Optional[Dict] = None) -> List[List[Tuple[str, float, Dict]]]
```

Return per-query list of (id, score, metadata). Higher score is better.

<a id="spoon_ai.rag.config"></a>

# Module `spoon_ai.rag.config`

<a id="spoon_ai.rag.config.RagConfig"></a>

## `RagConfig` Objects

```python
@dataclass
class RagConfig()
```

<a id="spoon_ai.rag.config.RagConfig.backend"></a>

#### `backend`

faiss|pinecone|qdrant|chroma

<a id="spoon_ai.rag.config.RagConfig.embeddings_provider"></a>

#### `embeddings_provider`

anyroute|openai|hash

<a id="spoon_ai.rag"></a>

# Module `spoon_ai.rag`

<a id="spoon_ai.rag.index"></a>

# Module `spoon_ai.rag.index`

<a id="spoon_ai.prompts.toolcall"></a>

# Module `spoon_ai.prompts.toolcall`

<a id="spoon_ai.prompts"></a>

# Module `spoon_ai.prompts`

<a id="spoon_ai.prompts.spoon_react"></a>

# Module `spoon_ai.prompts.spoon_react`

<a id="spoon_ai.turnkey.client"></a>

# Module `spoon_ai.turnkey.client`

<a id="spoon_ai.turnkey.client.Turnkey"></a>

## `Turnkey` Objects

```python
class Turnkey()
```

Turnkey API client class for managing blockchain private keys and wallet operations.

<a id="spoon_ai.turnkey.client.Turnkey.__init__"></a>

#### `__init__`

```python
def __init__(base_url=None,
             api_public_key=None,
             api_private_key=None,
             org_id=None)
```

Initialize Turnkey client.

**Arguments**:

- `base_url` _str_ - Turnkey API base URL (defaults from .env or default value).
- `api_public_key` _str_ - Turnkey API public key.
- `api_private_key` _str_ - Turnkey API private key.
- `org_id` _str_ - Turnkey organization ID.
  

**Raises**:

- `ValueError` - If required configuration parameters are missing.

<a id="spoon_ai.turnkey.client.Turnkey.whoami"></a>

#### `whoami`

```python
def whoami()
```

Call whoami API to get organization information.

**Returns**:

- `dict` - JSON response containing organization information.

<a id="spoon_ai.turnkey.client.Turnkey.import_private_key"></a>

#### `import_private_key`

```python
def import_private_key(user_id,
                       private_key_name,
                       encrypted_bundle,
                       curve="CURVE_SECP256K1",
                       address_formats=["ADDRESS_FORMAT_ETHEREUM"])
```

Import private key to Turnkey.

**Arguments**:

- `user_id` _str_ - User ID.
- `private_key_name` _str_ - Private key name.
- `encrypted_bundle` _str_ - Encrypted private key bundle.
- `curve` _str_ - Elliptic curve type, defaults to CURVE_SECP256K1.
- `address_formats` _list_ - Address format list, defaults to ["ADDRESS_FORMAT_ETHEREUM"].
  

**Returns**:

- `dict` - JSON response containing imported private key information.

<a id="spoon_ai.turnkey.client.Turnkey.sign_evm_transaction"></a>

#### `sign_evm_transaction`

```python
def sign_evm_transaction(sign_with, unsigned_tx)
```

Sign EVM transaction using Turnkey.

**Arguments**:

- `sign_with` _str_ - Signing identity (wallet account address / private key address / private key ID).
- `unsigned_tx` _str_ - Raw unsigned transaction (hex string).
  

**Returns**:

- `dict` - JSON response containing signing result, see signTransactionResult.signedTransaction.
  
  Reference:
  https://docs.turnkey.com/api-reference/activities/sign-transaction

<a id="spoon_ai.turnkey.client.Turnkey.sign_typed_data"></a>

#### `sign_typed_data`

```python
def sign_typed_data(sign_with, typed_data)
```

Sign EIP-712 structured data.

**Arguments**:

- `sign_with` _str_ - Signing identity (wallet account address / private key address / private key ID).
- `typed_data` _dict|str_ - EIP-712 structure (domain/types/message) or its JSON string.
  

**Returns**:

- `dict` - Activity response, result contains r/s/v.
  

**Notes**:

  - encoding uses PAYLOAD_ENCODING_EIP712
  - hashFunction uses HASH_FUNCTION_NOT_APPLICABLE (server completes EIP-712 spec hashing)

<a id="spoon_ai.turnkey.client.Turnkey.sign_message"></a>

#### `sign_message`

```python
def sign_message(sign_with, message, use_keccak256=True)
```

Sign arbitrary message (defaults to KECCAK256 following Ethereum convention).

**Arguments**:

- `sign_with` _str_ - Signing identity (wallet account address / private key address / private key ID).
- `message` _str|bytes_ - Text to be signed; bytes will be decoded as UTF-8.
- `use_keccak256` _bool_ - Whether to use KECCAK256 as hash function (default True).
  

**Returns**:

- `dict` - Activity response, result contains r/s/v.

<a id="spoon_ai.turnkey.client.Turnkey.get_activity"></a>

#### `get_activity`

```python
def get_activity(activity_id)
```

Query Activity details.

**Arguments**:

- `activity_id` _str_ - Activity ID.
  

**Returns**:

- `dict` - Activity details.
  
  Reference:
  https://docs.turnkey.com/api-reference/queries/get-activity

<a id="spoon_ai.turnkey.client.Turnkey.list_activities"></a>

#### `list_activities`

```python
def list_activities(limit=None,
                    before=None,
                    after=None,
                    filter_by_status=None,
                    filter_by_type=None)
```

List activities within organization (paginated).

**Arguments**:

- `limit` _str|None_ - Number per page.
- `before` _str|None_ - Pagination cursor (before).
- `after` _str|None_ - Pagination cursor (after).
- `filter_by_status` _list|None_ - Filter by activity status (e.g., ['ACTIVITY_STATUS_COMPLETED']).
- `filter_by_type` _list|None_ - Filter by activity type (e.g., ['ACTIVITY_TYPE_SIGN_TRANSACTION_V2']).
  

**Returns**:

- `dict` - Activity list.
  
  Reference:
  https://docs.turnkey.com/api-reference/queries/list-activities

<a id="spoon_ai.turnkey.client.Turnkey.get_policy_evaluations"></a>

#### `get_policy_evaluations`

```python
def get_policy_evaluations(activity_id)
```

Query policy evaluation results for an Activity (if available).

**Arguments**:

- `activity_id` _str_ - Activity ID.
  

**Returns**:

- `dict` - Policy evaluation details.
  
  Reference:
  https://docs.turnkey.com/api-reference/queries/get-policy-evaluations

<a id="spoon_ai.turnkey.client.Turnkey.get_private_key"></a>

#### `get_private_key`

```python
def get_private_key(private_key_id)
```

Query information for specified private key.

**Arguments**:

- `private_key_id` _str_ - Private key ID.
  

**Returns**:

- `dict` - JSON response containing private key information.

<a id="spoon_ai.turnkey.client.Turnkey.create_wallet"></a>

#### `create_wallet`

```python
def create_wallet(wallet_name, accounts, mnemonic_length=24)
```

Create new wallet.

**Arguments**:

- `wallet_name` _str_ - Wallet name.
- `accounts` _list_ - Account configuration list, each account contains curve, pathFormat, path, addressFormat.
- `mnemonic_length` _int_ - Mnemonic length (default 24).
  

**Returns**:

- `dict` - JSON response containing new wallet information.

<a id="spoon_ai.turnkey.client.Turnkey.create_wallet_accounts"></a>

#### `create_wallet_accounts`

```python
def create_wallet_accounts(wallet_id, accounts)
```

Add accounts to existing wallet.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
- `accounts` _list_ - New account configuration list, each account contains curve, pathFormat, path, addressFormat.
  

**Returns**:

- `dict` - JSON response containing new account information.

<a id="spoon_ai.turnkey.client.Turnkey.get_wallet"></a>

#### `get_wallet`

```python
def get_wallet(wallet_id)
```

Query information for specified wallet.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
  

**Returns**:

- `dict` - JSON response containing wallet information.

<a id="spoon_ai.turnkey.client.Turnkey.get_wallet_account"></a>

#### `get_wallet_account`

```python
def get_wallet_account(wallet_id, address=None, path=None)
```

Query information for specified wallet account.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
- `address` _str, optional_ - Account address.
- `path` _str, optional_ - Account path (e.g., m/44'/60'/0'/0/0).
  

**Returns**:

- `dict` - JSON response containing account information.
  

**Raises**:

- `ValueError` - If neither address nor path is provided.

<a id="spoon_ai.turnkey.client.Turnkey.list_wallets"></a>

#### `list_wallets`

```python
def list_wallets()
```

List all wallets in the organization.

**Returns**:

- `dict` - JSON response containing wallet list.

<a id="spoon_ai.turnkey.client.Turnkey.list_wallet_accounts"></a>

#### `list_wallet_accounts`

```python
def list_wallet_accounts(wallet_id, limit=None, before=None, after=None)
```

List account list for specified wallet.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
- `limit` _str, optional_ - Number of accounts returned per page.
- `before` _str, optional_ - Pagination cursor, returns accounts before this ID.
- `after` _str, optional_ - Pagination cursor, returns accounts after this ID.
  

**Returns**:

- `dict` - JSON response containing account list.

<a id="spoon_ai.turnkey.client.Turnkey.init_import_wallet"></a>

#### `init_import_wallet`

```python
def init_import_wallet(user_id)
```

Initialize wallet import process, generate import_bundle.

**Arguments**:

- `user_id` _str_ - User ID.
  

**Returns**:

- `dict` - JSON response containing import_bundle.

<a id="spoon_ai.turnkey.client.Turnkey.encrypt_wallet"></a>

#### `encrypt_wallet`

```python
def encrypt_wallet(mnemonic,
                   user_id,
                   import_bundle,
                   encryption_key_name="demo-encryption-key")
```

Encrypt mnemonic using Turnkey CLI, generate encrypted_bundle.

**Arguments**:

- `mnemonic` _str_ - Mnemonic phrase (12/15/18/21/24 words).
- `user_id` _str_ - User ID.
- `import_bundle` _str_ - import_bundle obtained from init_import_wallet.
- `encryption_key_name` _str_ - Encryption key name, defaults to demo-encryption-key.
  

**Returns**:

- `str` - Encrypted encrypted_bundle.
  

**Raises**:

- `RuntimeError` - If CLI command fails or turnkey CLI is not installed.

<a id="spoon_ai.turnkey.client.Turnkey.encrypt_private_key"></a>

#### `encrypt_private_key`

```python
def encrypt_private_key(private_key,
                        user_id,
                        import_bundle,
                        key_format="hexadecimal",
                        encryption_key_name="demo-encryption-key")
```

Encrypt private key using Turnkey CLI, generate encrypted_bundle, equivalent to:
`turnkey encrypt --import-bundle-input "./import_bundle.txt" --plaintext-input /dev/fd/3 --key-format "hexadecimal" --encrypted-bundle-output "./encrypted_bundle.txt"`

**Arguments**:

- `private_key` _str_ - Private key string (hexadecimal or Solana format).
- `user_id` _str_ - User ID.
- `import_bundle` _str_ - import_bundle obtained from init_import_private_key.
- `key_format` _str_ - Private key format, defaults to "hexadecimal" (supports "hexadecimal", "solana").
- `encryption_key_name` _str_ - Encryption key name, defaults to "demo-encryption-key".
  

**Returns**:

- `str` - Encrypted encrypted_bundle (Base64 encoded string).
  

**Raises**:

- `ValueError` - If private_key, user_id, import_bundle is empty or key_format is invalid.
- `RuntimeError` - If CLI command fails or turnkey CLI is not installed.

<a id="spoon_ai.turnkey.client.Turnkey.init_import_private_key"></a>

#### `init_import_private_key`

```python
def init_import_private_key(user_id)
```

Initialize private key import process, generate import_bundle.

**Arguments**:

- `user_id` _str_ - User ID.
  

**Returns**:

- `dict` - JSON response containing import_bundle.

<a id="spoon_ai.turnkey.client.Turnkey.import_wallet"></a>

#### `import_wallet`

```python
def import_wallet(user_id, wallet_name, encrypted_bundle, accounts=None)
```

Import wallet to Turnkey.

**Arguments**:

- `user_id` _str_ - User ID.
- `wallet_name` _str_ - Wallet name.
- `encrypted_bundle` _str_ - Encrypted mnemonic bundle.
- `accounts` _list, optional_ - Account configuration list, each account contains curve, pathFormat, path, addressFormat.
  

**Returns**:

- `dict` - JSON response containing imported wallet information.

<a id="spoon_ai.turnkey"></a>

# Module `spoon_ai.turnkey`

Turnkey client integration for SpoonAI.

Provides `Turnkey` for secure signing via Turnkey API.

<a id="spoon_ai.callbacks.streaming_stdout"></a>

# Module `spoon_ai.callbacks.streaming_stdout`

<a id="spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler"></a>

## `StreamingStdOutCallbackHandler` Objects

```python
class StreamingStdOutCallbackHandler(BaseCallbackHandler)
```

Callback handler that streams tokens to standard output.

<a id="spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_new_token"></a>

#### `on_llm_new_token`

```python
def on_llm_new_token(token: str, **kwargs: Any) -> None
```

Print token to stdout immediately.

**Arguments**:

- `token` - The new token to print
- `**kwargs` - Additional context (ignored)

<a id="spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_end"></a>

#### `on_llm_end`

```python
def on_llm_end(response: Any, **kwargs: Any) -> None
```

Print newline after LLM completes.

**Arguments**:

- `response` - The complete LLM response (ignored)
- `**kwargs` - Additional context (ignored)

<a id="spoon_ai.callbacks.statistics"></a>

# Module `spoon_ai.callbacks.statistics`

<a id="spoon_ai.callbacks.statistics.StreamingStatisticsCallback"></a>

## `StreamingStatisticsCallback` Objects

```python
class StreamingStatisticsCallback(BaseCallbackHandler, LLMManagerMixin)
```

Collect simple throughput statistics during streaming runs.

By default, the callback prints summary metrics when the LLM finishes.
Consumers can provide a custom ``print_fn`` to redirect output, or disable
printing entirely and read the public attributes after execution.

<a id="spoon_ai.callbacks.stream_event"></a>

# Module `spoon_ai.callbacks.stream_event`

<a id="spoon_ai.callbacks.stream_event.StreamEventCallbackHandler"></a>

## `StreamEventCallbackHandler` Objects

```python
class StreamEventCallbackHandler(BaseCallbackHandler)
```

Translate callback invocations into standardized stream events.

<a id="spoon_ai.callbacks.manager"></a>

# Module `spoon_ai.callbacks.manager`

<a id="spoon_ai.callbacks.manager.CallbackManager"></a>

## `CallbackManager` Objects

```python
class CallbackManager()
```

Lightweight dispatcher for callback handlers.

<a id="spoon_ai.callbacks"></a>

# Module `spoon_ai.callbacks`

Callback system for streaming and event handling in Spoon AI.

This module provides a comprehensive callback system similar to LangChain's callbacks,
enabling real-time monitoring and event handling for LLM calls, agent execution,
tool invocation, and graph workflows.

<a id="spoon_ai.callbacks.base"></a>

# Module `spoon_ai.callbacks.base`

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin"></a>

## `RetrieverManagerMixin` Objects

```python
class RetrieverManagerMixin()
```

Mixin providing retriever callback hooks.

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_start"></a>

#### `on_retriever_start`

```python
def on_retriever_start(run_id: UUID, query: Any, **kwargs: Any) -> Any
```

Run when a retriever begins execution.

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_end"></a>

#### `on_retriever_end`

```python
def on_retriever_end(run_id: UUID, documents: Any, **kwargs: Any) -> Any
```

Run when a retriever finishes successfully.

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_error"></a>

#### `on_retriever_error`

```python
def on_retriever_error(error: BaseException, *, run_id: UUID,
                       **kwargs: Any) -> Any
```

Run when a retriever raises an error.

<a id="spoon_ai.callbacks.base.LLMManagerMixin"></a>

## `LLMManagerMixin` Objects

```python
class LLMManagerMixin()
```

Mixin providing large language model callback hooks.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_start"></a>

#### `on_llm_start`

```python
def on_llm_start(run_id: UUID, messages: List[Message], **kwargs: Any) -> Any
```

Run when an LLM or chat model begins execution.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_new_token"></a>

#### `on_llm_new_token`

```python
def on_llm_new_token(token: str,
                     *,
                     chunk: Optional[LLMResponseChunk] = None,
                     run_id: Optional[UUID] = None,
                     **kwargs: Any) -> Any
```

Run for each streamed token emitted by an LLM.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_end"></a>

#### `on_llm_end`

```python
def on_llm_end(response: LLMResponse, *, run_id: UUID, **kwargs: Any) -> Any
```

Run when an LLM finishes successfully.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_error"></a>

#### `on_llm_error`

```python
def on_llm_error(error: BaseException, *, run_id: UUID, **kwargs: Any) -> Any
```

Run when an LLM raises an error.

<a id="spoon_ai.callbacks.base.ChainManagerMixin"></a>

## `ChainManagerMixin` Objects

```python
class ChainManagerMixin()
```

Mixin providing chain-level callback hooks.

<a id="spoon_ai.callbacks.base.ChainManagerMixin.on_chain_start"></a>

#### `on_chain_start`

```python
def on_chain_start(run_id: UUID, inputs: Any, **kwargs: Any) -> Any
```

Run when a chain (Runnable) starts executing.

<a id="spoon_ai.callbacks.base.ChainManagerMixin.on_chain_end"></a>

#### `on_chain_end`

```python
def on_chain_end(run_id: UUID, outputs: Any, **kwargs: Any) -> Any
```

Run when a chain finishes successfully.

<a id="spoon_ai.callbacks.base.ChainManagerMixin.on_chain_error"></a>

#### `on_chain_error`

```python
def on_chain_error(error: BaseException, *, run_id: UUID,
                   **kwargs: Any) -> Any
```

Run when a chain raises an error.

<a id="spoon_ai.callbacks.base.ToolManagerMixin"></a>

## `ToolManagerMixin` Objects

```python
class ToolManagerMixin()
```

Mixin providing tool callback hooks.

<a id="spoon_ai.callbacks.base.ToolManagerMixin.on_tool_start"></a>

#### `on_tool_start`

```python
def on_tool_start(tool_name: str, tool_input: Any, *, run_id: UUID,
                  **kwargs: Any) -> Any
```

Run when a tool invocation begins.

<a id="spoon_ai.callbacks.base.ToolManagerMixin.on_tool_end"></a>

#### `on_tool_end`

```python
def on_tool_end(tool_name: str, tool_output: Any, *, run_id: UUID,
                **kwargs: Any) -> Any
```

Run when a tool invocation succeeds.

<a id="spoon_ai.callbacks.base.ToolManagerMixin.on_tool_error"></a>

#### `on_tool_error`

```python
def on_tool_error(error: BaseException,
                  *,
                  run_id: UUID,
                  tool_name: Optional[str] = None,
                  **kwargs: Any) -> Any
```

Run when a tool invocation raises an error.

<a id="spoon_ai.callbacks.base.PromptManagerMixin"></a>

## `PromptManagerMixin` Objects

```python
class PromptManagerMixin()
```

Mixin providing prompt template callback hooks.

<a id="spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_start"></a>

#### `on_prompt_start`

```python
def on_prompt_start(run_id: UUID, inputs: Any, **kwargs: Any) -> Any
```

Run when a prompt template begins formatting.

<a id="spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_end"></a>

#### `on_prompt_end`

```python
def on_prompt_end(run_id: UUID, output: Any, **kwargs: Any) -> Any
```

Run when a prompt template finishes formatting.

<a id="spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_error"></a>

#### `on_prompt_error`

```python
def on_prompt_error(error: BaseException, *, run_id: UUID,
                    **kwargs: Any) -> Any
```

Run when prompt formatting raises an error.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler"></a>

## `BaseCallbackHandler` Objects

```python
class BaseCallbackHandler(LLMManagerMixin, ChainManagerMixin, ToolManagerMixin,
                          RetrieverManagerMixin, PromptManagerMixin, ABC)
```

Base class for SpoonAI callback handlers.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.raise_error"></a>

#### `raise_error`

Whether to re-raise exceptions originating from callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.run_inline"></a>

#### `run_inline`

Whether the callback prefers to run on the caller's event loop.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_llm"></a>

#### `ignore_llm`

```python
@property
def ignore_llm() -> bool
```

Return True to skip LLM callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_chain"></a>

#### `ignore_chain`

```python
@property
def ignore_chain() -> bool
```

Return True to skip chain callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_tool"></a>

#### `ignore_tool`

```python
@property
def ignore_tool() -> bool
```

Return True to skip tool callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_retriever"></a>

#### `ignore_retriever`

```python
@property
def ignore_retriever() -> bool
```

Return True to skip retriever callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_prompt"></a>

#### `ignore_prompt`

```python
@property
def ignore_prompt() -> bool
```

Return True to skip prompt callbacks.

<a id="spoon_ai.callbacks.base.AsyncCallbackHandler"></a>

## `AsyncCallbackHandler` Objects

```python
class AsyncCallbackHandler(BaseCallbackHandler)
```

Async version of the callback handler base class.

<a id="spoon_ai.schema"></a>

# Module `spoon_ai.schema`

<a id="spoon_ai.schema.Function"></a>

## `Function` Objects

```python
class Function(BaseModel)
```

<a id="spoon_ai.schema.Function.get_arguments_dict"></a>

#### `get_arguments_dict`

```python
def get_arguments_dict() -> dict
```

Parse arguments string to dictionary.

**Returns**:

- `dict` - Parsed arguments as dictionary

<a id="spoon_ai.schema.Function.create"></a>

#### `create`

```python
@classmethod
def create(cls, name: str, arguments: Union[str, dict]) -> "Function"
```

Create Function with arguments as string or dict.

**Arguments**:

- `name` - Function name
- `arguments` - Function arguments as string or dict
  

**Returns**:

- `Function` - Function instance with arguments as JSON string

<a id="spoon_ai.schema.AgentState"></a>

## `AgentState` Objects

```python
class AgentState(str, Enum)
```

The state of the agent.

<a id="spoon_ai.schema.ToolChoice"></a>

## `ToolChoice` Objects

```python
class ToolChoice(str, Enum)
```

Tool choice options

<a id="spoon_ai.schema.Role"></a>

## `Role` Objects

```python
class Role(str, Enum)
```

Message role options

<a id="spoon_ai.schema.ROLE_TYPE"></a>

#### `ROLE_TYPE`

type: ignore

<a id="spoon_ai.schema.Message"></a>

## `Message` Objects

```python
class Message(BaseModel)
```

Represents a chat message in the conversation

<a id="spoon_ai.schema.Message.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.SystemMessage"></a>

## `SystemMessage` Objects

```python
class SystemMessage(Message)
```

<a id="spoon_ai.schema.SystemMessage.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.TOOL_CHOICE_TYPE"></a>

#### `TOOL_CHOICE_TYPE`

type: ignore

<a id="spoon_ai.schema.LLMConfig"></a>

## `LLMConfig` Objects

```python
class LLMConfig(BaseModel)
```

Configuration for LLM providers

<a id="spoon_ai.schema.LLMResponse"></a>

## `LLMResponse` Objects

```python
class LLMResponse(BaseModel)
```

Unified LLM response model

<a id="spoon_ai.schema.LLMResponse.text"></a>

#### `text`

Original text response

<a id="spoon_ai.schema.LLMResponseChunk"></a>

## `LLMResponseChunk` Objects

```python
class LLMResponseChunk(BaseModel)
```

Enhanced LLM streaming response chunk.

<a id="spoon_ai.memory.utils"></a>

# Module `spoon_ai.memory.utils`

Memory helpers shared across Mem0 demos and utilities.

<a id="spoon_ai.memory.utils.extract_memories"></a>

#### `extract_memories`

```python
def extract_memories(result: Any) -> List[str]
```

Normalize Mem0 search/get responses into a list of memory strings.
Supports common shapes: &#123;"memories": [...]&#125;, &#123;"results": [...]&#125;, &#123;"data": [...]&#125;, list, or scalar.

<a id="spoon_ai.memory.utils.extract_first_memory_id"></a>

#### `extract_first_memory_id`

```python
def extract_first_memory_id(result: Any) -> Optional[str]
```

Pull the first memory id from Mem0 responses.
Supports common id fields: id, _id, memory_id, uuid.

<a id="spoon_ai.memory.short_term_manager"></a>

# Module `spoon_ai.memory.short_term_manager`

Short-term memory management for conversation history.

<a id="spoon_ai.memory.short_term_manager.TrimStrategy"></a>

## `TrimStrategy` Objects

```python
class TrimStrategy(str, Enum)
```

Strategy for trimming messages.

<a id="spoon_ai.memory.short_term_manager.TrimStrategy.FROM_START"></a>

#### `FROM_START`

Remove oldest messages first

<a id="spoon_ai.memory.short_term_manager.TrimStrategy.FROM_END"></a>

#### `FROM_END`

Remove newest messages first

<a id="spoon_ai.memory.short_term_manager.MessageTokenCounter"></a>

## `MessageTokenCounter` Objects

```python
class MessageTokenCounter()
```

Approximate token counter aligned with LangChain semantics.

<a id="spoon_ai.memory.short_term_manager.ShortTermMemoryManager"></a>

## `ShortTermMemoryManager` Objects

```python
class ShortTermMemoryManager()
```

Manager for short-term conversation memory with advanced operations.

<a id="spoon_ai.memory.short_term_manager.ShortTermMemoryManager.trim_messages"></a>

#### `trim_messages`

```python
async def trim_messages(messages: List[Message],
                        max_tokens: int,
                        strategy: TrimStrategy = TrimStrategy.FROM_END,
                        keep_system: bool = True,
                        model: Optional[str] = None) -> List[Message]
```

Trim messages using a LangChain-style heuristic.

<a id="spoon_ai.memory.short_term_manager.ShortTermMemoryManager.summarize_messages"></a>

#### `summarize_messages`

```python
async def summarize_messages(
    messages: List[Message],
    max_tokens_before_summary: int,
    messages_to_keep: int = 5,
    summary_model: Optional[str] = None,
    llm_manager=None,
    llm_provider: Optional[str] = None,
    existing_summary: str = ""
) -> Tuple[List[Message], List[RemoveMessage], Optional[str]]
```

Summarize earlier messages and emit removal directives.

<a id="spoon_ai.memory.remove_message"></a>

# Module `spoon_ai.memory.remove_message`

Helpers for emitting message-removal directives.

<a id="spoon_ai.memory.remove_message.RemoveMessage"></a>

## `RemoveMessage` Objects

```python
class RemoveMessage(BaseModel)
```

Lightweight message that signals another message should be removed.

<a id="spoon_ai.memory"></a>

# Module `spoon_ai.memory`

Short-term memory management for conversation history.

This module provides memory management utilities for maintaining and optimizing
conversation history in chat applications.

<a id="spoon_ai.memory.mem0_client"></a>

# Module `spoon_ai.memory.mem0_client`

<a id="spoon_ai.memory.mem0_client.SpoonMem0"></a>

## `SpoonMem0` Objects

```python
class SpoonMem0()
```

Lightweight wrapper around Mem0's MemoryClient with safe defaults.

<a id="spoon_ai.memory.mem0_client.SpoonMem0.add_text"></a>

#### `add_text`

```python
def add_text(data: str,
             user_id: Optional[str] = None,
             metadata: Optional[Dict[str, Any]] = None) -> None
```

Convenience helper for adding a single text memory.

<a id="spoon_ai.memory.mem0_client.SpoonMem0.get_all_memory"></a>

#### `get_all_memory`

```python
def get_all_memory(user_id: Optional[str] = None,
                   limit: Optional[int] = None) -> List[str]
```

Retrieve all memories for a user (subject to backend limits).

<a id="spoon_ai.retrieval.chroma"></a>

# Module `spoon_ai.retrieval.chroma`

<a id="spoon_ai.retrieval.qdrant"></a>

# Module `spoon_ai.retrieval.qdrant`

<a id="spoon_ai.retrieval.document_loader"></a>

# Module `spoon_ai.retrieval.document_loader`

<a id="spoon_ai.retrieval.document_loader.BasicTextSplitter"></a>

## `BasicTextSplitter` Objects

```python
class BasicTextSplitter()
```

Simple text splitter to replace langchain's RecursiveCharacterTextSplitter

<a id="spoon_ai.retrieval.document_loader.BasicTextSplitter.split_text"></a>

#### `split_text`

```python
def split_text(text: str) -> List[str]
```

Split text into chunks

<a id="spoon_ai.retrieval.document_loader.BasicTextSplitter.split_documents"></a>

#### `split_documents`

```python
def split_documents(documents: List[Document]) -> List[Document]
```

Split document collection into smaller document chunks

<a id="spoon_ai.retrieval.document_loader.DocumentLoader"></a>

## `DocumentLoader` Objects

```python
class DocumentLoader()
```

<a id="spoon_ai.retrieval.document_loader.DocumentLoader.load_directory"></a>

#### `load_directory`

```python
def load_directory(directory_path: str,
                   glob_pattern: Optional[str] = None) -> List[Document]
```

Load documents from a directory

<a id="spoon_ai.retrieval.document_loader.DocumentLoader.load_file"></a>

#### `load_file`

```python
def load_file(file_path: str) -> List[Document]
```

Load a single file and return the documents

<a id="spoon_ai.retrieval"></a>

# Module `spoon_ai.retrieval`

<a id="spoon_ai.retrieval.base"></a>

# Module `spoon_ai.retrieval.base`

<a id="spoon_ai.retrieval.base.BaseRetrievalClient"></a>

## `BaseRetrievalClient` Objects

```python
class BaseRetrievalClient()
```

Abstract base class for retrieval clients.

