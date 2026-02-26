---
id: spoon_ai
slug: /api-reference/spoon_ai//index
title: spoon_ai
---

# Table of Contents

* [spoon\_ai](#spoon_ai)
* [spoon\_ai.bridge.eth\_neofs\_indexer](#spoon_ai.bridge.eth_neofs_indexer)
  * [EthereumNeoFSIndexer](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer)
    * [register\_event\_handler](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.register_event_handler)
    * [start\_indexing](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.start_indexing)
    * [stop\_indexing](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.stop_indexing)
    * [get\_indexer\_status](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.get_indexer_status)
* [spoon\_ai.bridge](#spoon_ai.bridge)
* [spoon\_ai.graph.cache](#spoon_ai.graph.cache)
  * [compute\_cache\_key](#spoon_ai.graph.cache.compute_cache_key)
  * [CacheEntry](#spoon_ai.graph.cache.CacheEntry)
    * [is\_expired](#spoon_ai.graph.cache.CacheEntry.is_expired)
    * [to\_dict](#spoon_ai.graph.cache.CacheEntry.to_dict)
    * [from\_dict](#spoon_ai.graph.cache.CacheEntry.from_dict)
  * [BaseCache](#spoon_ai.graph.cache.BaseCache)
    * [get](#spoon_ai.graph.cache.BaseCache.get)
    * [set](#spoon_ai.graph.cache.BaseCache.set)
    * [delete](#spoon_ai.graph.cache.BaseCache.delete)
    * [clear](#spoon_ai.graph.cache.BaseCache.clear)
    * [get\_or\_compute](#spoon_ai.graph.cache.BaseCache.get_or_compute)
  * [InMemoryCache](#spoon_ai.graph.cache.InMemoryCache)
    * [\_\_init\_\_](#spoon_ai.graph.cache.InMemoryCache.__init__)
    * [get](#spoon_ai.graph.cache.InMemoryCache.get)
    * [set](#spoon_ai.graph.cache.InMemoryCache.set)
    * [delete](#spoon_ai.graph.cache.InMemoryCache.delete)
    * [clear](#spoon_ai.graph.cache.InMemoryCache.clear)
    * [get\_stats](#spoon_ai.graph.cache.InMemoryCache.get_stats)
  * [SQLiteCache](#spoon_ai.graph.cache.SQLiteCache)
    * [\_\_init\_\_](#spoon_ai.graph.cache.SQLiteCache.__init__)
    * [get](#spoon_ai.graph.cache.SQLiteCache.get)
    * [set](#spoon_ai.graph.cache.SQLiteCache.set)
    * [delete](#spoon_ai.graph.cache.SQLiteCache.delete)
    * [clear](#spoon_ai.graph.cache.SQLiteCache.clear)
    * [get\_stats](#spoon_ai.graph.cache.SQLiteCache.get_stats)
  * [create\_memory\_cache](#spoon_ai.graph.cache.create_memory_cache)
  * [create\_sqlite\_cache](#spoon_ai.graph.cache.create_sqlite_cache)
* [spoon\_ai.graph](#spoon_ai.graph)
* [spoon\_ai.graph.checkpointer](#spoon_ai.graph.checkpointer)
  * [InMemoryCheckpointer](#spoon_ai.graph.checkpointer.InMemoryCheckpointer)
    * [iter\_checkpoint\_history](#spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history)
* [spoon\_ai.graph.engine](#spoon_ai.graph.engine)
  * [create\_multimodal\_message](#spoon_ai.graph.engine.create_multimodal_message)
  * [create\_vision\_user\_message](#spoon_ai.graph.engine.create_vision_user_message)
  * [create\_pdf\_message](#spoon_ai.graph.engine.create_pdf_message)
  * [create\_document\_message](#spoon_ai.graph.engine.create_document_message)
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
* [spoon\_ai.graph.config](#spoon_ai.graph.config)
  * [RouterConfig](#spoon_ai.graph.config.RouterConfig)
  * [ParallelRetryPolicy](#spoon_ai.graph.config.ParallelRetryPolicy)
  * [ParallelGroupConfig](#spoon_ai.graph.config.ParallelGroupConfig)
    * [quorum](#spoon_ai.graph.config.ParallelGroupConfig.quorum)
    * [error\_strategy](#spoon_ai.graph.config.ParallelGroupConfig.error_strategy)
  * [GraphConfig](#spoon_ai.graph.config.GraphConfig)
* [spoon\_ai.graph.exceptions](#spoon_ai.graph.exceptions)
* [spoon\_ai.graph.types](#spoon_ai.graph.types)
* [spoon\_ai.graph.mcp\_integration](#spoon_ai.graph.mcp_integration)
  * [MCPToolSpec](#spoon_ai.graph.mcp_integration.MCPToolSpec)
  * [MCPConfigManager](#spoon_ai.graph.mcp_integration.MCPConfigManager)
  * [MCPToolDiscoveryEngine](#spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine)
  * [MCPIntegrationManager](#spoon_ai.graph.mcp_integration.MCPIntegrationManager)
* [spoon\_ai.graph.decorators](#spoon_ai.graph.decorators)
* [spoon\_ai.graph.reducers](#spoon_ai.graph.reducers)
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
* [spoon\_ai.turnkey](#spoon_ai.turnkey)
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
* [spoon\_ai.prompts.toolcall](#spoon_ai.prompts.toolcall)
* [spoon\_ai.prompts](#spoon_ai.prompts)
* [spoon\_ai.prompts.spoon\_react](#spoon_ai.prompts.spoon_react)
* [spoon\_ai.neofs.models](#spoon_ai.neofs.models)
  * [NetworkInfo](#spoon_ai.neofs.models.NetworkInfo)
* [spoon\_ai.neofs.utils](#spoon_ai.neofs.utils)
  * [SignatureError](#spoon_ai.neofs.utils.SignatureError)
  * [sign\_bearer\_token](#spoon_ai.neofs.utils.sign_bearer_token)
* [spoon\_ai.neofs](#spoon_ai.neofs)
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
* [spoon\_ai.schema](#spoon_ai.schema)
  * [Function](#spoon_ai.schema.Function)
    * [get\_arguments\_dict](#spoon_ai.schema.Function.get_arguments_dict)
    * [create](#spoon_ai.schema.Function.create)
  * [AgentState](#spoon_ai.schema.AgentState)
  * [ToolChoice](#spoon_ai.schema.ToolChoice)
  * [Role](#spoon_ai.schema.Role)
  * [ROLE\_TYPE](#spoon_ai.schema.ROLE_TYPE)
  * [ContentType](#spoon_ai.schema.ContentType)
    * [IMAGE](#spoon_ai.schema.ContentType.IMAGE)
    * [IMAGE\_URL](#spoon_ai.schema.ContentType.IMAGE_URL)
    * [DOCUMENT](#spoon_ai.schema.ContentType.DOCUMENT)
    * [FILE](#spoon_ai.schema.ContentType.FILE)
    * [AUDIO](#spoon_ai.schema.ContentType.AUDIO)
  * [ImageMediaType](#spoon_ai.schema.ImageMediaType)
  * [ImageSource](#spoon_ai.schema.ImageSource)
  * [ImageUrlSource](#spoon_ai.schema.ImageUrlSource)
  * [TextContent](#spoon_ai.schema.TextContent)
  * [ImageContent](#spoon_ai.schema.ImageContent)
  * [ImageUrlContent](#spoon_ai.schema.ImageUrlContent)
  * [FileContent](#spoon_ai.schema.FileContent)
  * [DocumentSource](#spoon_ai.schema.DocumentSource)
  * [DocumentContent](#spoon_ai.schema.DocumentContent)
  * [Message](#spoon_ai.schema.Message)
    * [role](#spoon_ai.schema.Message.role)
    * [is\_multimodal](#spoon_ai.schema.Message.is_multimodal)
    * [text\_content](#spoon_ai.schema.Message.text_content)
    * [has\_images](#spoon_ai.schema.Message.has_images)
    * [has\_documents](#spoon_ai.schema.Message.has_documents)
    * [create\_text](#spoon_ai.schema.Message.create_text)
    * [create\_multimodal](#spoon_ai.schema.Message.create_multimodal)
    * [create\_with\_image\_url](#spoon_ai.schema.Message.create_with_image_url)
    * [create\_with\_base64\_image](#spoon_ai.schema.Message.create_with_base64_image)
    * [create\_with\_pdf](#spoon_ai.schema.Message.create_with_pdf)
    * [create\_with\_document](#spoon_ai.schema.Message.create_with_document)
  * [SystemMessage](#spoon_ai.schema.SystemMessage)
    * [role](#spoon_ai.schema.SystemMessage.role)
  * [TOOL\_CHOICE\_TYPE](#spoon_ai.schema.TOOL_CHOICE_TYPE)
  * [LLMConfig](#spoon_ai.schema.LLMConfig)
  * [LLMResponse](#spoon_ai.schema.LLMResponse)
    * [text](#spoon_ai.schema.LLMResponse.text)
  * [LLMResponseChunk](#spoon_ai.schema.LLMResponseChunk)
* [spoon\_ai.middleware.todolist](#spoon_ai.middleware.todolist)
  * [TodoStatus](#spoon_ai.middleware.todolist.TodoStatus)
  * [TodoItem](#spoon_ai.middleware.todolist.TodoItem)
  * [TodoList](#spoon_ai.middleware.todolist.TodoList)
    * [format\_display](#spoon_ai.middleware.todolist.TodoList.format_display)
  * [WriteTodosTool](#spoon_ai.middleware.todolist.WriteTodosTool)
    * [execute](#spoon_ai.middleware.todolist.WriteTodosTool.execute)
  * [ReadTodosTool](#spoon_ai.middleware.todolist.ReadTodosTool)
    * [execute](#spoon_ai.middleware.todolist.ReadTodosTool.execute)
  * [TodoListMiddleware](#spoon_ai.middleware.todolist.TodoListMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.todolist.TodoListMiddleware.__init__)
    * [tools](#spoon_ai.middleware.todolist.TodoListMiddleware.tools)
    * [system\_prompt](#spoon_ai.middleware.todolist.TodoListMiddleware.system_prompt)
    * [todo\_list](#spoon_ai.middleware.todolist.TodoListMiddleware.todo_list)
    * [get\_todos\_state](#spoon_ai.middleware.todolist.TodoListMiddleware.get_todos_state)
    * [restore\_todos\_state](#spoon_ai.middleware.todolist.TodoListMiddleware.restore_todos_state)
    * [awrap\_model\_call](#spoon_ai.middleware.todolist.TodoListMiddleware.awrap_model_call)
    * [before\_agent](#spoon_ai.middleware.todolist.TodoListMiddleware.before_agent)
    * [after\_agent](#spoon_ai.middleware.todolist.TodoListMiddleware.after_agent)
* [spoon\_ai.middleware.prompt\_caching](#spoon_ai.middleware.prompt_caching)
  * [is\_anthropic\_model](#spoon_ai.middleware.prompt_caching.is_anthropic_model)
  * [add\_cache\_control](#spoon_ai.middleware.prompt_caching.add_cache_control)
  * [should\_cache\_content](#spoon_ai.middleware.prompt_caching.should_cache_content)
  * [AnthropicPromptCachingMiddleware](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.__init__)
    * [awrap\_model\_call](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.get_stats)
  * [create\_prompt\_caching\_middleware](#spoon_ai.middleware.prompt_caching.create_prompt_caching_middleware)
* [spoon\_ai.middleware.base](#spoon_ai.middleware.base)
  * [AgentPhase](#spoon_ai.middleware.base.AgentPhase)
    * [PLAN](#spoon_ai.middleware.base.AgentPhase.PLAN)
    * [THINK](#spoon_ai.middleware.base.AgentPhase.THINK)
    * [ACT](#spoon_ai.middleware.base.AgentPhase.ACT)
    * [OBSERVE](#spoon_ai.middleware.base.AgentPhase.OBSERVE)
    * [REFLECT](#spoon_ai.middleware.base.AgentPhase.REFLECT)
    * [FINISH](#spoon_ai.middleware.base.AgentPhase.FINISH)
  * [AgentRuntime](#spoon_ai.middleware.base.AgentRuntime)
    * [get\_state](#spoon_ai.middleware.base.AgentRuntime.get_state)
    * [set\_state](#spoon_ai.middleware.base.AgentRuntime.set_state)
    * [update\_state](#spoon_ai.middleware.base.AgentRuntime.update_state)
    * [get\_last\_message](#spoon_ai.middleware.base.AgentRuntime.get_last_message)
  * [ModelRequest](#spoon_ai.middleware.base.ModelRequest)
    * [override](#spoon_ai.middleware.base.ModelRequest.override)
    * [append\_to\_system\_prompt](#spoon_ai.middleware.base.ModelRequest.append_to_system_prompt)
    * [add\_tool](#spoon_ai.middleware.base.ModelRequest.add_tool)
  * [ModelResponse](#spoon_ai.middleware.base.ModelResponse)
  * [ToolCallRequest](#spoon_ai.middleware.base.ToolCallRequest)
  * [ToolCallResult](#spoon_ai.middleware.base.ToolCallResult)
    * [success](#spoon_ai.middleware.base.ToolCallResult.success)
    * [from\_string](#spoon_ai.middleware.base.ToolCallResult.from_string)
    * [from\_error](#spoon_ai.middleware.base.ToolCallResult.from_error)
  * [PhaseHook](#spoon_ai.middleware.base.PhaseHook)
    * [\_\_call\_\_](#spoon_ai.middleware.base.PhaseHook.__call__)
  * [AgentMiddleware](#spoon_ai.middleware.base.AgentMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.base.AgentMiddleware.__init__)
    * [wrap\_model\_call](#spoon_ai.middleware.base.AgentMiddleware.wrap_model_call)
    * [awrap\_model\_call](#spoon_ai.middleware.base.AgentMiddleware.awrap_model_call)
    * [wrap\_tool\_call](#spoon_ai.middleware.base.AgentMiddleware.wrap_tool_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.base.AgentMiddleware.awrap_tool_call)
    * [before\_agent](#spoon_ai.middleware.base.AgentMiddleware.before_agent)
    * [after\_agent](#spoon_ai.middleware.base.AgentMiddleware.after_agent)
    * [on\_plan\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_plan_phase)
    * [on\_think\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_think_phase)
    * [on\_act\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_act_phase)
    * [on\_observe\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_observe_phase)
    * [on\_reflect\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_reflect_phase)
    * [on\_finish\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_finish_phase)
    * [register\_phase\_hook](#spoon_ai.middleware.base.AgentMiddleware.register_phase_hook)
    * [get\_phase\_hook](#spoon_ai.middleware.base.AgentMiddleware.get_phase_hook)
  * [MiddlewarePipeline](#spoon_ai.middleware.base.MiddlewarePipeline)
    * [\_\_init\_\_](#spoon_ai.middleware.base.MiddlewarePipeline.__init__)
    * [wrap\_model\_call](#spoon_ai.middleware.base.MiddlewarePipeline.wrap_model_call)
    * [awrap\_model\_call](#spoon_ai.middleware.base.MiddlewarePipeline.awrap_model_call)
    * [wrap\_tool\_call](#spoon_ai.middleware.base.MiddlewarePipeline.wrap_tool_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.base.MiddlewarePipeline.awrap_tool_call)
    * [execute\_before\_agent](#spoon_ai.middleware.base.MiddlewarePipeline.execute_before_agent)
    * [execute\_after\_agent](#spoon_ai.middleware.base.MiddlewarePipeline.execute_after_agent)
    * [execute\_phase\_hook](#spoon_ai.middleware.base.MiddlewarePipeline.execute_phase_hook)
    * [collect\_tools](#spoon_ai.middleware.base.MiddlewarePipeline.collect_tools)
    * [build\_system\_prompt](#spoon_ai.middleware.base.MiddlewarePipeline.build_system_prompt)
  * [create\_middleware\_pipeline](#spoon_ai.middleware.base.create_middleware_pipeline)
* [spoon\_ai.middleware](#spoon_ai.middleware)
* [spoon\_ai.middleware.patch\_tool\_calls](#spoon_ai.middleware.patch_tool_calls)
  * [PatchToolCallsMiddleware](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.__init__)
    * [before\_agent](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.before_agent)
    * [awrap\_model\_call](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.get_stats)
  * [create\_patch\_tool\_calls\_middleware](#spoon_ai.middleware.patch_tool_calls.create_patch_tool_calls_middleware)
* [spoon\_ai.middleware.filesystem](#spoon_ai.middleware.filesystem)
  * [validate\_path](#spoon_ai.middleware.filesystem.validate_path)
  * [LsTool](#spoon_ai.middleware.filesystem.LsTool)
  * [ReadFileTool](#spoon_ai.middleware.filesystem.ReadFileTool)
  * [WriteFileTool](#spoon_ai.middleware.filesystem.WriteFileTool)
  * [EditFileTool](#spoon_ai.middleware.filesystem.EditFileTool)
  * [GlobTool](#spoon_ai.middleware.filesystem.GlobTool)
  * [GrepTool](#spoon_ai.middleware.filesystem.GrepTool)
  * [ExecuteTool](#spoon_ai.middleware.filesystem.ExecuteTool)
  * [get\_filesystem\_tools](#spoon_ai.middleware.filesystem.get_filesystem_tools)
  * [FilesystemMiddleware](#spoon_ai.middleware.filesystem.FilesystemMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.filesystem.FilesystemMiddleware.__init__)
    * [tools](#spoon_ai.middleware.filesystem.FilesystemMiddleware.tools)
    * [system\_prompt](#spoon_ai.middleware.filesystem.FilesystemMiddleware.system_prompt)
    * [backend](#spoon_ai.middleware.filesystem.FilesystemMiddleware.backend)
    * [awrap\_model\_call](#spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_model_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_tool_call)
  * [create\_filesystem\_middleware](#spoon_ai.middleware.filesystem.create_filesystem_middleware)
  * [create\_sandbox\_backend](#spoon_ai.middleware.filesystem.create_sandbox_backend)
  * [LocalSandboxBackend](#spoon_ai.middleware.filesystem.LocalSandboxBackend)
    * [execute](#spoon_ai.middleware.filesystem.LocalSandboxBackend.execute)
    * [aexecute](#spoon_ai.middleware.filesystem.LocalSandboxBackend.aexecute)
* [spoon\_ai.middleware.planning](#spoon_ai.middleware.planning)
  * [PlanStep](#spoon_ai.middleware.planning.PlanStep)
    * [status](#spoon_ai.middleware.planning.PlanStep.status)
    * [mark\_started](#spoon_ai.middleware.planning.PlanStep.mark_started)
    * [mark\_completed](#spoon_ai.middleware.planning.PlanStep.mark_completed)
    * [mark\_skipped](#spoon_ai.middleware.planning.PlanStep.mark_skipped)
  * [Plan](#spoon_ai.middleware.planning.Plan)
    * [add\_step](#spoon_ai.middleware.planning.Plan.add_step)
    * [get\_current\_step](#spoon_ai.middleware.planning.Plan.get_current_step)
    * [advance](#spoon_ai.middleware.planning.Plan.advance)
    * [is\_complete](#spoon_ai.middleware.planning.Plan.is_complete)
    * [get\_progress](#spoon_ai.middleware.planning.Plan.get_progress)
    * [to\_string](#spoon_ai.middleware.planning.Plan.to_string)
  * [PlanningMiddleware](#spoon_ai.middleware.planning.PlanningMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.planning.PlanningMiddleware.__init__)
    * [before\_agent](#spoon_ai.middleware.planning.PlanningMiddleware.before_agent)
    * [on\_plan\_phase](#spoon_ai.middleware.planning.PlanningMiddleware.on_plan_phase)
    * [awrap\_model\_call](#spoon_ai.middleware.planning.PlanningMiddleware.awrap_model_call)
    * [on\_reflect\_phase](#spoon_ai.middleware.planning.PlanningMiddleware.on_reflect_phase)
    * [on\_finish\_phase](#spoon_ai.middleware.planning.PlanningMiddleware.on_finish_phase)
    * [get\_current\_plan](#spoon_ai.middleware.planning.PlanningMiddleware.get_current_plan)
    * [set\_plan](#spoon_ai.middleware.planning.PlanningMiddleware.set_plan)
  * [create\_planning\_middleware](#spoon_ai.middleware.planning.create_planning_middleware)
* [spoon\_ai.middleware.summarization](#spoon_ai.middleware.summarization)
  * [ContextFraction](#spoon_ai.middleware.summarization.ContextFraction)
  * [ContextTokens](#spoon_ai.middleware.summarization.ContextTokens)
  * [ContextMessages](#spoon_ai.middleware.summarization.ContextMessages)
  * [ContextSize](#spoon_ai.middleware.summarization.ContextSize)
  * [count\_tokens\_approximately](#spoon_ai.middleware.summarization.count_tokens_approximately)
  * [RemoveMessage](#spoon_ai.middleware.summarization.RemoveMessage)
  * [SummarizationMiddleware](#spoon_ai.middleware.summarization.SummarizationMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.summarization.SummarizationMiddleware.__init__)
    * [awrap\_model\_call](#spoon_ai.middleware.summarization.SummarizationMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.summarization.SummarizationMiddleware.get_stats)
  * [create\_summarization\_middleware](#spoon_ai.middleware.summarization.create_summarization_middleware)
* [spoon\_ai.wallet.security](#spoon_ai.wallet.security)
  * [ENCRYPTED\_PREFIX\_V2](#spoon_ai.wallet.security.ENCRYPTED_PREFIX_V2)
  * [ENCRYPTED\_PREFIX](#spoon_ai.wallet.security.ENCRYPTED_PREFIX)
  * [DecryptionError](#spoon_ai.wallet.security.DecryptionError)
  * [encrypt\_private\_key](#spoon_ai.wallet.security.encrypt_private_key)
  * [decrypt\_private\_key](#spoon_ai.wallet.security.decrypt_private_key)
  * [decrypt\_and\_store](#spoon_ai.wallet.security.decrypt_and_store)
* [spoon\_ai.wallet](#spoon_ai.wallet)
* [spoon\_ai.wallet.vault](#spoon_ai.wallet.vault)
  * [SecretVault](#spoon_ai.wallet.vault.SecretVault)
    * [\_\_new\_\_](#spoon_ai.wallet.vault.SecretVault.__new__)
    * [store](#spoon_ai.wallet.vault.SecretVault.store)
    * [get\_raw](#spoon_ai.wallet.vault.SecretVault.get_raw)
    * [get\_decoded](#spoon_ai.wallet.vault.SecretVault.get_decoded)
    * [exists](#spoon_ai.wallet.vault.SecretVault.exists)
    * [keys](#spoon_ai.wallet.vault.SecretVault.keys)
    * [wipe](#spoon_ai.wallet.vault.SecretVault.wipe)
    * [wipe\_all](#spoon_ai.wallet.vault.SecretVault.wipe_all)
  * [get\_vault](#spoon_ai.wallet.vault.get_vault)
* [spoon\_ai.wallet.encrypt\_key](#spoon_ai.wallet.encrypt_key)
* [spoon\_ai.security](#spoon_ai.security)
  * [init\_security](#spoon_ai.security.init_security)
  * [decrypted\_secrets](#spoon_ai.security.decrypted_secrets)
  * [async\_decrypted\_secrets](#spoon_ai.security.async_decrypted_secrets)
  * [decrypted\_environ](#spoon_ai.security.decrypted_environ)
  * [async\_decrypted\_environ](#spoon_ai.security.async_decrypted_environ)
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
* [spoon\_ai.utils.utils](#spoon_ai.utils.utils)
* [spoon\_ai.utils](#spoon_ai.utils)
* [spoon\_ai.utils.config](#spoon_ai.utils.config)
* [spoon\_ai.utils.streaming](#spoon_ai.utils.streaming)
  * [StreamOutcome](#spoon_ai.utils.streaming.StreamOutcome)
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
* [spoon\_ai.callbacks.stream\_event](#spoon_ai.callbacks.stream_event)
  * [StreamEventCallbackHandler](#spoon_ai.callbacks.stream_event.StreamEventCallbackHandler)
* [spoon\_ai.callbacks.skill\_callback](#spoon_ai.callbacks.skill_callback)
  * [SkillCallbackHandler](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler)
    * [on\_skill\_start](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_start)
    * [on\_skill\_end](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_end)
    * [on\_skill\_error](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_error)
    * [on\_skill\_match](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_match)
  * [LoggingSkillCallback](#spoon_ai.callbacks.skill_callback.LoggingSkillCallback)
  * [MetricsSkillCallback](#spoon_ai.callbacks.skill_callback.MetricsSkillCallback)
    * [get\_metrics](#spoon_ai.callbacks.skill_callback.MetricsSkillCallback.get_metrics)
    * [reset](#spoon_ai.callbacks.skill_callback.MetricsSkillCallback.reset)
* [spoon\_ai.callbacks.statistics](#spoon_ai.callbacks.statistics)
  * [StreamingStatisticsCallback](#spoon_ai.callbacks.statistics.StreamingStatisticsCallback)
* [spoon\_ai.callbacks](#spoon_ai.callbacks)
* [spoon\_ai.callbacks.manager](#spoon_ai.callbacks.manager)
  * [CallbackManager](#spoon_ai.callbacks.manager.CallbackManager)
* [spoon\_ai.callbacks.streaming\_stdout](#spoon_ai.callbacks.streaming_stdout)
  * [StreamingStdOutCallbackHandler](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler)
    * [on\_llm\_new\_token](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_new_token)
    * [on\_llm\_end](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_end)
* [spoon\_ai.payments.models](#spoon_ai.payments.models)
  * [X402PaymentRequest](#spoon_ai.payments.models.X402PaymentRequest)
  * [X402VerifyResult](#spoon_ai.payments.models.X402VerifyResult)
  * [X402SettleResult](#spoon_ai.payments.models.X402SettleResult)
  * [X402PaymentOutcome](#spoon_ai.payments.models.X402PaymentOutcome)
  * [X402PaymentReceipt](#spoon_ai.payments.models.X402PaymentReceipt)
* [spoon\_ai.payments](#spoon_ai.payments)
* [spoon\_ai.payments.cli](#spoon_ai.payments.cli)
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
* [spoon\_ai.payments.facilitator\_client](#spoon_ai.payments.facilitator_client)
  * [X402FacilitatorClient](#spoon_ai.payments.facilitator_client.X402FacilitatorClient)
* [spoon\_ai.payments.app](#spoon_ai.payments.app)
* [spoon\_ai.payments.exceptions](#spoon_ai.payments.exceptions)
  * [X402PaymentError](#spoon_ai.payments.exceptions.X402PaymentError)
  * [X402ConfigurationError](#spoon_ai.payments.exceptions.X402ConfigurationError)
  * [X402VerificationError](#spoon_ai.payments.exceptions.X402VerificationError)
  * [X402SettlementError](#spoon_ai.payments.exceptions.X402SettlementError)
* [spoon\_ai.payments.server](#spoon_ai.payments.server)
  * [create\_paywalled\_router](#spoon_ai.payments.server.create_paywalled_router)
* [spoon\_ai.rag.index](#spoon_ai.rag.index)
* [spoon\_ai.rag.embeddings](#spoon_ai.rag.embeddings)
  * [HashEmbeddingClient](#spoon_ai.rag.embeddings.HashEmbeddingClient)
  * [get\_embedding\_client](#spoon_ai.rag.embeddings.get_embedding_client)
* [spoon\_ai.rag.loader](#spoon_ai.rag.loader)
* [spoon\_ai.rag.vectorstores.base](#spoon_ai.rag.vectorstores.base)
  * [VectorStore](#spoon_ai.rag.vectorstores.base.VectorStore)
    * [query](#spoon_ai.rag.vectorstores.base.VectorStore.query)
* [spoon\_ai.rag.vectorstores.pinecone\_store](#spoon_ai.rag.vectorstores.pinecone_store)
* [spoon\_ai.rag.vectorstores.qdrant\_store](#spoon_ai.rag.vectorstores.qdrant_store)
* [spoon\_ai.rag.vectorstores](#spoon_ai.rag.vectorstores)
* [spoon\_ai.rag.vectorstores.chroma\_store](#spoon_ai.rag.vectorstores.chroma_store)
* [spoon\_ai.rag.vectorstores.faiss\_store](#spoon_ai.rag.vectorstores.faiss_store)
  * [FaissVectorStore](#spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore)
* [spoon\_ai.rag.vectorstores.registry](#spoon_ai.rag.vectorstores.registry)
  * [get\_vector\_store](#spoon_ai.rag.vectorstores.registry.get_vector_store)
* [spoon\_ai.rag](#spoon_ai.rag)
* [spoon\_ai.rag.qa](#spoon_ai.rag.qa)
* [spoon\_ai.rag.config](#spoon_ai.rag.config)
  * [RagConfig](#spoon_ai.rag.config.RagConfig)
    * [backend](#spoon_ai.rag.config.RagConfig.backend)
* [spoon\_ai.rag.retriever](#spoon_ai.rag.retriever)
* [spoon\_ai.memory.mem0\_client](#spoon_ai.memory.mem0_client)
  * [SpoonMem0](#spoon_ai.memory.mem0_client.SpoonMem0)
    * [add\_text](#spoon_ai.memory.mem0_client.SpoonMem0.add_text)
    * [get\_all\_memory](#spoon_ai.memory.mem0_client.SpoonMem0.get_all_memory)
* [spoon\_ai.memory.remove\_message](#spoon_ai.memory.remove_message)
  * [RemoveMessage](#spoon_ai.memory.remove_message.RemoveMessage)
* [spoon\_ai.memory.utils](#spoon_ai.memory.utils)
  * [extract\_memories](#spoon_ai.memory.utils.extract_memories)
  * [extract\_first\_memory\_id](#spoon_ai.memory.utils.extract_first_memory_id)
* [spoon\_ai.memory](#spoon_ai.memory)
* [spoon\_ai.memory.checkpointer](#spoon_ai.memory.checkpointer)
  * [Checkpoint](#spoon_ai.memory.checkpointer.Checkpoint)
    * [messages](#spoon_ai.memory.checkpointer.Checkpoint.messages)
    * [agent\_state](#spoon_ai.memory.checkpointer.Checkpoint.agent_state)
    * [metadata](#spoon_ai.memory.checkpointer.Checkpoint.metadata)
  * [BaseCheckpointer](#spoon_ai.memory.checkpointer.BaseCheckpointer)
    * [save](#spoon_ai.memory.checkpointer.BaseCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.BaseCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.BaseCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.BaseCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.BaseCheckpointer.get_history)
  * [InMemoryCheckpointer](#spoon_ai.memory.checkpointer.InMemoryCheckpointer)
    * [save](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.get_history)
  * [SQLiteCheckpointer](#spoon_ai.memory.checkpointer.SQLiteCheckpointer)
    * [\_\_init\_\_](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.__init__)
    * [save](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.get_history)
  * [JSONCheckpointer](#spoon_ai.memory.checkpointer.JSONCheckpointer)
    * [\_\_init\_\_](#spoon_ai.memory.checkpointer.JSONCheckpointer.__init__)
    * [save](#spoon_ai.memory.checkpointer.JSONCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.JSONCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.JSONCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.JSONCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.JSONCheckpointer.get_history)
  * [CheckpointMiddleware](#spoon_ai.memory.checkpointer.CheckpointMiddleware)
    * [\_\_init\_\_](#spoon_ai.memory.checkpointer.CheckpointMiddleware.__init__)
    * [before\_agent](#spoon_ai.memory.checkpointer.CheckpointMiddleware.before_agent)
    * [after\_agent](#spoon_ai.memory.checkpointer.CheckpointMiddleware.after_agent)
  * [create\_sqlite\_checkpointer](#spoon_ai.memory.checkpointer.create_sqlite_checkpointer)
  * [create\_memory\_checkpointer](#spoon_ai.memory.checkpointer.create_memory_checkpointer)
* [spoon\_ai.memory.short\_term\_manager](#spoon_ai.memory.short_term_manager)
  * [TrimStrategy](#spoon_ai.memory.short_term_manager.TrimStrategy)
    * [FROM\_START](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_START)
    * [FROM\_END](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_END)
  * [MessageTokenCounter](#spoon_ai.memory.short_term_manager.MessageTokenCounter)
  * [ShortTermMemoryManager](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager)
    * [trim\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.trim_messages)
    * [summarize\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.summarize_messages)
* [spoon\_ai.backends.sandbox](#spoon_ai.backends.sandbox)
  * [BaseSandbox](#spoon_ai.backends.sandbox.BaseSandbox)
    * [execute](#spoon_ai.backends.sandbox.BaseSandbox.execute)
    * [aexecute](#spoon_ai.backends.sandbox.BaseSandbox.aexecute)
    * [id](#spoon_ai.backends.sandbox.BaseSandbox.id)
    * [ls\_info](#spoon_ai.backends.sandbox.BaseSandbox.ls_info)
    * [read](#spoon_ai.backends.sandbox.BaseSandbox.read)
    * [write](#spoon_ai.backends.sandbox.BaseSandbox.write)
    * [edit](#spoon_ai.backends.sandbox.BaseSandbox.edit)
    * [grep\_raw](#spoon_ai.backends.sandbox.BaseSandbox.grep_raw)
    * [glob\_info](#spoon_ai.backends.sandbox.BaseSandbox.glob_info)
    * [upload\_files](#spoon_ai.backends.sandbox.BaseSandbox.upload_files)
    * [download\_files](#spoon_ai.backends.sandbox.BaseSandbox.download_files)
    * [als\_info](#spoon_ai.backends.sandbox.BaseSandbox.als_info)
    * [aread](#spoon_ai.backends.sandbox.BaseSandbox.aread)
    * [awrite](#spoon_ai.backends.sandbox.BaseSandbox.awrite)
    * [aedit](#spoon_ai.backends.sandbox.BaseSandbox.aedit)
    * [agrep\_raw](#spoon_ai.backends.sandbox.BaseSandbox.agrep_raw)
    * [aglob\_info](#spoon_ai.backends.sandbox.BaseSandbox.aglob_info)
    * [aupload\_files](#spoon_ai.backends.sandbox.BaseSandbox.aupload_files)
    * [adownload\_files](#spoon_ai.backends.sandbox.BaseSandbox.adownload_files)
* [spoon\_ai.backends.utils](#spoon_ai.backends.utils)
  * [sanitize\_tool\_call\_id](#spoon_ai.backends.utils.sanitize_tool_call_id)
  * [validate\_path](#spoon_ai.backends.utils.validate_path)
  * [format\_content\_with\_line\_numbers](#spoon_ai.backends.utils.format_content_with_line_numbers)
  * [check\_empty\_content](#spoon_ai.backends.utils.check_empty_content)
  * [file\_data\_to\_string](#spoon_ai.backends.utils.file_data_to_string)
  * [create\_file\_data](#spoon_ai.backends.utils.create_file_data)
  * [update\_file\_data](#spoon_ai.backends.utils.update_file_data)
  * [format\_read\_response](#spoon_ai.backends.utils.format_read_response)
  * [perform\_string\_replacement](#spoon_ai.backends.utils.perform_string_replacement)
  * [glob\_match](#spoon_ai.backends.utils.glob_match)
  * [glob\_search\_files](#spoon_ai.backends.utils.glob_search_files)
  * [grep\_matches\_from\_files](#spoon_ai.backends.utils.grep_matches_from_files)
  * [format\_grep\_results](#spoon_ai.backends.utils.format_grep_results)
  * [truncate\_if\_too\_long](#spoon_ai.backends.utils.truncate_if_too_long)
* [spoon\_ai.backends.state](#spoon_ai.backends.state)
  * [StateBackend](#spoon_ai.backends.state.StateBackend)
    * [\_\_init\_\_](#spoon_ai.backends.state.StateBackend.__init__)
    * [ls\_info](#spoon_ai.backends.state.StateBackend.ls_info)
    * [read](#spoon_ai.backends.state.StateBackend.read)
    * [write](#spoon_ai.backends.state.StateBackend.write)
    * [edit](#spoon_ai.backends.state.StateBackend.edit)
    * [grep\_raw](#spoon_ai.backends.state.StateBackend.grep_raw)
    * [glob\_info](#spoon_ai.backends.state.StateBackend.glob_info)
  * [create\_state\_backend](#spoon_ai.backends.state.create_state_backend)
* [spoon\_ai.backends.protocol](#spoon_ai.backends.protocol)
  * [FileOperationError](#spoon_ai.backends.protocol.FileOperationError)
  * [FileDownloadResponse](#spoon_ai.backends.protocol.FileDownloadResponse)
  * [FileUploadResponse](#spoon_ai.backends.protocol.FileUploadResponse)
  * [FileInfo](#spoon_ai.backends.protocol.FileInfo)
  * [GrepMatch](#spoon_ai.backends.protocol.GrepMatch)
  * [WriteResult](#spoon_ai.backends.protocol.WriteResult)
  * [EditResult](#spoon_ai.backends.protocol.EditResult)
  * [ExecuteResponse](#spoon_ai.backends.protocol.ExecuteResponse)
    * [output](#spoon_ai.backends.protocol.ExecuteResponse.output)
    * [exit\_code](#spoon_ai.backends.protocol.ExecuteResponse.exit_code)
    * [truncated](#spoon_ai.backends.protocol.ExecuteResponse.truncated)
  * [BackendRuntime](#spoon_ai.backends.protocol.BackendRuntime)
    * [store](#spoon_ai.backends.protocol.BackendRuntime.store)
    * [get\_state](#spoon_ai.backends.protocol.BackendRuntime.get_state)
    * [set\_state](#spoon_ai.backends.protocol.BackendRuntime.set_state)
  * [BackendProtocol](#spoon_ai.backends.protocol.BackendProtocol)
    * [ls\_info](#spoon_ai.backends.protocol.BackendProtocol.ls_info)
    * [als\_info](#spoon_ai.backends.protocol.BackendProtocol.als_info)
    * [read](#spoon_ai.backends.protocol.BackendProtocol.read)
    * [aread](#spoon_ai.backends.protocol.BackendProtocol.aread)
    * [write](#spoon_ai.backends.protocol.BackendProtocol.write)
    * [awrite](#spoon_ai.backends.protocol.BackendProtocol.awrite)
    * [edit](#spoon_ai.backends.protocol.BackendProtocol.edit)
    * [aedit](#spoon_ai.backends.protocol.BackendProtocol.aedit)
    * [grep\_raw](#spoon_ai.backends.protocol.BackendProtocol.grep_raw)
    * [agrep\_raw](#spoon_ai.backends.protocol.BackendProtocol.agrep_raw)
    * [glob\_info](#spoon_ai.backends.protocol.BackendProtocol.glob_info)
    * [aglob\_info](#spoon_ai.backends.protocol.BackendProtocol.aglob_info)
    * [upload\_files](#spoon_ai.backends.protocol.BackendProtocol.upload_files)
    * [aupload\_files](#spoon_ai.backends.protocol.BackendProtocol.aupload_files)
    * [download\_files](#spoon_ai.backends.protocol.BackendProtocol.download_files)
    * [adownload\_files](#spoon_ai.backends.protocol.BackendProtocol.adownload_files)
  * [SandboxBackendProtocol](#spoon_ai.backends.protocol.SandboxBackendProtocol)
    * [execute](#spoon_ai.backends.protocol.SandboxBackendProtocol.execute)
    * [aexecute](#spoon_ai.backends.protocol.SandboxBackendProtocol.aexecute)
    * [id](#spoon_ai.backends.protocol.SandboxBackendProtocol.id)
  * [BackendFactory](#spoon_ai.backends.protocol.BackendFactory)
  * [BACKEND\_TYPES](#spoon_ai.backends.protocol.BACKEND_TYPES)
* [spoon\_ai.backends](#spoon_ai.backends)
* [spoon\_ai.backends.composite](#spoon_ai.backends.composite)
  * [CompositeBackend](#spoon_ai.backends.composite.CompositeBackend)
    * [\_\_init\_\_](#spoon_ai.backends.composite.CompositeBackend.__init__)
    * [ls\_info](#spoon_ai.backends.composite.CompositeBackend.ls_info)
    * [als\_info](#spoon_ai.backends.composite.CompositeBackend.als_info)
    * [read](#spoon_ai.backends.composite.CompositeBackend.read)
    * [aread](#spoon_ai.backends.composite.CompositeBackend.aread)
    * [write](#spoon_ai.backends.composite.CompositeBackend.write)
    * [awrite](#spoon_ai.backends.composite.CompositeBackend.awrite)
    * [edit](#spoon_ai.backends.composite.CompositeBackend.edit)
    * [aedit](#spoon_ai.backends.composite.CompositeBackend.aedit)
    * [grep\_raw](#spoon_ai.backends.composite.CompositeBackend.grep_raw)
    * [agrep\_raw](#spoon_ai.backends.composite.CompositeBackend.agrep_raw)
    * [glob\_info](#spoon_ai.backends.composite.CompositeBackend.glob_info)
    * [aglob\_info](#spoon_ai.backends.composite.CompositeBackend.aglob_info)
    * [execute](#spoon_ai.backends.composite.CompositeBackend.execute)
    * [aexecute](#spoon_ai.backends.composite.CompositeBackend.aexecute)
    * [upload\_files](#spoon_ai.backends.composite.CompositeBackend.upload_files)
    * [aupload\_files](#spoon_ai.backends.composite.CompositeBackend.aupload_files)
    * [download\_files](#spoon_ai.backends.composite.CompositeBackend.download_files)
    * [adownload\_files](#spoon_ai.backends.composite.CompositeBackend.adownload_files)
  * [create\_composite\_backend](#spoon_ai.backends.composite.create_composite_backend)
* [spoon\_ai.backends.store](#spoon_ai.backends.store)
  * [BaseStore](#spoon_ai.backends.store.BaseStore)
    * [get](#spoon_ai.backends.store.BaseStore.get)
    * [put](#spoon_ai.backends.store.BaseStore.put)
    * [delete](#spoon_ai.backends.store.BaseStore.delete)
    * [search](#spoon_ai.backends.store.BaseStore.search)
  * [InMemoryStore](#spoon_ai.backends.store.InMemoryStore)
  * [SQLiteStore](#spoon_ai.backends.store.SQLiteStore)
  * [StoreBackend](#spoon_ai.backends.store.StoreBackend)
    * [\_\_init\_\_](#spoon_ai.backends.store.StoreBackend.__init__)
    * [ls\_info](#spoon_ai.backends.store.StoreBackend.ls_info)
    * [read](#spoon_ai.backends.store.StoreBackend.read)
    * [write](#spoon_ai.backends.store.StoreBackend.write)
    * [edit](#spoon_ai.backends.store.StoreBackend.edit)
    * [grep\_raw](#spoon_ai.backends.store.StoreBackend.grep_raw)
    * [glob\_info](#spoon_ai.backends.store.StoreBackend.glob_info)
    * [upload\_files](#spoon_ai.backends.store.StoreBackend.upload_files)
    * [download\_files](#spoon_ai.backends.store.StoreBackend.download_files)
  * [create\_store\_backend](#spoon_ai.backends.store.create_store_backend)
* [spoon\_ai.backends.filesystem](#spoon_ai.backends.filesystem)
  * [FilesystemBackend](#spoon_ai.backends.filesystem.FilesystemBackend)
    * [\_\_init\_\_](#spoon_ai.backends.filesystem.FilesystemBackend.__init__)
    * [ls\_info](#spoon_ai.backends.filesystem.FilesystemBackend.ls_info)
    * [read](#spoon_ai.backends.filesystem.FilesystemBackend.read)
    * [write](#spoon_ai.backends.filesystem.FilesystemBackend.write)
    * [edit](#spoon_ai.backends.filesystem.FilesystemBackend.edit)
    * [grep\_raw](#spoon_ai.backends.filesystem.FilesystemBackend.grep_raw)
    * [glob\_info](#spoon_ai.backends.filesystem.FilesystemBackend.glob_info)
    * [upload\_files](#spoon_ai.backends.filesystem.FilesystemBackend.upload_files)
    * [download\_files](#spoon_ai.backends.filesystem.FilesystemBackend.download_files)
  * [create\_filesystem\_backend](#spoon_ai.backends.filesystem.create_filesystem_backend)
* [spoon\_ai.agents.rag](#spoon_ai.agents.rag)
  * [RetrievalMixin](#spoon_ai.agents.rag.RetrievalMixin)
    * [initialize\_retrieval\_client](#spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client)
    * [add\_documents](#spoon_ai.agents.rag.RetrievalMixin.add_documents)
    * [retrieve\_relevant\_documents](#spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents)
    * [get\_context\_from\_query](#spoon_ai.agents.rag.RetrievalMixin.get_context_from_query)
* [spoon\_ai.agents.monitor](#spoon_ai.agents.monitor)
* [spoon\_ai.agents.spoon\_react\_skill](#spoon_ai.agents.spoon_react_skill)
  * [SpoonReactSkill](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.__init__)
    * [run](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.run)
    * [initialize](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.initialize)
    * [add\_skill\_path](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.add_skill_path)
    * [discover\_skills](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.discover_skills)
* [spoon\_ai.agents.base](#spoon_ai.agents.base)
  * [ThreadSafeOutputQueue](#spoon_ai.agents.base.ThreadSafeOutputQueue)
    * [get](#spoon_ai.agents.base.ThreadSafeOutputQueue.get)
  * [BaseAgent](#spoon_ai.agents.base.BaseAgent)
    * [add\_message](#spoon_ai.agents.base.BaseAgent.add_message)
    * [add\_message\_with\_image](#spoon_ai.agents.base.BaseAgent.add_message_with_image)
    * [add\_message\_with\_pdf](#spoon_ai.agents.base.BaseAgent.add_message_with_pdf)
    * [add\_message\_with\_document](#spoon_ai.agents.base.BaseAgent.add_message_with_document)
    * [add\_message\_with\_pdf\_file](#spoon_ai.agents.base.BaseAgent.add_message_with_pdf_file)
    * [add\_message\_with\_image\_file](#spoon_ai.agents.base.BaseAgent.add_message_with_image_file)
    * [add\_message\_with\_file](#spoon_ai.agents.base.BaseAgent.add_message_with_file)
    * [state\_context](#spoon_ai.agents.base.BaseAgent.state_context)
    * [run](#spoon_ai.agents.base.BaseAgent.run)
    * [step](#spoon_ai.agents.base.BaseAgent.step)
    * [is\_stuck](#spoon_ai.agents.base.BaseAgent.is_stuck)
    * [handle\_stuck\_state](#spoon_ai.agents.base.BaseAgent.handle_stuck_state)
    * [estimate\_token\_count](#spoon_ai.agents.base.BaseAgent.estimate_token_count)
    * [should\_trigger\_reflection](#spoon_ai.agents.base.BaseAgent.should_trigger_reflection)
    * [add\_documents](#spoon_ai.agents.base.BaseAgent.add_documents)
    * [save\_chat\_history](#spoon_ai.agents.base.BaseAgent.save_chat_history)
    * [stream](#spoon_ai.agents.base.BaseAgent.stream)
    * [process\_mcp\_message](#spoon_ai.agents.base.BaseAgent.process_mcp_message)
    * [shutdown](#spoon_ai.agents.base.BaseAgent.shutdown)
    * [get\_agent\_state](#spoon_ai.agents.base.BaseAgent.get_agent_state)
    * [set\_agent\_state](#spoon_ai.agents.base.BaseAgent.set_agent_state)
    * [update\_agent\_state](#spoon_ai.agents.base.BaseAgent.update_agent_state)
    * [get\_diagnostics](#spoon_ai.agents.base.BaseAgent.get_diagnostics)
* [spoon\_ai.agents.toolcall](#spoon_ai.agents.toolcall)
  * [ToolCallAgent](#spoon_ai.agents.toolcall.ToolCallAgent)
    * [tool\_choices](#spoon_ai.agents.toolcall.ToolCallAgent.tool_choices)
    * [mcp\_tools\_cache\_ttl](#spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl)
    * [run](#spoon_ai.agents.toolcall.ToolCallAgent.run)
    * [step](#spoon_ai.agents.toolcall.ToolCallAgent.step)
    * [execute\_tool](#spoon_ai.agents.toolcall.ToolCallAgent.execute_tool)
* [spoon\_ai.agents.skill\_mixin](#spoon_ai.agents.skill_mixin)
  * [SkillEnabledMixin](#spoon_ai.agents.skill_mixin.SkillEnabledMixin)
    * [activate\_skill](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.activate_skill)
    * [deactivate\_skill](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_skill)
    * [auto\_activate\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.auto_activate_skills)
    * [list\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_skills)
    * [list\_active\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_active_skills)
    * [get\_skill\_info](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_info)
    * [is\_skill\_active](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.is_skill_active)
    * [deactivate\_all\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_all_skills)
    * [get\_skill\_stats](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_stats)
* [spoon\_ai.agents](#spoon_ai.agents)
* [spoon\_ai.agents.subagents](#spoon_ai.agents.subagents)
  * [Command](#spoon_ai.agents.subagents.Command)
    * [update](#spoon_ai.agents.subagents.Command.update)
    * [goto](#spoon_ai.agents.subagents.Command.goto)
    * [resume](#spoon_ai.agents.subagents.Command.resume)
    * [is\_resume](#spoon_ai.agents.subagents.Command.is_resume)
    * [get\_decisions](#spoon_ai.agents.subagents.Command.get_decisions)
  * [SubAgentSpec](#spoon_ai.agents.subagents.SubAgentSpec)
    * [description](#spoon_ai.agents.subagents.SubAgentSpec.description)
  * [CompiledSubAgent](#spoon_ai.agents.subagents.CompiledSubAgent)
    * [runnable](#spoon_ai.agents.subagents.CompiledSubAgent.runnable)
  * [SubAgentManager](#spoon_ai.agents.subagents.SubAgentManager)
    * [\_\_init\_\_](#spoon_ai.agents.subagents.SubAgentManager.__init__)
    * [get\_subagent](#spoon_ai.agents.subagents.SubAgentManager.get_subagent)
    * [delegate\_task](#spoon_ai.agents.subagents.SubAgentManager.delegate_task)
    * [create\_task\_tool](#spoon_ai.agents.subagents.SubAgentManager.create_task_tool)
  * [SubAgentMiddleware](#spoon_ai.agents.subagents.SubAgentMiddleware)
    * [\_\_init\_\_](#spoon_ai.agents.subagents.SubAgentMiddleware.__init__)
    * [before\_agent](#spoon_ai.agents.subagents.SubAgentMiddleware.before_agent)
  * [add\_subagent\_support](#spoon_ai.agents.subagents.add_subagent_support)
  * [create\_general\_purpose\_subagent](#spoon_ai.agents.subagents.create_general_purpose_subagent)
  * [create\_compiled\_subagent](#spoon_ai.agents.subagents.create_compiled_subagent)
* [spoon\_ai.agents.spoon\_react](#spoon_ai.agents.spoon_react)
  * [create\_configured\_chatbot](#spoon_ai.agents.spoon_react.create_configured_chatbot)
  * [SpoonReactAI](#spoon_ai.agents.spoon_react.SpoonReactAI)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react.SpoonReactAI.__init__)
    * [connect](#spoon_ai.agents.spoon_react.SpoonReactAI.connect)
    * [initialize](#spoon_ai.agents.spoon_react.SpoonReactAI.initialize)
    * [run](#spoon_ai.agents.spoon_react.SpoonReactAI.run)
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
* [spoon\_ai.agents.spoon\_react\_mcp](#spoon_ai.agents.spoon_react_mcp)
  * [SpoonReactMCP](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP)
    * [list\_mcp\_tools](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP.list_mcp_tools)
* [spoon\_ai.agents.mcp\_client\_mixin](#spoon_ai.agents.mcp_client_mixin)
  * [MCPClientMixin](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin)
    * [get\_session](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session)
    * [list\_mcp\_tools](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools)
    * [call\_mcp\_tool](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool)
    * [send\_mcp\_message](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message)
    * [cleanup](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup)
    * [get\_session\_stats](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats)
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
* [spoon\_ai.agents.react](#spoon_ai.agents.react)
* [spoon\_ai.skills.models](#spoon_ai.skills.models)
  * [SkillState](#spoon_ai.skills.models.SkillState)
  * [ScriptType](#spoon_ai.skills.models.ScriptType)
  * [SkillScript](#spoon_ai.skills.models.SkillScript)
    * [validate\_source](#spoon_ai.skills.models.SkillScript.validate_source)
  * [ScriptConfig](#spoon_ai.skills.models.ScriptConfig)
    * [get\_script](#spoon_ai.skills.models.ScriptConfig.get_script)
    * [get\_activation\_scripts](#spoon_ai.skills.models.ScriptConfig.get_activation_scripts)
    * [get\_deactivation\_scripts](#spoon_ai.skills.models.ScriptConfig.get_deactivation_scripts)
  * [ScriptResult](#spoon_ai.skills.models.ScriptResult)
    * [to\_string](#spoon_ai.skills.models.ScriptResult.to_string)
  * [SkillTrigger](#spoon_ai.skills.models.SkillTrigger)
  * [SkillParameter](#spoon_ai.skills.models.SkillParameter)
  * [SkillPrerequisite](#spoon_ai.skills.models.SkillPrerequisite)
  * [SkillMetadata](#spoon_ai.skills.models.SkillMetadata)
    * [has\_scripts](#spoon_ai.skills.models.SkillMetadata.has_scripts)
    * [scripts\_enabled](#spoon_ai.skills.models.SkillMetadata.scripts_enabled)
  * [Skill](#spoon_ai.skills.models.Skill)
    * [name](#spoon_ai.skills.models.Skill.name)
    * [description](#spoon_ai.skills.models.Skill.description)
    * [get\_prompt\_injection](#spoon_ai.skills.models.Skill.get_prompt_injection)
* [spoon\_ai.skills.loader](#spoon_ai.skills.loader)
  * [SkillLoader](#spoon_ai.skills.loader.SkillLoader)
    * [\_\_init\_\_](#spoon_ai.skills.loader.SkillLoader.__init__)
    * [paths](#spoon_ai.skills.loader.SkillLoader.paths)
    * [add\_path](#spoon_ai.skills.loader.SkillLoader.add_path)
    * [discover](#spoon_ai.skills.loader.SkillLoader.discover)
    * [parse](#spoon_ai.skills.loader.SkillLoader.parse)
    * [load\_tools](#spoon_ai.skills.loader.SkillLoader.load_tools)
    * [load](#spoon_ai.skills.loader.SkillLoader.load)
    * [load\_all](#spoon_ai.skills.loader.SkillLoader.load_all)
    * [get\_skill](#spoon_ai.skills.loader.SkillLoader.get_skill)
    * [get\_tools](#spoon_ai.skills.loader.SkillLoader.get_tools)
    * [clear\_cache](#spoon_ai.skills.loader.SkillLoader.clear_cache)
    * [reload](#spoon_ai.skills.loader.SkillLoader.reload)
* [spoon\_ai.skills](#spoon_ai.skills)
* [spoon\_ai.skills.executor](#spoon_ai.skills.executor)
  * [MAX\_OUTPUT\_SIZE](#spoon_ai.skills.executor.MAX_OUTPUT_SIZE)
  * [ScriptExecutionError](#spoon_ai.skills.executor.ScriptExecutionError)
  * [ScriptExecutor](#spoon_ai.skills.executor.ScriptExecutor)
    * [\_\_init\_\_](#spoon_ai.skills.executor.ScriptExecutor.__init__)
    * [is\_available](#spoon_ai.skills.executor.ScriptExecutor.is_available)
    * [get\_interpreter](#spoon_ai.skills.executor.ScriptExecutor.get_interpreter)
    * [execute](#spoon_ai.skills.executor.ScriptExecutor.execute)
    * [get\_stats](#spoon_ai.skills.executor.ScriptExecutor.get_stats)
    * [set\_enabled](#spoon_ai.skills.executor.ScriptExecutor.set_enabled)
  * [get\_executor](#spoon_ai.skills.executor.get_executor)
  * [configure\_executor](#spoon_ai.skills.executor.configure_executor)
  * [set\_scripts\_enabled](#spoon_ai.skills.executor.set_scripts_enabled)
* [spoon\_ai.skills.registry](#spoon_ai.skills.registry)
  * [SkillRegistry](#spoon_ai.skills.registry.SkillRegistry)
    * [register](#spoon_ai.skills.registry.SkillRegistry.register)
    * [unregister](#spoon_ai.skills.registry.SkillRegistry.unregister)
    * [get](#spoon_ai.skills.registry.SkillRegistry.get)
    * [list\_names](#spoon_ai.skills.registry.SkillRegistry.list_names)
    * [list\_skills](#spoon_ai.skills.registry.SkillRegistry.list_skills)
    * [find\_by\_tag](#spoon_ai.skills.registry.SkillRegistry.find_by_tag)
    * [find\_by\_keyword](#spoon_ai.skills.registry.SkillRegistry.find_by_keyword)
    * [find\_by\_pattern](#spoon_ai.skills.registry.SkillRegistry.find_by_pattern)
    * [find\_by\_intent](#spoon_ai.skills.registry.SkillRegistry.find_by_intent)
    * [find\_all\_matching](#spoon_ai.skills.registry.SkillRegistry.find_all_matching)
    * [get\_intent\_categories](#spoon_ai.skills.registry.SkillRegistry.get_intent_categories)
* [spoon\_ai.skills.script\_tool](#spoon_ai.skills.script_tool)
  * [ScriptTool](#spoon_ai.skills.script_tool.ScriptTool)
    * [\_\_init\_\_](#spoon_ai.skills.script_tool.ScriptTool.__init__)
    * [execute](#spoon_ai.skills.script_tool.ScriptTool.execute)
    * [to\_param](#spoon_ai.skills.script_tool.ScriptTool.to_param)
  * [create\_script\_tools](#spoon_ai.skills.script_tool.create_script_tools)
* [spoon\_ai.skills.manager](#spoon_ai.skills.manager)
  * [SkillManager](#spoon_ai.skills.manager.SkillManager)
    * [\_\_init\_\_](#spoon_ai.skills.manager.SkillManager.__init__)
    * [discover](#spoon_ai.skills.manager.SkillManager.discover)
    * [add\_skill\_path](#spoon_ai.skills.manager.SkillManager.add_skill_path)
    * [register](#spoon_ai.skills.manager.SkillManager.register)
    * [unregister](#spoon_ai.skills.manager.SkillManager.unregister)
    * [get](#spoon_ai.skills.manager.SkillManager.get)
    * [list](#spoon_ai.skills.manager.SkillManager.list)
    * [list\_skills](#spoon_ai.skills.manager.SkillManager.list_skills)
    * [match\_triggers](#spoon_ai.skills.manager.SkillManager.match_triggers)
    * [match\_intent](#spoon_ai.skills.manager.SkillManager.match_intent)
    * [find\_matching\_skills](#spoon_ai.skills.manager.SkillManager.find_matching_skills)
    * [activate](#spoon_ai.skills.manager.SkillManager.activate)
    * [deactivate](#spoon_ai.skills.manager.SkillManager.deactivate)
    * [deactivate\_all](#spoon_ai.skills.manager.SkillManager.deactivate_all)
    * [get\_active\_context](#spoon_ai.skills.manager.SkillManager.get_active_context)
    * [get\_active\_tools](#spoon_ai.skills.manager.SkillManager.get_active_tools)
    * [get\_active\_skill\_names](#spoon_ai.skills.manager.SkillManager.get_active_skill_names)
    * [is\_active](#spoon_ai.skills.manager.SkillManager.is_active)
    * [execute\_script](#spoon_ai.skills.manager.SkillManager.execute_script)
    * [set\_scripts\_enabled](#spoon_ai.skills.manager.SkillManager.set_scripts_enabled)
    * [get\_script\_tools](#spoon_ai.skills.manager.SkillManager.get_script_tools)
    * [get\_skill\_info](#spoon_ai.skills.manager.SkillManager.get_skill_info)
    * [get\_stats](#spoon_ai.skills.manager.SkillManager.get_stats)
* [spoon\_ai.runnables.base](#spoon_ai.runnables.base)
  * [log\_patches\_from\_events](#spoon_ai.runnables.base.log_patches_from_events)
  * [Runnable](#spoon_ai.runnables.base.Runnable)
    * [astream\_log](#spoon_ai.runnables.base.Runnable.astream_log)
    * [astream\_events](#spoon_ai.runnables.base.Runnable.astream_events)
* [spoon\_ai.runnables.events](#spoon_ai.runnables.events)
  * [StreamEventBuilder](#spoon_ai.runnables.events.StreamEventBuilder)
    * [chain\_start](#spoon_ai.runnables.events.StreamEventBuilder.chain_start)
    * [chain\_stream](#spoon_ai.runnables.events.StreamEventBuilder.chain_stream)
    * [chain\_end](#spoon_ai.runnables.events.StreamEventBuilder.chain_end)
    * [chain\_error](#spoon_ai.runnables.events.StreamEventBuilder.chain_error)
    * [llm\_stream](#spoon_ai.runnables.events.StreamEventBuilder.llm_stream)
* [spoon\_ai.runnables](#spoon_ai.runnables)
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
* [spoon\_ai.llm.factory](#spoon_ai.llm.factory)
  * [LLMFactory](#spoon_ai.llm.factory.LLMFactory)
    * [register](#spoon_ai.llm.factory.LLMFactory.register)
    * [create](#spoon_ai.llm.factory.LLMFactory.create)
* [spoon\_ai.llm.base](#spoon_ai.llm.base)
  * [LLMBase](#spoon_ai.llm.base.LLMBase)
    * [\_\_init\_\_](#spoon_ai.llm.base.LLMBase.__init__)
    * [chat](#spoon_ai.llm.base.LLMBase.chat)
    * [completion](#spoon_ai.llm.base.LLMBase.completion)
    * [chat\_with\_tools](#spoon_ai.llm.base.LLMBase.chat_with_tools)
    * [generate\_image](#spoon_ai.llm.base.LLMBase.generate_image)
    * [reset\_output\_handler](#spoon_ai.llm.base.LLMBase.reset_output_handler)
* [spoon\_ai.llm.cache](#spoon_ai.llm.cache)
  * [LLMResponseCache](#spoon_ai.llm.cache.LLMResponseCache)
    * [\_\_init\_\_](#spoon_ai.llm.cache.LLMResponseCache.__init__)
    * [get](#spoon_ai.llm.cache.LLMResponseCache.get)
    * [set](#spoon_ai.llm.cache.LLMResponseCache.set)
    * [clear](#spoon_ai.llm.cache.LLMResponseCache.clear)
    * [get\_stats](#spoon_ai.llm.cache.LLMResponseCache.get_stats)
  * [CachedLLMManager](#spoon_ai.llm.cache.CachedLLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.cache.CachedLLMManager.__init__)
    * [chat](#spoon_ai.llm.cache.CachedLLMManager.chat)
    * [chat\_stream](#spoon_ai.llm.cache.CachedLLMManager.chat_stream)
    * [clear\_cache](#spoon_ai.llm.cache.CachedLLMManager.clear_cache)
    * [get\_cache\_stats](#spoon_ai.llm.cache.CachedLLMManager.get_cache_stats)
* [spoon\_ai.llm.response\_normalizer](#spoon_ai.llm.response_normalizer)
  * [ResponseNormalizer](#spoon_ai.llm.response_normalizer.ResponseNormalizer)
    * [normalize\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response)
    * [validate\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response)
    * [add\_provider\_mapping](#spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping)
    * [get\_supported\_providers](#spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers)
  * [get\_response\_normalizer](#spoon_ai.llm.response_normalizer.get_response_normalizer)
* [spoon\_ai.llm](#spoon_ai.llm)
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
* [spoon\_ai.llm.providers.openai\_compatible\_provider](#spoon_ai.llm.providers.openai_compatible_provider)
  * [MAX\_INLINE\_FILE\_SIZE](#spoon_ai.llm.providers.openai_compatible_provider.MAX_INLINE_FILE_SIZE)
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
* [spoon\_ai.llm.providers](#spoon_ai.llm.providers)
* [spoon\_ai.llm.providers.openrouter\_provider](#spoon_ai.llm.providers.openrouter_provider)
  * [OpenRouterProvider](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider)
    * [get\_additional\_headers](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_additional_headers)
    * [get\_metadata](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_metadata)
* [spoon\_ai.llm.providers.openai\_provider](#spoon_ai.llm.providers.openai_provider)
  * [OpenAIProvider](#spoon_ai.llm.providers.openai_provider.OpenAIProvider)
    * [get\_metadata](#spoon_ai.llm.providers.openai_provider.OpenAIProvider.get_metadata)
* [spoon\_ai.llm.providers.ollama\_provider](#spoon_ai.llm.providers.ollama_provider)
  * [OllamaProvider](#spoon_ai.llm.providers.ollama_provider.OllamaProvider)
* [spoon\_ai.llm.providers.deepseek\_provider](#spoon_ai.llm.providers.deepseek_provider)
  * [DeepSeekProvider](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider)
    * [get\_metadata](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider.get_metadata)
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
* [spoon\_ai.identity](#spoon_ai.identity)
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
* [spoon\_ai.identity.did\_resolver](#spoon_ai.identity.did_resolver)
  * [DIDResolver](#spoon_ai.identity.did_resolver.DIDResolver)
    * [resolve](#spoon_ai.identity.did_resolver.DIDResolver.resolve)
    * [resolve\_metadata\_only](#spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only)
    * [verify\_did](#spoon_ai.identity.did_resolver.DIDResolver.verify_did)
* [spoon\_ai.identity.erc8004\_abi](#spoon_ai.identity.erc8004_abi)
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
* [spoon\_ai.tools.x402\_payment](#spoon_ai.tools.x402_payment)
  * [X402PaymentHeaderTool](#spoon_ai.tools.x402_payment.X402PaymentHeaderTool)
  * [X402PaywalledRequestTool](#spoon_ai.tools.x402_payment.X402PaywalledRequestTool)
* [spoon\_ai.tools.rag\_tools](#spoon_ai.tools.rag_tools)
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
* [spoon\_ai.tools.base](#spoon_ai.tools.base)
  * [reset\_secrets\_initialization](#spoon_ai.tools.base.reset_secrets_initialization)
  * [ToolFailure](#spoon_ai.tools.base.ToolFailure)
* [spoon\_ai.tools.mcp\_tool](#spoon_ai.tools.mcp_tool)
  * [MCPTool](#spoon_ai.tools.mcp_tool.MCPTool)
    * [call\_mcp\_tool](#spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool)
    * [list\_available\_tools](#spoon_ai.tools.mcp_tool.MCPTool.list_available_tools)
* [spoon\_ai.tools](#spoon_ai.tools)
* [spoon\_ai.tools.hitl](#spoon_ai.tools.hitl)
  * [InterruptOnConfig](#spoon_ai.tools.hitl.InterruptOnConfig)
  * [ApprovalDecision](#spoon_ai.tools.hitl.ApprovalDecision)
  * [DecisionInput](#spoon_ai.tools.hitl.DecisionInput)
    * [args](#spoon_ai.tools.hitl.DecisionInput.args)
    * [reason](#spoon_ai.tools.hitl.DecisionInput.reason)
    * [from\_dict](#spoon_ai.tools.hitl.DecisionInput.from_dict)
  * [ActionRequest](#spoon_ai.tools.hitl.ActionRequest)
    * [name](#spoon_ai.tools.hitl.ActionRequest.name)
    * [args](#spoon_ai.tools.hitl.ActionRequest.args)
    * [id](#spoon_ai.tools.hitl.ActionRequest.id)
    * [to\_dict](#spoon_ai.tools.hitl.ActionRequest.to_dict)
  * [ApprovalRequest](#spoon_ai.tools.hitl.ApprovalRequest)
    * [from\_action\_request](#spoon_ai.tools.hitl.ApprovalRequest.from_action_request)
  * [ReviewConfig](#spoon_ai.tools.hitl.ReviewConfig)
    * [to\_dict](#spoon_ai.tools.hitl.ReviewConfig.to_dict)
  * [InterruptValue](#spoon_ai.tools.hitl.InterruptValue)
    * [\_\_len\_\_](#spoon_ai.tools.hitl.InterruptValue.__len__)
    * [\_\_iter\_\_](#spoon_ai.tools.hitl.InterruptValue.__iter__)
    * [\_\_getitem\_\_](#spoon_ai.tools.hitl.InterruptValue.__getitem__)
    * [to\_dict](#spoon_ai.tools.hitl.InterruptValue.to_dict)
  * [InterruptInfo](#spoon_ai.tools.hitl.InterruptInfo)
    * [to\_dict](#spoon_ai.tools.hitl.InterruptInfo.to_dict)
  * [ResumeData](#spoon_ai.tools.hitl.ResumeData)
    * [from\_dict](#spoon_ai.tools.hitl.ResumeData.from_dict)
  * [HITLInterrupt](#spoon_ai.tools.hitl.HITLInterrupt)
  * [ParsedInterruptConfig](#spoon_ai.tools.hitl.ParsedInterruptConfig)
    * [from\_config](#spoon_ai.tools.hitl.ParsedInterruptConfig.from_config)
    * [get\_description](#spoon_ai.tools.hitl.ParsedInterruptConfig.get_description)
  * [HITLManager](#spoon_ai.tools.hitl.HITLManager)
    * [\_\_init\_\_](#spoon_ai.tools.hitl.HITLManager.__init__)
    * [should\_interrupt](#spoon_ai.tools.hitl.HITLManager.should_interrupt)
    * [get\_config](#spoon_ai.tools.hitl.HITLManager.get_config)
    * [add\_pending\_action](#spoon_ai.tools.hitl.HITLManager.add_pending_action)
    * [has\_pending\_actions](#spoon_ai.tools.hitl.HITLManager.has_pending_actions)
    * [create\_interrupt](#spoon_ai.tools.hitl.HITLManager.create_interrupt)
    * [clear\_pending](#spoon_ai.tools.hitl.HITLManager.clear_pending)
    * [apply\_decisions](#spoon_ai.tools.hitl.HITLManager.apply_decisions)
  * [HumanInTheLoopMiddleware](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware)
    * [\_\_init\_\_](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.__init__)
    * [set\_resume\_data](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.set_resume_data)
    * [before\_agent](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.before_agent)
    * [awrap\_model\_call](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.awrap_model_call)
    * [get\_interrupt\_config](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.get_interrupt_config)
  * [create\_hitl\_middleware](#spoon_ai.tools.hitl.create_hitl_middleware)
  * [format\_tool\_call\_description](#spoon_ai.tools.hitl.format_tool_call_description)
* [spoon\_ai.tools.tool\_manager](#spoon_ai.tools.tool_manager)
  * [ToolManager](#spoon_ai.tools.tool_manager.ToolManager)
    * [reindex](#spoon_ai.tools.tool_manager.ToolManager.reindex)
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

<a id="spoon_ai"></a>

# Module `spoon_ai`

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

<a id="spoon_ai.graph.cache"></a>

# Module `spoon_ai.graph.cache`

Cache System for Graph Workflows.

Provides caching for node outputs in graph workflows to avoid redundant
computation and speed up execution.

Types of caching:
1. Node-level caching - caches node outputs based on inputs
2. In-memory and persistent (SQLite) backends

Compatible with LangGraph BaseCache interface.

Usage:
    from spoon_ai.graph.cache import InMemoryCache, SQLiteCache

    # In-memory cache (for testing/short sessions)
    cache = InMemoryCache()

    # SQLite cache (persistent across sessions)
    cache = SQLiteCache("cache.db")

    # Use with graph
    graph = StateGraph(...)
    compiled = graph.compile(cache=cache)

<a id="spoon_ai.graph.cache.compute_cache_key"></a>

#### `compute_cache_key`

```python
def compute_cache_key(node_name: str,
                      inputs: Dict[str, Any],
                      config: Optional[Dict[str, Any]] = None) -> str
```

Compute a cache key from node name and inputs.

**Arguments**:

- `node_name` - Name of the node
- `inputs` - Input values to the node
- `config` - Optional configuration
  

**Returns**:

  SHA256 hash as cache key

<a id="spoon_ai.graph.cache.CacheEntry"></a>

## `CacheEntry` Objects

```python
class CacheEntry()
```

A cached value with metadata.

<a id="spoon_ai.graph.cache.CacheEntry.is_expired"></a>

#### `is_expired`

```python
def is_expired() -> bool
```

Check if cache entry has expired.

<a id="spoon_ai.graph.cache.CacheEntry.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Serialize to dictionary.

<a id="spoon_ai.graph.cache.CacheEntry.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "CacheEntry"
```

Deserialize from dictionary.

<a id="spoon_ai.graph.cache.BaseCache"></a>

## `BaseCache` Objects

```python
class BaseCache(ABC)
```

Abstract base class for graph caches.

Compatible with LangGraph BaseCache interface.

<a id="spoon_ai.graph.cache.BaseCache.get"></a>

#### `get`

```python
@abstractmethod
def get(key: str) -> Optional[Any]
```

Get a cached value by key.

**Arguments**:

- `key` - Cache key
  

**Returns**:

  Cached value or None if not found/expired

<a id="spoon_ai.graph.cache.BaseCache.set"></a>

#### `set`

```python
@abstractmethod
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set a cached value.

**Arguments**:

- `key` - Cache key
- `value` - Value to cache
- `node_name` - Name of the node that produced this value
- `ttl_seconds` - Time-to-live in seconds (None = no expiry)
- `metadata` - Optional metadata

<a id="spoon_ai.graph.cache.BaseCache.delete"></a>

#### `delete`

```python
@abstractmethod
def delete(key: str) -> bool
```

Delete a cached value.

**Arguments**:

- `key` - Cache key
  

**Returns**:

  True if deleted, False if not found

<a id="spoon_ai.graph.cache.BaseCache.clear"></a>

#### `clear`

```python
@abstractmethod
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.BaseCache.get_or_compute"></a>

#### `get_or_compute`

```python
def get_or_compute(key: str,
                   compute_fn: callable,
                   node_name: str = "",
                   ttl_seconds: Optional[int] = None) -> Tuple[Any, bool]
```

Get cached value or compute and cache it.

**Arguments**:

- `key` - Cache key
- `compute_fn` - Function to compute value if not cached
- `node_name` - Name of the node
- `ttl_seconds` - Time-to-live for cached value
  

**Returns**:

  Tuple of (value, was_cached)

<a id="spoon_ai.graph.cache.InMemoryCache"></a>

## `InMemoryCache` Objects

```python
class InMemoryCache(BaseCache)
```

In-memory cache implementation.

Fast but not persistent across sessions. Suitable for:
- Testing
- Short-running workflows
- When persistence is not needed

<a id="spoon_ai.graph.cache.InMemoryCache.__init__"></a>

#### `__init__`

```python
def __init__(max_entries: int = 1000,
             default_ttl_seconds: Optional[int] = None)
```

Initialize in-memory cache.

**Arguments**:

- `max_entries` - Maximum number of entries to keep
- `default_ttl_seconds` - Default TTL for entries (None = no expiry)

<a id="spoon_ai.graph.cache.InMemoryCache.get"></a>

#### `get`

```python
def get(key: str) -> Optional[Any]
```

Get cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.set"></a>

#### `set`

```python
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.delete"></a>

#### `delete`

```python
def delete(key: str) -> bool
```

Delete cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.InMemoryCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

<a id="spoon_ai.graph.cache.SQLiteCache"></a>

## `SQLiteCache` Objects

```python
class SQLiteCache(BaseCache)
```

SQLite-based persistent cache.

Persistent across sessions. Suitable for:
- Production use
- Long-running workflows
- When you want to reuse cached results

<a id="spoon_ai.graph.cache.SQLiteCache.__init__"></a>

#### `__init__`

```python
def __init__(db_path: str = "graph_cache.db",
             default_ttl_seconds: Optional[int] = None,
             max_entries: Optional[int] = None)
```

Initialize SQLite cache.

**Arguments**:

- `db_path` - Path to SQLite database file
- `default_ttl_seconds` - Default TTL for entries (None = no expiry)
- `max_entries` - Maximum entries to keep (None = unlimited)

<a id="spoon_ai.graph.cache.SQLiteCache.get"></a>

#### `get`

```python
def get(key: str) -> Optional[Any]
```

Get cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.set"></a>

#### `set`

```python
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.delete"></a>

#### `delete`

```python
def delete(key: str) -> bool
```

Delete cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.SQLiteCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

<a id="spoon_ai.graph.cache.create_memory_cache"></a>

#### `create_memory_cache`

```python
def create_memory_cache(
        max_entries: int = 1000,
        default_ttl_seconds: Optional[int] = None) -> InMemoryCache
```

Create an in-memory cache.

**Arguments**:

- `max_entries` - Maximum entries to keep
- `default_ttl_seconds` - Default TTL
  

**Returns**:

  Configured InMemoryCache

<a id="spoon_ai.graph.cache.create_sqlite_cache"></a>

#### `create_sqlite_cache`

```python
def create_sqlite_cache(db_path: str = "graph_cache.db",
                        default_ttl_seconds: Optional[int] = None,
                        max_entries: Optional[int] = None) -> SQLiteCache
```

Create a SQLite cache.

**Arguments**:

- `db_path` - Path to database file
- `default_ttl_seconds` - Default TTL
- `max_entries` - Maximum entries
  

**Returns**:

  Configured SQLiteCache

<a id="spoon_ai.graph"></a>

# Module `spoon_ai.graph`

spoon_ai.graph package

Public facade for the graph engine. Import from here.

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

<a id="spoon_ai.graph.engine"></a>

# Module `spoon_ai.graph.engine`

Graph engine: StateGraph, CompiledGraph, and interrupt API implementation.

<a id="spoon_ai.graph.engine.create_multimodal_message"></a>

#### `create_multimodal_message`

```python
def create_multimodal_message(
        role: str,
        text: str,
        image_url: Optional[str] = None,
        image_data: Optional[str] = None,
        image_media_type: str = "image/png",
        detail: Literal["auto", "low", "high"] = "auto") -> Message
```

Create a multimodal message for use in graph state.

Supports both URL-based and base64-encoded images.

**Arguments**:

- `role` - Message role (user, assistant, system)
- `text` - Text content
- `image_url` - URL of the image (including data URLs)
- `image_data` - Base64-encoded image data (alternative to image_url)
- `image_media_type` - MIME type for base64 images
- `detail` - Image detail level (auto, low, high)
  

**Returns**:

- `Message` - A multimodal message ready for graph state
  

**Example**:

    ```python
    # In a graph node function
    async def analyze_image(state: State) -> dict:
        msg = create_multimodal_message(
            "user",
            "Analyze this chart",
            image_url="https://example.com/chart.png"
        )
        return {"messages": [msg]}
    ```

<a id="spoon_ai.graph.engine.create_vision_user_message"></a>

#### `create_vision_user_message`

```python
def create_vision_user_message(text: str, images: List[Dict[str,
                                                            str]]) -> Message
```

Create a user message with multiple images.

**Arguments**:

- `text` - Text prompt
- `images` - List of image specs, each with either:
  - &#123;"url": "https://..."&#125; for URL-based images
  - &#123;"data": "&lt;base64&gt;", "media_type": "image/png"&#125; for base64 images
  

**Returns**:

- `Message` - A multimodal message with multiple images
  

**Example**:

    ```python
    msg = create_vision_user_message(
        "Compare these two charts",
        images=[
            {"url": "https://example.com/chart1.png"},
            {"url": "https://example.com/chart2.png"}
        ]
    )
    ```

<a id="spoon_ai.graph.engine.create_pdf_message"></a>

#### `create_pdf_message`

```python
def create_pdf_message(role: str,
                       text: str,
                       pdf_data: str,
                       filename: Optional[str] = None) -> Message
```

Create a message with a PDF document for use in graph state.

**Arguments**:

- `role` - Message role (user, assistant, system)
- `text` - Text content
- `pdf_data` - Base64-encoded PDF data
- `filename` - Optional filename for the PDF
  

**Returns**:

- `Message` - A multimodal message with PDF ready for graph state
  

**Example**:

    ```python
    # In a graph node function
    async def analyze_document(state: State) -> dict:
        msg = create_pdf_message(
            "user",
            "Summarize this whitepaper",
            pdf_data="<base64_encoded_pdf>",
            filename="bitcoin.pdf"
        )
        return {"messages": [msg]}
    ```

<a id="spoon_ai.graph.engine.create_document_message"></a>

#### `create_document_message`

```python
def create_document_message(role: str,
                            text: str,
                            document_data: str,
                            media_type: str = "application/pdf",
                            filename: Optional[str] = None) -> Message
```

Create a message with a document for use in graph state.

Supports various document types including PDF, text files, etc.

**Arguments**:

- `role` - Message role (user, assistant, system)
- `text` - Text content
- `document_data` - Base64-encoded document data
- `media_type` - MIME type of the document (default: application/pdf)
- `filename` - Optional filename for the document
  

**Returns**:

- `Message` - A multimodal message with document ready for graph state
  

**Example**:

    ```python
    # In a graph node function
    async def process_report(state: State) -> dict:
        msg = create_document_message(
            "user",
            "Extract key metrics from this report",
            document_data="<base64_encoded_data>",
            media_type="application/pdf",
            filename="annual_report.pdf"
        )
        return {"messages": [msg]}
    ```

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

<a id="spoon_ai.graph.exceptions"></a>

# Module `spoon_ai.graph.exceptions`

Graph engine exception definitions (public within graph package).

<a id="spoon_ai.graph.types"></a>

# Module `spoon_ai.graph.types`

Typed structures for the graph package.

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

<a id="spoon_ai.graph.decorators"></a>

# Module `spoon_ai.graph.decorators`

Decorators and executor for the graph package.

<a id="spoon_ai.graph.reducers"></a>

# Module `spoon_ai.graph.reducers`

Reducers and validators for the graph package.

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

<a id="spoon_ai.turnkey"></a>

# Module `spoon_ai.turnkey`

Turnkey client integration for SpoonAI.

Provides `Turnkey` for secure signing via Turnkey API.

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

<a id="spoon_ai.prompts.toolcall"></a>

# Module `spoon_ai.prompts.toolcall`

<a id="spoon_ai.prompts"></a>

# Module `spoon_ai.prompts`

<a id="spoon_ai.prompts.spoon_react"></a>

# Module `spoon_ai.prompts.spoon_react`

<a id="spoon_ai.neofs.models"></a>

# Module `spoon_ai.neofs.models`

Pydantic models describing NeoFS REST API payloads.

<a id="spoon_ai.neofs.models.NetworkInfo"></a>

## `NetworkInfo` Objects

```python
class NetworkInfo(BaseModel)
```

Describes network configuration fees reported by the gateway.

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

<a id="spoon_ai.neofs"></a>

# Module `spoon_ai.neofs`

NeoFS integration for Spoon Core.

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

<a id="spoon_ai.schema.ContentType"></a>

## `ContentType` Objects

```python
class ContentType(str, Enum)
```

Types of content blocks for multimodal messages

<a id="spoon_ai.schema.ContentType.IMAGE"></a>

#### `IMAGE`

Base64 encoded image data

<a id="spoon_ai.schema.ContentType.IMAGE_URL"></a>

#### `IMAGE_URL`

URL reference to image

<a id="spoon_ai.schema.ContentType.DOCUMENT"></a>

#### `DOCUMENT`

PDF and other documents (base64)

<a id="spoon_ai.schema.ContentType.FILE"></a>

#### `FILE`

File attachment (path-based)

<a id="spoon_ai.schema.ContentType.AUDIO"></a>

#### `AUDIO`

Audio content (future)

<a id="spoon_ai.schema.ImageMediaType"></a>

## `ImageMediaType` Objects

```python
class ImageMediaType(str, Enum)
```

Supported image media types

<a id="spoon_ai.schema.ImageSource"></a>

## `ImageSource` Objects

```python
class ImageSource(BaseModel)
```

Source for base64-encoded image content (Anthropic style)

<a id="spoon_ai.schema.ImageUrlSource"></a>

## `ImageUrlSource` Objects

```python
class ImageUrlSource(BaseModel)
```

Source for URL-based image content (OpenAI style)

<a id="spoon_ai.schema.TextContent"></a>

## `TextContent` Objects

```python
class TextContent(BaseModel)
```

Text content block

<a id="spoon_ai.schema.ImageContent"></a>

## `ImageContent` Objects

```python
class ImageContent(BaseModel)
```

Image content block with base64 data (Anthropic-compatible)

<a id="spoon_ai.schema.ImageUrlContent"></a>

## `ImageUrlContent` Objects

```python
class ImageUrlContent(BaseModel)
```

Image content block with URL reference (OpenAI-compatible)

<a id="spoon_ai.schema.FileContent"></a>

## `FileContent` Objects

```python
class FileContent(BaseModel)
```

File content block (path-based, for local file references)

<a id="spoon_ai.schema.DocumentSource"></a>

## `DocumentSource` Objects

```python
class DocumentSource(BaseModel)
```

Source for base64-encoded document content (PDF, etc.)

<a id="spoon_ai.schema.DocumentContent"></a>

## `DocumentContent` Objects

```python
class DocumentContent(BaseModel)
```

Document content block for PDFs and other documents (Anthropic/Gemini compatible)

Supported by:
- Anthropic Claude: Native PDF support via base64
- Gemini: Native PDF support via inline_data
- OpenAI: NOT supported (will be converted to text placeholder)

<a id="spoon_ai.schema.Message"></a>

## `Message` Objects

```python
class Message(BaseModel)
```

Represents a chat message in the conversation.

Supports both text-only and multimodal content:
- Simple text: content="Hello world"
- Multimodal: content=[TextContent(...), ImageUrlContent(...)]

<a id="spoon_ai.schema.Message.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.Message.is_multimodal"></a>

#### `is_multimodal`

```python
@property
def is_multimodal() -> bool
```

Check if this message contains multimodal content.

<a id="spoon_ai.schema.Message.text_content"></a>

#### `text_content`

```python
@property
def text_content() -> str
```

Extract text content from message (for backward compatibility).

**Returns**:

- `str` - Combined text content from all text blocks, or empty string

<a id="spoon_ai.schema.Message.has_images"></a>

#### `has_images`

```python
@property
def has_images() -> bool
```

Check if message contains any image content.

<a id="spoon_ai.schema.Message.has_documents"></a>

#### `has_documents`

```python
@property
def has_documents() -> bool
```

Check if message contains any document content (PDF, etc.).

<a id="spoon_ai.schema.Message.create_text"></a>

#### `create_text`

```python
@classmethod
def create_text(cls, role: str, text: str, **kwargs) -> "Message"
```

Create a simple text message.

**Arguments**:

- `role` - Message role (user, assistant, system, tool)
- `text` - Text content
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Text message instance

<a id="spoon_ai.schema.Message.create_multimodal"></a>

#### `create_multimodal`

```python
@classmethod
def create_multimodal(cls, role: str, content_blocks: List[ContentBlock],
                      **kwargs) -> "Message"
```

Create a multimodal message with mixed content types.

**Arguments**:

- `role` - Message role (user, assistant, system, tool)
- `content_blocks` - List of content blocks (TextContent, ImageContent, etc.)
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message instance

<a id="spoon_ai.schema.Message.create_with_image_url"></a>

#### `create_with_image_url`

```python
@classmethod
def create_with_image_url(cls,
                          role: str,
                          text: str,
                          image_url: str,
                          detail: Literal["auto", "low", "high"] = "auto",
                          **kwargs) -> "Message"
```

Create a message with text and an image URL.

**Arguments**:

- `role` - Message role
- `text` - Text content
- `image_url` - URL of the image
- `detail` - Image detail level (auto, low, high)
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and image URL

<a id="spoon_ai.schema.Message.create_with_base64_image"></a>

#### `create_with_base64_image`

```python
@classmethod
def create_with_base64_image(cls,
                             role: str,
                             text: str,
                             image_data: str,
                             media_type: str = "image/png",
                             **kwargs) -> "Message"
```

Create a message with text and a base64-encoded image.

**Arguments**:

- `role` - Message role
- `text` - Text content
- `image_data` - Base64-encoded image data
- `media_type` - Image MIME type (image/jpeg, image/png, etc.)
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and base64 image

<a id="spoon_ai.schema.Message.create_with_pdf"></a>

#### `create_with_pdf`

```python
@classmethod
def create_with_pdf(cls,
                    role: str,
                    text: str,
                    pdf_data: str,
                    filename: Optional[str] = None,
                    **kwargs) -> "Message"
```

Create a message with text and a base64-encoded PDF document.

Supported by Anthropic Claude and Gemini. OpenAI does not support PDFs.

**Arguments**:

- `role` - Message role
- `text` - Text content / question about the PDF
- `pdf_data` - Base64-encoded PDF data
- `filename` - Optional filename for display
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and PDF document

<a id="spoon_ai.schema.Message.create_with_document"></a>

#### `create_with_document`

```python
@classmethod
def create_with_document(cls,
                         role: str,
                         text: str,
                         document_data: str,
                         media_type: str = "application/pdf",
                         filename: Optional[str] = None,
                         **kwargs) -> "Message"
```

Create a message with text and a base64-encoded document.

Supported document types vary by provider:
- Anthropic: PDF
- Gemini: PDF, and many other formats
- OpenAI: NOT supported (will show placeholder)

**Arguments**:

- `role` - Message role
- `text` - Text content / question about the document
- `document_data` - Base64-encoded document data
- `media_type` - Document MIME type (default: application/pdf)
- `filename` - Optional filename for display
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and document

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

<a id="spoon_ai.middleware.todolist"></a>

# Module `spoon_ai.middleware.todolist`

TodoList Middleware - Task Planning and Progress Tracking.

Provides todo list tools to agents for structured task management:
- write_todos: Create/update todo list with tasks
- read_todos: Read current todo list state

Compatible with LangChain DeepAgents TodoListMiddleware interface.

Usage:
    from spoon_ai.middleware.todolist import TodoListMiddleware

    agent = ToolCallAgent(
        middleware=[TodoListMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.todolist.TodoStatus"></a>

## `TodoStatus` Objects

```python
class TodoStatus(str, Enum)
```

Status of a todo item.

<a id="spoon_ai.middleware.todolist.TodoItem"></a>

## `TodoItem` Objects

```python
@dataclass
class TodoItem()
```

A single todo item.

<a id="spoon_ai.middleware.todolist.TodoList"></a>

## `TodoList` Objects

```python
@dataclass
class TodoList()
```

Container for todo items.

<a id="spoon_ai.middleware.todolist.TodoList.format_display"></a>

#### `format_display`

```python
def format_display() -> str
```

Format todo list for display.

<a id="spoon_ai.middleware.todolist.WriteTodosTool"></a>

## `WriteTodosTool` Objects

```python
class WriteTodosTool(BaseTool)
```

Tool to create/update todo list.

<a id="spoon_ai.middleware.todolist.WriteTodosTool.execute"></a>

#### `execute`

```python
async def execute(todos: List[Dict[str, Any]], **kwargs) -> str
```

Update the todo list.

<a id="spoon_ai.middleware.todolist.ReadTodosTool"></a>

## `ReadTodosTool` Objects

```python
class ReadTodosTool(BaseTool)
```

Tool to read current todo list.

<a id="spoon_ai.middleware.todolist.ReadTodosTool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

Read the current todo list.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware"></a>

## `TodoListMiddleware` Objects

```python
class TodoListMiddleware(AgentMiddleware)
```

Middleware for providing todo list tools to an agent.

Provides two tools:
- write_todos: Create/update todo list
- read_todos: Read current todo list

**Example**:

    ```python
    from spoon_ai.middleware.todolist import TodoListMiddleware

    middleware = TodoListMiddleware()

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(system_prompt: Optional[str] = None,
             auto_inject_prompt: bool = True)
```

Initialize TodoList middleware.

**Arguments**:

- `system_prompt` - Optional custom system prompt override.
- `auto_inject_prompt` - Whether to auto-inject system prompt (default: True)

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.tools"></a>

#### `tools`

```python
@property
def tools() -> List[BaseTool]
```

Get todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.system_prompt"></a>

#### `system_prompt`

```python
@property
def system_prompt() -> str
```

Get system prompt for todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.todo_list"></a>

#### `todo_list`

```python
@property
def todo_list() -> TodoList
```

Get current todo list.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.get_todos_state"></a>

#### `get_todos_state`

```python
def get_todos_state() -> Dict[str, Any]
```

Get todo list as state dict (for checkpointing).

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.restore_todos_state"></a>

#### `restore_todos_state`

```python
def restore_todos_state(state: Dict[str, Any]) -> None
```

Restore todo list from state dict.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Inject system prompt for todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Restore todo list from agent state if available.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Save todo list to agent state.

<a id="spoon_ai.middleware.prompt_caching"></a>

# Module `spoon_ai.middleware.prompt_caching`

Anthropic Prompt Caching Middleware.

Adds cache_control markers to system prompts and messages for Anthropic models,
enabling prompt caching to reduce costs and latency for repeated content.

How Anthropic Prompt Caching Works:
- Content marked with cache_control: &#123;"type": "ephemeral"&#125; is cached for ~5 minutes
- Subsequent requests within the cache window reuse the cached content
- This reduces input token costs and speeds up responses
- Only works with Claude models (claude-3-*, claude-2-*, etc.)

Compatible with LangChain DeepAgents AnthropicPromptCachingMiddleware interface.

Usage:
    from spoon_ai.middleware.prompt_caching import AnthropicPromptCachingMiddleware

    agent = ToolCallAgent(
        middleware=[AnthropicPromptCachingMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.prompt_caching.is_anthropic_model"></a>

#### `is_anthropic_model`

```python
def is_anthropic_model(model_name: Optional[str]) -> bool
```

Check if a model name indicates an Anthropic Claude model.

**Arguments**:

- `model_name` - Model identifier string
  

**Returns**:

  True if this is an Anthropic model that supports caching

<a id="spoon_ai.middleware.prompt_caching.add_cache_control"></a>

#### `add_cache_control`

```python
def add_cache_control(content: Any) -> Any
```

Add cache_control marker to content.

Anthropic expects content to be a list of content blocks, where each
block can have a cache_control field.

**Arguments**:

- `content` - Content to add cache control to (string or list of blocks)
  

**Returns**:

  Content with cache_control added

<a id="spoon_ai.middleware.prompt_caching.should_cache_content"></a>

#### `should_cache_content`

```python
def should_cache_content(content: Any) -> bool
```

Determine if content is worth caching based on length.

**Arguments**:

- `content` - Content to evaluate
  

**Returns**:

  True if content should be cached

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware"></a>

## `AnthropicPromptCachingMiddleware` Objects

```python
class AnthropicPromptCachingMiddleware(AgentMiddleware)
```

Middleware that adds cache control markers for Anthropic prompt caching.

When using Anthropic Claude models, this middleware:
1. Adds cache_control to system prompts (if long enough)
2. Optionally adds cache_control to tool definitions
3. Skips caching for non-Anthropic models

Benefits:
- Reduces input token costs for repeated content
- Speeds up response time for cached prompts
- Automatic cache invalidation after ~5 minutes

**Example**:

    ```python
    from spoon_ai.middleware.prompt_caching import AnthropicPromptCachingMiddleware

    # Basic usage - caches system prompt
    middleware = AnthropicPromptCachingMiddleware()

    # With options
    middleware = AnthropicPromptCachingMiddleware(
        cache_system_prompt=True,
        cache_tools=True,
        min_cache_length=1024,
        unsupported_model_behavior="ignore",  # or "warn"
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(cache_system_prompt: bool = True,
             cache_tools: bool = True,
             min_cache_length: int = MIN_CACHE_LENGTH,
             unsupported_model_behavior: Literal["ignore", "warn"] = "ignore")
```

Initialize Anthropic prompt caching middleware.

**Arguments**:

- `cache_system_prompt` - Whether to cache the system prompt (default: True)
- `cache_tools` - Whether to cache tool definitions (default: True)
- `min_cache_length` - Minimum content length to cache (default: 1024 chars)
- `unsupported_model_behavior` - What to do for non-Anthropic models:
  - "ignore": Silently skip caching
  - "warn": Log a warning and skip caching

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Add cache control markers before model call.

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get caching statistics.

<a id="spoon_ai.middleware.prompt_caching.create_prompt_caching_middleware"></a>

#### `create_prompt_caching_middleware`

```python
def create_prompt_caching_middleware(
    cache_system_prompt: bool = True,
    cache_tools: bool = True,
    min_cache_length: int = MIN_CACHE_LENGTH,
    unsupported_model_behavior: Literal["ignore", "warn"] = "ignore"
) -> AnthropicPromptCachingMiddleware
```

Create an Anthropic prompt caching middleware.

**Arguments**:

- `cache_system_prompt` - Whether to cache system prompts
- `cache_tools` - Whether to cache tool definitions
- `min_cache_length` - Minimum content length to cache
- `unsupported_model_behavior` - How to handle non-Anthropic models
  

**Returns**:

  Configured AnthropicPromptCachingMiddleware

<a id="spoon_ai.middleware.base"></a>

# Module `spoon_ai.middleware.base`

Middleware System for Deep Agents - Plan-Act-Reflect Support

This module provides a flexible middleware architecture that enables:
1. Plan-Act-Reflect cycles for deep reasoning
2. Model call interception and modification
3. Tool call wrapping and result transformation
4. Agent lifecycle hooks for state management
5. Declarative tool and state injection

<a id="spoon_ai.middleware.base.AgentPhase"></a>

## `AgentPhase` Objects

```python
class AgentPhase(str, Enum)
```

Distinct phases in the agent execution cycle.

This enables middleware to inject logic at specific thinking stages,
supporting Plan-Act-Reflect and other deliberative patterns.

<a id="spoon_ai.middleware.base.AgentPhase.PLAN"></a>

#### `PLAN`

Initial planning phase (before action loop)

<a id="spoon_ai.middleware.base.AgentPhase.THINK"></a>

#### `THINK`

LLM reasoning phase (selecting actions)

<a id="spoon_ai.middleware.base.AgentPhase.ACT"></a>

#### `ACT`

Tool execution phase

<a id="spoon_ai.middleware.base.AgentPhase.OBSERVE"></a>

#### `OBSERVE`

Observation/result processing phase

<a id="spoon_ai.middleware.base.AgentPhase.REFLECT"></a>

#### `REFLECT`

Reflection/evaluation phase

<a id="spoon_ai.middleware.base.AgentPhase.FINISH"></a>

#### `FINISH`

Completion phase

<a id="spoon_ai.middleware.base.AgentRuntime"></a>

## `AgentRuntime` Objects

```python
@dataclass
class AgentRuntime()
```

Runtime context passed to middleware for state access.

Provides safe access to agent state, configuration, and execution context
without exposing the entire agent instance.

<a id="spoon_ai.middleware.base.AgentRuntime.get_state"></a>

#### `get_state`

```python
def get_state(key: str, default: Any = None) -> Any
```

Safely get state value.

<a id="spoon_ai.middleware.base.AgentRuntime.set_state"></a>

#### `set_state`

```python
def set_state(key: str, value: Any) -> None
```

Set state value.

<a id="spoon_ai.middleware.base.AgentRuntime.update_state"></a>

#### `update_state`

```python
def update_state(updates: Dict[str, Any]) -> None
```

Bulk update state.

<a id="spoon_ai.middleware.base.AgentRuntime.get_last_message"></a>

#### `get_last_message`

```python
def get_last_message(role: Optional[Role] = None) -> Optional[Message]
```

Get last message, optionally filtered by role.

<a id="spoon_ai.middleware.base.ModelRequest"></a>

## `ModelRequest` Objects

```python
@dataclass
class ModelRequest()
```

Request to LLM with full context.

<a id="spoon_ai.middleware.base.ModelRequest.override"></a>

#### `override`

```python
def override(**kwargs) -> "ModelRequest"
```

Create a modified copy with updated fields.

**Example**:

  new_req = request.override(
  system_prompt="Updated prompt",
  temperature=0.7
  )

<a id="spoon_ai.middleware.base.ModelRequest.append_to_system_prompt"></a>

#### `append_to_system_prompt`

```python
def append_to_system_prompt(text: str) -> "ModelRequest"
```

Convenience method to append text to system prompt.

<a id="spoon_ai.middleware.base.ModelRequest.add_tool"></a>

#### `add_tool`

```python
def add_tool(tool: Union[BaseTool, dict]) -> "ModelRequest"
```

Add a tool to the request.

<a id="spoon_ai.middleware.base.ModelResponse"></a>

## `ModelResponse` Objects

```python
@dataclass
class ModelResponse()
```

Response from LLM.

<a id="spoon_ai.middleware.base.ToolCallRequest"></a>

## `ToolCallRequest` Objects

```python
@dataclass
class ToolCallRequest()
```

Request to execute a tool.

<a id="spoon_ai.middleware.base.ToolCallResult"></a>

## `ToolCallResult` Objects

```python
@dataclass
class ToolCallResult()
```

Result of tool execution.

<a id="spoon_ai.middleware.base.ToolCallResult.success"></a>

#### `success`

```python
@property
def success() -> bool
```

Check if tool call was successful.

<a id="spoon_ai.middleware.base.ToolCallResult.from_string"></a>

#### `from_string`

```python
@staticmethod
def from_string(output: str) -> "ToolCallResult"
```

Create result from simple string output.

<a id="spoon_ai.middleware.base.ToolCallResult.from_error"></a>

#### `from_error`

```python
@staticmethod
def from_error(error: str) -> "ToolCallResult"
```

Create error result.

<a id="spoon_ai.middleware.base.PhaseHook"></a>

## `PhaseHook` Objects

```python
class PhaseHook(Protocol)
```

Protocol for phase-specific hooks.

Middleware can implement phase hooks to inject logic at specific
points in the agent's execution cycle (Plan, Act, Reflect, etc.)

<a id="spoon_ai.middleware.base.PhaseHook.__call__"></a>

#### `__call__`

```python
def __call__(runtime: AgentRuntime,
             phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Execute phase hook.

**Arguments**:

- `runtime` - Agent runtime context
- `phase_data` - Phase-specific data (e.g., plan, observations, reflections)
  

**Returns**:

  Optional state updates to merge into agent state

<a id="spoon_ai.middleware.base.AgentMiddleware"></a>

## `AgentMiddleware` Objects

```python
class AgentMiddleware(ABC)
```

Base class for agent middleware with Plan-Act-Reflect support.

Middleware can:
1. Inject tools and extend agent capabilities
2. Modify system prompts
3. Intercept and transform model calls
4. Wrap tool executions
5. Hook into agent lifecycle events
6. Implement Plan-Act-Reflect phases

**Example**:

  class TaskTrackingMiddleware(AgentMiddleware):
  tools = [create_todo_tool(), update_todo_tool()]
  system_prompt = "You track tasks using a todo list."
  
  def on_plan_phase(self, runtime, phase_data):
  # Initialize task list before action loop
  return &#123;"todos": []&#125;
  
  def on_reflect_phase(self, runtime, phase_data):
  # Evaluate progress and update tasks
  return None

<a id="spoon_ai.middleware.base.AgentMiddleware.__init__"></a>

#### `__init__`

```python
def __init__()
```

Initialize middleware with instance-specific phase hooks registry.

<a id="spoon_ai.middleware.base.AgentMiddleware.wrap_model_call"></a>

#### `wrap_model_call`

```python
def wrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Intercept LLM call (synchronous).

Override to modify requests/responses or inject side effects.

**Arguments**:

- `request` - Model request with full context
- `handler` - Next handler in the middleware chain
  

**Returns**:

  Model response (potentially modified)
  

**Example**:

  def wrap_model_call(self, request, handler):
  # Log request
  logger.info(f"Calling model with &#123;len(request.messages)&#125; messages")
  
  # Modify request
  if request.phase == AgentPhase.PLAN:
  request = request.append_to_system_prompt(
  "Create a detailed step-by-step plan."
  )
  
  # Execute
  response = handler(request)
  
  # Post-process response
  if request.phase == AgentPhase.REFLECT:
  self._store_reflection(response.content)
  
  return response

<a id="spoon_ai.middleware.base.AgentMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Intercept LLM call (asynchronous).

IMPORTANT: In async pipelines, override this method instead of wrap_model_call.
If you override wrap_model_call, the handler will be async and return a coroutine.

Default implementation: pass through to handler.

<a id="spoon_ai.middleware.base.AgentMiddleware.wrap_tool_call"></a>

#### `wrap_tool_call`

```python
def wrap_tool_call(
        request: ToolCallRequest,
        handler: Callable[[ToolCallRequest],
                          ToolCallResult]) -> ToolCallResult
```

Intercept tool execution (synchronous).

Override to:
- Log tool usage
- Modify tool arguments
- Transform tool results
- Implement approval flows (HITL)
- Handle large results (save to filesystem)

**Arguments**:

- `request` - Tool call request
- `handler` - Next handler in the middleware chain
  

**Returns**:

  Tool call result (potentially modified)
  

**Example**:

  def wrap_tool_call(self, request, handler):
  # Approval for dangerous tools
  if request.tool_name in self.require_approval:
  if not self._get_approval(request):
  return ToolCallResult.from_error("User rejected tool call")
  
  # Execute
  result = handler(request)
  
  # Handle large results
  if len(result.output) &gt; 20000:
  path = self._save_to_file(result.output)
  return ToolCallResult(
  output=f"Result saved to &#123;path&#125; (too large to display)",
- `metadata=&#123;"saved_path"` - path&#125;
  )
  
  return result

<a id="spoon_ai.middleware.base.AgentMiddleware.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(
        request: ToolCallRequest,
        handler: Callable[[ToolCallRequest],
                          ToolCallResult]) -> ToolCallResult
```

Intercept tool execution (asynchronous).

Default implementation delegates to sync version and handles async handlers.

<a id="spoon_ai.middleware.base.AgentMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Called before agent starts processing.

Use for:
- State initialization
- Message preprocessing
- Context setup

**Arguments**:

- `state` - Current agent state
- `runtime` - Runtime context
  

**Returns**:

  Optional state updates to merge
  

**Example**:

  def before_agent(self, state, runtime):
  # Initialize planning state
  if "plan" not in state:
  return &#123;"plan": None, "plan_steps": []&#125;
  return None

<a id="spoon_ai.middleware.base.AgentMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Called after agent finishes processing.

Use for:
- State cleanup
- Result post-processing
- Logging/metrics

**Arguments**:

- `state` - Current agent state
- `runtime` - Runtime context
  

**Returns**:

  Optional state updates to merge

<a id="spoon_ai.middleware.base.AgentMiddleware.on_plan_phase"></a>

#### `on_plan_phase`

```python
def on_plan_phase(runtime: AgentRuntime,
                  phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during PLAN phase (before action loop).

Override to implement planning logic:
- Generate initial plan from user request
- Break down complex tasks
- Set up execution strategy

**Arguments**:

- `runtime` - Runtime context with user message
- `phase_data` - Phase-specific data (may contain previous plan)
  

**Returns**:

  State updates (e.g., &#123;"plan": plan_object, "steps": [...]&#125;)
  

**Example**:

  def on_plan_phase(self, runtime, phase_data):
  user_request = runtime.get_last_message(Role.USER)
  plan = self._create_plan(user_request.content)
  return &#123;
- `"plan"` - plan,
- `"plan_steps"` - plan.steps,
- `"plan_created_at"` - datetime.now().isoformat()
  &#125;

<a id="spoon_ai.middleware.base.AgentMiddleware.on_think_phase"></a>

#### `on_think_phase`

```python
def on_think_phase(runtime: AgentRuntime,
                   phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during THINK phase (before LLM reasoning).

Override to:
- Inject planning context into prompts
- Filter available tools based on plan
- Add think-aloud prompts

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (may contain current plan step)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.on_act_phase"></a>

#### `on_act_phase`

```python
def on_act_phase(runtime: AgentRuntime,
                 phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during ACT phase (before tool execution).

Override to:
- Validate actions against plan
- Log action decisions
- Update plan progress

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (contains selected tool calls)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.on_observe_phase"></a>

#### `on_observe_phase`

```python
def on_observe_phase(runtime: AgentRuntime,
                     phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during OBSERVE phase (after tool execution).

Override to:
- Process tool results
- Update world model
- Extract key observations

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (contains tool results)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.on_reflect_phase"></a>

#### `on_reflect_phase`

```python
def on_reflect_phase(runtime: AgentRuntime,
                     phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during REFLECT phase (after N steps or on completion).

Override to:
- Evaluate progress against plan
- Decide if plan needs revision
- Identify stuck states
- Trigger replanning

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (progress, observations, current plan)
  

**Returns**:

  State updates (e.g., &#123;"plan": revised_plan, "needs_replan": False&#125;)
  

**Example**:

  def on_reflect_phase(self, runtime, phase_data):
  plan = runtime.get_state("plan")
  progress = phase_data.get("progress", &#123;&#125;)
  
  if not self._is_making_progress(progress):
  new_plan = self._revise_plan(plan, progress)
  return &#123;
- `"plan"` - new_plan,
- `"plan_revision"` - runtime.get_state("plan_revision", 0) + 1
  &#125;
  
  return None

<a id="spoon_ai.middleware.base.AgentMiddleware.on_finish_phase"></a>

#### `on_finish_phase`

```python
def on_finish_phase(runtime: AgentRuntime,
                    phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during FINISH phase (before agent returns).

Override to:
- Validate completion
- Generate final report
- Clean up temporary state

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (final result, statistics)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.register_phase_hook"></a>

#### `register_phase_hook`

```python
def register_phase_hook(phase: AgentPhase, hook: PhaseHook) -> None
```

Register a custom phase hook dynamically.

**Arguments**:

- `phase` - Target phase
- `hook` - Callable hook function

<a id="spoon_ai.middleware.base.AgentMiddleware.get_phase_hook"></a>

#### `get_phase_hook`

```python
def get_phase_hook(phase: AgentPhase) -> Optional[PhaseHook]
```

Get registered hook for a phase.

Returns the method (on_plan_phase, etc.) or custom registered hook.

<a id="spoon_ai.middleware.base.MiddlewarePipeline"></a>

## `MiddlewarePipeline` Objects

```python
class MiddlewarePipeline()
```

Composes multiple middleware into an execution pipeline.

Handles:
- Onion wrapping of model/tool calls
- Sequential execution of lifecycle hooks
- Phase hook orchestration
- Tool aggregation
- System prompt composition

<a id="spoon_ai.middleware.base.MiddlewarePipeline.__init__"></a>

#### `__init__`

```python
def __init__(middleware_list: List[AgentMiddleware])
```

Initialize pipeline with middleware list.

**Arguments**:

- `middleware_list` - List of middleware in application order

<a id="spoon_ai.middleware.base.MiddlewarePipeline.wrap_model_call"></a>

#### `wrap_model_call`

```python
def wrap_model_call(
        request: ModelRequest,
        base_handler: Callable[[ModelRequest],
                               ModelResponse]) -> ModelResponse
```

Build onion of middleware around base model handler.

Execution order: last middleware wraps first (reverse order).

<a id="spoon_ai.middleware.base.MiddlewarePipeline.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        base_handler: Callable[[ModelRequest],
                               ModelResponse]) -> ModelResponse
```

Async version of model call pipeline.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.wrap_tool_call"></a>

#### `wrap_tool_call`

```python
def wrap_tool_call(
    request: ToolCallRequest,
    base_handler: Callable[[ToolCallRequest],
                           ToolCallResult]) -> ToolCallResult
```

Build onion of middleware around base tool handler.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(
    request: ToolCallRequest,
    base_handler: Callable[[ToolCallRequest],
                           ToolCallResult]) -> ToolCallResult
```

Async version of tool call pipeline.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.execute_before_agent"></a>

#### `execute_before_agent`

```python
def execute_before_agent(state: Dict[str, Any],
                         runtime: AgentRuntime) -> Dict[str, Any]
```

Execute before_agent hooks in middleware order.

Returns merged state updates from all middleware.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.execute_after_agent"></a>

#### `execute_after_agent`

```python
def execute_after_agent(state: Dict[str, Any],
                        runtime: AgentRuntime) -> Dict[str, Any]
```

Execute after_agent hooks in reverse middleware order.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.execute_phase_hook"></a>

#### `execute_phase_hook`

```python
def execute_phase_hook(phase: AgentPhase, runtime: AgentRuntime,
                       phase_data: Dict[str, Any]) -> Dict[str, Any]
```

Execute phase hooks from all middleware.

**Arguments**:

- `phase` - Current execution phase
- `runtime` - Runtime context
- `phase_data` - Phase-specific data
  

**Returns**:

  Merged state updates from all middleware

<a id="spoon_ai.middleware.base.MiddlewarePipeline.collect_tools"></a>

#### `collect_tools`

```python
def collect_tools() -> List[BaseTool]
```

Aggregate tools from all middleware.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.build_system_prompt"></a>

#### `build_system_prompt`

```python
def build_system_prompt(base_prompt: Optional[str] = None) -> str
```

Build composed system prompt from base + middleware prompts.

**Arguments**:

- `base_prompt` - Agent's base system prompt
  

**Returns**:

  Composed prompt with middleware additions

<a id="spoon_ai.middleware.base.create_middleware_pipeline"></a>

#### `create_middleware_pipeline`

```python
def create_middleware_pipeline(
        middleware: List[Union[AgentMiddleware, type]]) -> MiddlewarePipeline
```

Create middleware pipeline from middleware classes or instances.

**Arguments**:

- `middleware` - List of AgentMiddleware instances or classes
  

**Returns**:

  Configured middleware pipeline
  

**Example**:

  pipeline = create_middleware_pipeline([
  TodoListMiddleware(),
  FilesystemMiddleware(),
  SummarizationMiddleware(),
  ])

<a id="spoon_ai.middleware"></a>

# Module `spoon_ai.middleware`

Middleware System for Deep Agents

Provides flexible middleware architecture for:
- Plan-Act-Reflect execution cycles
- Model and tool call interception
- Agent lifecycle hooks
- Declarative tool and state injection
- Filesystem operations with 7 built-in tools
- Todo list task tracking
- Context summarization
- Dangling tool call patching
- Anthropic prompt caching

<a id="spoon_ai.middleware.patch_tool_calls"></a>

# Module `spoon_ai.middleware.patch_tool_calls`

PatchToolCalls Middleware - Fix Dangling Tool Calls.

Patches message history to handle dangling tool calls that occur when:
- HITL (Human-in-the-Loop) interrupts tool execution
- Errors cause tool execution to be skipped
- Agent is resumed from a checkpoint mid-execution

Compatible with LangChain DeepAgents PatchToolCallsMiddleware interface.

Usage:
    from spoon_ai.middleware.patch_tool_calls import PatchToolCallsMiddleware

    agent = ToolCallAgent(
        middleware=[PatchToolCallsMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware"></a>

## `PatchToolCallsMiddleware` Objects

```python
class PatchToolCallsMiddleware(AgentMiddleware)
```

Middleware to patch dangling tool calls in message history.

A "dangling tool call" occurs when an AI message contains tool_calls
but there's no corresponding tool response message. This violates
the OpenAI/Anthropic API requirements and causes errors.

This middleware:
1. Scans message history for AI messages with tool_calls
2. Checks if each tool call has a corresponding tool response
3. Injects synthetic tool response messages for any missing ones

Common causes of dangling tool calls:
- HITL approval flow rejects or edits a tool call
- Error during tool execution before response is added
- Agent resumed from checkpoint mid-execution
- Network timeout during tool execution

**Example**:

    ```python
    from spoon_ai.middleware.patch_tool_calls import PatchToolCallsMiddleware

    middleware = PatchToolCallsMiddleware()

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(cancelled_message_template: Optional[str] = None,
             log_patches: bool = True)
```

Initialize PatchToolCalls middleware.

**Arguments**:

- `cancelled_message_template` - Custom message template for cancelled tools.
  Must contain &#123;tool_name&#125; and &#123;tool_call_id&#125; placeholders.
- `log_patches` - Whether to log when patches are applied (default: True)

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Patch dangling tool calls when agent starts.

This handles cases where agent is resumed from a checkpoint
with incomplete tool execution.

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Patch dangling tool calls before model call.

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get patching statistics.

<a id="spoon_ai.middleware.patch_tool_calls.create_patch_tool_calls_middleware"></a>

#### `create_patch_tool_calls_middleware`

```python
def create_patch_tool_calls_middleware(
        log_patches: bool = True) -> PatchToolCallsMiddleware
```

Create a PatchToolCalls middleware.

**Arguments**:

- `log_patches` - Whether to log when patches are applied
  

**Returns**:

  Configured PatchToolCallsMiddleware

<a id="spoon_ai.middleware.filesystem"></a>

# Module `spoon_ai.middleware.filesystem`

Filesystem Middleware - 7 Built-in Tools for File Operations.

Provides filesystem tools to agents:
1. ls - List files in directory
2. read_file - Read file content
3. write_file - Write new file
4. edit_file - Edit existing file (string replacement)
5. glob - Find files by pattern
6. grep - Search content in files
7. execute - Run shell commands (if backend supports)

Compatible with LangChain DeepAgents filesystem middleware interface.

Usage:
    from spoon_ai.middleware.filesystem import FilesystemMiddleware
    from spoon_ai.backends import create_state_backend

    backend, runtime = create_state_backend()
    middleware = FilesystemMiddleware(backend=backend)

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )

<a id="spoon_ai.middleware.filesystem.validate_path"></a>

#### `validate_path`

```python
def validate_path(path: str,
                  allowed_prefixes: Optional[List[str]] = None) -> str
```

Validate and normalize file path for security.

**Arguments**:

- `path` - The path to validate
- `allowed_prefixes` - Optional list of allowed path prefixes
  

**Returns**:

  Normalized canonical path starting with /
  

**Raises**:

- `ValueError` - If path contains traversal sequences or invalid format

<a id="spoon_ai.middleware.filesystem.LsTool"></a>

## `LsTool` Objects

```python
class LsTool(BaseTool)
```

List files in a directory.

<a id="spoon_ai.middleware.filesystem.ReadFileTool"></a>

## `ReadFileTool` Objects

```python
class ReadFileTool(BaseTool)
```

Read file content.

<a id="spoon_ai.middleware.filesystem.WriteFileTool"></a>

## `WriteFileTool` Objects

```python
class WriteFileTool(BaseTool)
```

Write to a new file.

<a id="spoon_ai.middleware.filesystem.EditFileTool"></a>

## `EditFileTool` Objects

```python
class EditFileTool(BaseTool)
```

Edit existing file with string replacement.

<a id="spoon_ai.middleware.filesystem.GlobTool"></a>

## `GlobTool` Objects

```python
class GlobTool(BaseTool)
```

Find files by glob pattern.

<a id="spoon_ai.middleware.filesystem.GrepTool"></a>

## `GrepTool` Objects

```python
class GrepTool(BaseTool)
```

Search for pattern in files.

<a id="spoon_ai.middleware.filesystem.ExecuteTool"></a>

## `ExecuteTool` Objects

```python
class ExecuteTool(BaseTool)
```

Execute shell command in sandbox.

<a id="spoon_ai.middleware.filesystem.get_filesystem_tools"></a>

#### `get_filesystem_tools`

```python
def get_filesystem_tools(backend: BackendProtocol) -> List[BaseTool]
```

Get all filesystem tools for a backend.

**Arguments**:

- `backend` - Backend to use for file operations
  

**Returns**:

  List of 7 filesystem tools

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware"></a>

## `FilesystemMiddleware` Objects

```python
class FilesystemMiddleware(AgentMiddleware)
```

Middleware for providing filesystem and execution tools to an agent.

Adds 7 filesystem tools to the agent:
- ls: list files in directory
- read_file: read file content
- write_file: write new file
- edit_file: edit existing file
- glob: find files by pattern
- grep: search content in files
- execute: run shell commands (if backend supports)

**Example**:

    ```python
    from spoon_ai.middleware.filesystem import FilesystemMiddleware
    from spoon_ai.backends import create_state_backend, create_composite_backend

    # With ephemeral storage (default)
    middleware = FilesystemMiddleware()

    # With custom backend
    backend, runtime = create_state_backend()
    middleware = FilesystemMiddleware(backend=backend)

    # With composite backend (mixed storage)
    composite = create_composite_backend(
        default=state_backend,
        routes={"/persistent/": store_backend}
    )
    middleware = FilesystemMiddleware(backend=composite)

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(backend: Optional[BackendProtocol] = None,
             system_prompt: Optional[str] = None,
             include_execute: bool = True,
             tool_token_limit: int = TOOL_TOKEN_LIMIT)
```

Initialize filesystem middleware.

**Arguments**:

- `backend` - Backend for file operations. Defaults to StateBackend.
- `system_prompt` - Optional custom system prompt override.
- `include_execute` - Whether to include execute tool (default: True)
- `tool_token_limit` - Token limit before truncating tool results

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.tools"></a>

#### `tools`

```python
@property
def tools() -> List[BaseTool]
```

Get filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.system_prompt"></a>

#### `system_prompt`

```python
@property
def system_prompt() -> str
```

Get system prompt for filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.backend"></a>

#### `backend`

```python
@property
def backend() -> BackendProtocol
```

Get the backend.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Inject system prompt for filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(request: ToolCallRequest,
                          handler: Callable) -> ToolCallResult
```

Handle large tool results by truncating.

<a id="spoon_ai.middleware.filesystem.create_filesystem_middleware"></a>

#### `create_filesystem_middleware`

```python
def create_filesystem_middleware(
        backend: Optional[BackendProtocol] = None,
        include_execute: bool = True) -> FilesystemMiddleware
```

Create a filesystem middleware.

**Arguments**:

- `backend` - Backend for file operations
- `include_execute` - Whether to include execute tool
  

**Returns**:

  FilesystemMiddleware instance
  

**Example**:

    ```python
    middleware = create_filesystem_middleware()
    agent = ToolCallAgent(middleware=[middleware], ...)
    ```

<a id="spoon_ai.middleware.filesystem.create_sandbox_backend"></a>

#### `create_sandbox_backend`

```python
def create_sandbox_backend(root_dir: Optional[str] = None,
                           timeout: int = 30) -> "LocalSandboxBackend"
```

Create a local sandbox backend that supports command execution.

**Arguments**:

- `root_dir` - Root directory for sandbox
- `timeout` - Command execution timeout in seconds
  

**Returns**:

  LocalSandboxBackend instance

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend"></a>

## `LocalSandboxBackend` Objects

```python
class LocalSandboxBackend(SandboxBackendProtocol)
```

Local sandbox backend with command execution support.

Wraps FilesystemBackend and adds execute capability.

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend.execute"></a>

#### `execute`

```python
def execute(command: str) -> ExecuteResponse
```

Execute a shell command.

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async execute a shell command.

<a id="spoon_ai.middleware.planning"></a>

# Module `spoon_ai.middleware.planning`

Planning Middleware for Deep Agents

Provides automatic planning capabilities for agents:
- Auto-plan generation at the start of tasks
- Plan tracking and execution
- Integration with Plan-Act-Reflect loop

Usage:
    agent = ToolCallAgent(
        middleware=[PlanningMiddleware(auto_plan=True)],
        enable_plan_phase=True,
    )

<a id="spoon_ai.middleware.planning.PlanStep"></a>

## `PlanStep` Objects

```python
@dataclass
class PlanStep()
```

A single step in a plan.

<a id="spoon_ai.middleware.planning.PlanStep.status"></a>

#### `status`

pending, in_progress, completed, skipped

<a id="spoon_ai.middleware.planning.PlanStep.mark_started"></a>

#### `mark_started`

```python
def mark_started() -> None
```

Mark step as started.

<a id="spoon_ai.middleware.planning.PlanStep.mark_completed"></a>

#### `mark_completed`

```python
def mark_completed(result: Optional[str] = None) -> None
```

Mark step as completed.

<a id="spoon_ai.middleware.planning.PlanStep.mark_skipped"></a>

#### `mark_skipped`

```python
def mark_skipped(reason: Optional[str] = None) -> None
```

Mark step as skipped.

<a id="spoon_ai.middleware.planning.Plan"></a>

## `Plan` Objects

```python
@dataclass
class Plan()
```

A plan for completing a task.

<a id="spoon_ai.middleware.planning.Plan.add_step"></a>

#### `add_step`

```python
def add_step(description: str) -> PlanStep
```

Add a step to the plan.

<a id="spoon_ai.middleware.planning.Plan.get_current_step"></a>

#### `get_current_step`

```python
def get_current_step() -> Optional[PlanStep]
```

Get the current step.

<a id="spoon_ai.middleware.planning.Plan.advance"></a>

#### `advance`

```python
def advance() -> bool
```

Advance to the next step. Returns True if there are more steps.

<a id="spoon_ai.middleware.planning.Plan.is_complete"></a>

#### `is_complete`

```python
def is_complete() -> bool
```

Check if plan is complete.

<a id="spoon_ai.middleware.planning.Plan.get_progress"></a>

#### `get_progress`

```python
def get_progress() -> str
```

Get progress summary.

<a id="spoon_ai.middleware.planning.Plan.to_string"></a>

#### `to_string`

```python
def to_string() -> str
```

Convert plan to string representation.

<a id="spoon_ai.middleware.planning.PlanningMiddleware"></a>

## `PlanningMiddleware` Objects

```python
class PlanningMiddleware(AgentMiddleware)
```

Middleware that provides automatic planning capabilities.

This middleware can automatically generate a plan at the start of a task
and track plan execution progress.

Features:
- Auto-plan generation based on task description
- Plan step tracking
- Integration with agent's enable_plan_phase

Usage:
    middleware = PlanningMiddleware(auto_plan=True)

    agent = ToolCallAgent(
        middleware=[middleware],
        enable_plan_phase=True,
    )

<a id="spoon_ai.middleware.planning.PlanningMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(auto_plan: bool = False,
             max_steps: int = 10,
             plan_prompt: Optional[str] = None)
```

Initialize planning middleware.

**Arguments**:

- `auto_plan` - If True, automatically generate a plan at task start
- `max_steps` - Maximum number of steps in auto-generated plans
- `plan_prompt` - Custom prompt for plan generation

<a id="spoon_ai.middleware.planning.PlanningMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize planning state before agent runs.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.on_plan_phase"></a>

#### `on_plan_phase`

```python
def on_plan_phase(runtime: AgentRuntime,
                  phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Handle the plan phase of the agent loop.

This is called when enable_plan_phase=True on the agent.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Wrap model calls to inject planning context.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.on_reflect_phase"></a>

#### `on_reflect_phase`

```python
def on_reflect_phase(runtime: AgentRuntime,
                     phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Handle the reflect phase to update plan progress.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.on_finish_phase"></a>

#### `on_finish_phase`

```python
def on_finish_phase(runtime: AgentRuntime,
                    phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Handle the finish phase.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.get_current_plan"></a>

#### `get_current_plan`

```python
def get_current_plan() -> Optional[Plan]
```

Get the current plan.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.set_plan"></a>

#### `set_plan`

```python
def set_plan(goal: str, steps: List[str]) -> Plan
```

Manually set a plan.

**Arguments**:

- `goal` - The goal of the plan
- `steps` - List of step descriptions
  

**Returns**:

  The created Plan object

<a id="spoon_ai.middleware.planning.create_planning_middleware"></a>

#### `create_planning_middleware`

```python
def create_planning_middleware(auto_plan: bool = True,
                               max_steps: int = 10) -> PlanningMiddleware
```

Create a planning middleware with common settings.

**Arguments**:

- `auto_plan` - Enable automatic plan generation
- `max_steps` - Maximum steps in auto-generated plans
  

**Returns**:

  Configured PlanningMiddleware

<a id="spoon_ai.middleware.summarization"></a>

# Module `spoon_ai.middleware.summarization`

Summarization Middleware - Context Compression for Long Conversations.

Automatically summarizes conversation history when token limits are approached,
preserving recent messages and maintaining context continuity by ensuring
AI/Tool message pairs remain together.

Compatible with LangChain DeepAgents SummarizationMiddleware interface.

Usage:
    from spoon_ai.middleware.summarization import SummarizationMiddleware

    agent = ToolCallAgent(
        middleware=[SummarizationMiddleware(
            model=llm,
            trigger=("fraction", 0.85),  # Trigger at 85% of max tokens
            keep=("messages", 20),       # Keep last 20 messages
        )],
        ...
    )

<a id="spoon_ai.middleware.summarization.ContextFraction"></a>

#### `ContextFraction`

Fraction of model's maximum input tokens.

**Example**:

  To specify 50% of the model's max input tokens:
    ```python
    ("fraction", 0.5)
    ```

<a id="spoon_ai.middleware.summarization.ContextTokens"></a>

#### `ContextTokens`

Absolute number of tokens.

**Example**:

  To specify 3000 tokens:
    ```python
    ("tokens", 3000)
    ```

<a id="spoon_ai.middleware.summarization.ContextMessages"></a>

#### `ContextMessages`

Absolute number of messages.

**Example**:

  To specify 50 messages:
    ```python
    ("messages", 50)
    ```

<a id="spoon_ai.middleware.summarization.ContextSize"></a>

#### `ContextSize`

Union type for context size specifications.

Can be either:
- ContextFraction: A fraction of the model's maximum input tokens.
- ContextTokens: An absolute number of tokens.
- ContextMessages: An absolute number of messages.

Depending on use with `trigger` or `keep` parameters, this type indicates either
when to trigger summarization or how much context to retain.

**Example**:

    ```python
    # ContextFraction
    context_size: ContextSize = ("fraction", 0.5)

    # ContextTokens
    context_size: ContextSize = ("tokens", 3000)

    # ContextMessages
    context_size: ContextSize = ("messages", 50)
    ```

<a id="spoon_ai.middleware.summarization.count_tokens_approximately"></a>

#### `count_tokens_approximately`

```python
def count_tokens_approximately(messages: Iterable[Message],
                               chars_per_token: float = 4.0) -> int
```

Approximate token counter aligned with LangChain semantics.

**Arguments**:

- `messages` - Iterable of messages to count tokens for.
- `chars_per_token` - Characters per token ratio (default: 4.0).
  

**Returns**:

  Estimated token count.

<a id="spoon_ai.middleware.summarization.RemoveMessage"></a>

## `RemoveMessage` Objects

```python
class RemoveMessage()
```

Marker class indicating a message should be removed.

Compatible with LangChain's RemoveMessage pattern.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware"></a>

## `SummarizationMiddleware` Objects

```python
class SummarizationMiddleware(AgentMiddleware)
```

Summarizes conversation history when token limits are approached.

This middleware monitors message token counts and automatically summarizes older
messages when a threshold is reached, preserving recent messages and maintaining
context continuity by ensuring AI/Tool message pairs remain together.

Compatible with LangChain DeepAgents SummarizationMiddleware interface.

**Example**:

    ```python
    from spoon_ai.middleware.summarization import SummarizationMiddleware

    # Basic usage with fraction trigger
    middleware = SummarizationMiddleware(
        model=llm,
        trigger=("fraction", 0.85),
        keep=("messages", 20),
    )

    # With multiple trigger conditions
    middleware = SummarizationMiddleware(
        model=llm,
        trigger=[("fraction", 0.8), ("messages", 100)],
        keep=("tokens", 3000),
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(
        model: Optional[ChatBot] = None,
        *,
        trigger: Optional[Union[ContextSize, List[ContextSize]]] = None,
        keep: ContextSize = ("messages", _DEFAULT_MESSAGES_TO_KEEP),
        token_counter: Optional[TokenCounter] = None,
        summary_prompt: str = DEFAULT_SUMMARY_PROMPT,
        trim_tokens_to_summarize: Optional[int] = _DEFAULT_TRIM_TOKEN_LIMIT,
        max_context_tokens: Optional[int] = None,
        **deprecated_kwargs: Any) -> None
```

Initialize summarization middleware.

**Arguments**:

- `model` - The language model to use for generating summaries.
  If None, uses agent's LLM.
- `trigger` - One or more thresholds that trigger summarization.
  Provide a single ContextSize tuple or a list of tuples.
  Summarization runs when any threshold is met.
  

**Examples**:

- `-` _"messages", 50_ - Trigger at 50 messages
- `-` _"tokens", 3000_ - Trigger at 3000 tokens
- `-` _"fraction", 0.8_ - Trigger at 80% of max input tokens
  - [("fraction", 0.8), ("messages", 100)]: Multiple conditions
  
- `keep` - Context retention policy applied after summarization.
  Provide a ContextSize tuple to specify how much history to preserve.
  Defaults to keeping the most recent 20 messages.
  

**Examples**:

- `-` _"messages", 20_ - Keep last 20 messages
- `-` _"tokens", 3000_ - Keep last 3000 tokens worth
- `-` _"fraction", 0.3_ - Keep last 30% of max input tokens
  
- `token_counter` - Function to count tokens in messages.
  Defaults to model-aware approximate counter.
- `summary_prompt` - Prompt template for generating summaries.
- `trim_tokens_to_summarize` - Maximum tokens to keep when preparing
  messages for summarization. Pass None to skip trimming.
- `max_context_tokens` - Maximum context tokens for fraction calculations.
  If None, attempts to get from model profile.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Process messages before model call, potentially triggering summarization.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get summarization statistics.

<a id="spoon_ai.middleware.summarization.create_summarization_middleware"></a>

#### `create_summarization_middleware`

```python
def create_summarization_middleware(
        model: Optional[ChatBot] = None,
        trigger: Optional[Union[ContextSize, List[ContextSize]]] = None,
        keep: ContextSize = ("messages", _DEFAULT_MESSAGES_TO_KEEP),
        max_context_tokens: Optional[int] = None,
        **kwargs: Any) -> SummarizationMiddleware
```

Create a summarization middleware.

**Arguments**:

- `model` - LLM for summarization
- `trigger` - When to trigger summarization
- `keep` - What to keep after summarization
- `max_context_tokens` - Maximum context tokens for fraction calculations
- `**kwargs` - Additional arguments passed to SummarizationMiddleware
  

**Returns**:

  Configured SummarizationMiddleware

<a id="spoon_ai.wallet.security"></a>

# Module `spoon_ai.wallet.security`

AES-GCM helpers for encrypting and decrypting private keys.

Security Features:
- AES-256-GCM authenticated encryption
- Argon2id key derivation (memory-hard, resistant to GPU/ASIC attacks)
- Random salt and IV per encryption
- Secure memory handling with bytearray zero-fill
- No plaintext returned; secrets stored directly in SecretVault

Dependencies:
- cryptography &gt;= 41.0.0 (for Argon2id support)

Encrypted format: ENC:v2:&lt;base64(salt || iv || ciphertext || tag)&gt;

<a id="spoon_ai.wallet.security.ENCRYPTED_PREFIX_V2"></a>

#### `ENCRYPTED_PREFIX_V2`

Argon2id

<a id="spoon_ai.wallet.security.ENCRYPTED_PREFIX"></a>

#### `ENCRYPTED_PREFIX`

Default for encryptions

<a id="spoon_ai.wallet.security.DecryptionError"></a>

## `DecryptionError` Objects

```python
class DecryptionError(ValueError)
```

Raised when decryption fails.

This is a generic error that does not reveal whether the failure was due to
an incorrect password, corrupted data, or authentication tag mismatch.

<a id="spoon_ai.wallet.security.encrypt_private_key"></a>

#### `encrypt_private_key`

```python
def encrypt_private_key(raw_private_key: str, password: str) -> str
```

Encrypt a private key using AES-256-GCM with Argon2id key derivation.

**Arguments**:

- `raw_private_key` - The plaintext private key to encrypt.
- `password` - Password used to derive the encryption key.
  

**Returns**:

  Encrypted payload: ENC:v2:&lt;base64(...)&gt;
  

**Raises**:

- `ValueError` - If inputs are invalid.
- `RuntimeError` - If Argon2id is not available.

<a id="spoon_ai.wallet.security.decrypt_private_key"></a>

#### `decrypt_private_key`

```python
def decrypt_private_key(enc_value: str, password: str) -> str
```

Decrypt a value produced by `encrypt_private_key`.

WARNING: This function returns a Python str, which cannot be securely wiped.
Prefer `decrypt_and_store()` for production use.

**Arguments**:

- `enc_value` - Encrypted value with ENC:v2 prefix.
- `password` - Password used to derive the key.
  

**Returns**:

  Decrypted private key as a string.
  

**Raises**:

- `DecryptionError` - If decryption fails (wrong password or corrupted data).

<a id="spoon_ai.wallet.security.decrypt_and_store"></a>

#### `decrypt_and_store`

```python
def decrypt_and_store(enc_value: str,
                      password: str,
                      vault_key: str,
                      *,
                      vault: Optional[SecretVault] = None) -> None
```

Decrypt a private key and store it directly in the SecretVault.

This is the RECOMMENDED way to decrypt secrets. Unlike `decrypt_private_key()`,
this function:
1. Never returns the plaintext (no risk of accidental exposure).
2. Stores the secret as a mutable bytearray that can be wiped later.
3. Zeros all intermediate key material before returning.

**Arguments**:

- `enc_value` - Encrypted value with ENC:v2 prefix.
- `password` - Password used to derive the key.
- `vault_key` - Key under which to store the decrypted secret in the vault.
- `vault` - Optional SecretVault instance (defaults to singleton).
  

**Raises**:

- `DecryptionError` - If decryption fails (wrong password or corrupted data).
  

**Example**:

  from spoon_ai.wallet.vault import SecretVault
  from spoon_ai.wallet.security import decrypt_and_store
  
  vault = SecretVault()
  decrypt_and_store(encrypted_key, password, "eth_private_key", vault=vault)
  
  # Later, when needed:
  with vault.get_decoded("eth_private_key") as pk:
  sign_transaction(pk)
  
  # On shutdown:
  vault.wipe_all()

<a id="spoon_ai.wallet"></a>

# Module `spoon_ai.wallet`

<a id="spoon_ai.wallet.vault"></a>

# Module `spoon_ai.wallet.vault`

Thread-safe in-memory vault for sensitive secrets.

Security model:
- Secrets are stored as mutable `bytearray` objects, allowing explicit memory wiping.
- No secret is ever written to os.environ or any persistent storage.
- The `get_decoded` context manager provides temporary access to decoded strings
  with automatic cleanup of references (though Python str objects cannot be
  forcefully zeroed due to immutability).
- All operations are thread-safe via a reentrant lock.

Usage:
    vault = SecretVault()
    vault.store("my_key", b"secret_data")

    with vault.get_decoded("my_key") as secret_str:
        # Use secret_str briefly
        do_something(secret_str)
    # Reference released after context exit

    vault.wipe("my_key")  # Securely wipe when done

<a id="spoon_ai.wallet.vault.SecretVault"></a>

## `SecretVault` Objects

```python
class SecretVault()
```

Thread-safe singleton vault for storing sensitive secrets in memory.

Secrets are stored as `bytearray` objects, which can be explicitly zeroed
after use to minimize the window of exposure in memory.

Thread Safety:
    All public methods acquire a reentrant lock, making this class safe
    for concurrent access from multiple threads.

Memory Security:
    - Uses `bytearray` instead of `bytes` to allow in-place zeroing.
    - `wipe()` and `wipe_all()` zero-fill before deletion.
    - `get_decoded()` context manager limits the lifetime of decoded strings.

Limitations:
    - Python's garbage collector may not immediately reclaim memory.
    - Decoded `str` objects returned by `get_decoded()` are immutable and
      cannot be forcefully wiped; use them briefly and avoid storing references.
    - Memory may still be swapped to disk; consider using `mlock()` at OS level
      for high-security deployments.

<a id="spoon_ai.wallet.vault.SecretVault.__new__"></a>

#### `__new__`

```python
def __new__(cls) -> SecretVault
```

Ensure singleton pattern with thread-safe lazy initialization.

<a id="spoon_ai.wallet.vault.SecretVault.store"></a>

#### `store`

```python
def store(key: str, value: Union[bytes, bytearray, str]) -> None
```

Store a secret in the vault.

**Arguments**:

- `key` - Identifier for the secret.
- `value` - Secret data as bytes, bytearray, or str.
  Strings are encoded as UTF-8.
  

**Notes**:

  If a secret already exists under `key`, it will be wiped before
  being replaced.

<a id="spoon_ai.wallet.vault.SecretVault.get_raw"></a>

#### `get_raw`

```python
def get_raw(key: str) -> Optional[bytes]
```

Retrieve a secret as immutable bytes.

**Arguments**:

- `key` - Identifier for the secret.
  

**Returns**:

  Copy of the secret as bytes, or None if not found.
  

**Warnings**:

  The returned `bytes` object cannot be wiped. Prefer `get_decoded()`
  context manager for controlled access.

<a id="spoon_ai.wallet.vault.SecretVault.get_decoded"></a>

#### `get_decoded`

```python
@contextmanager
def get_decoded(key: str, encoding: str = "utf-8") -> Iterator[Optional[str]]
```

Context manager for temporary access to a decoded secret string.

This is the preferred way to access secrets when a string is needed.
The context manager ensures that:
1. The secret is decoded only within the `with` block.
2. Local references are explicitly deleted after the block exits.

**Arguments**:

- `key` - Identifier for the secret.
- `encoding` - Character encoding (default: UTF-8).
  

**Yields**:

  Decoded string, or None if the secret doesn't exist.
  

**Example**:

  with vault.get_decoded("private_key") as pk:
  if pk:
  sign_transaction(pk)
  # `pk` reference is now invalid
  

**Warnings**:

  Python strings are immutable and cannot be forcefully wiped from memory.
  Keep the usage window as short as possible and avoid copying the string
  to other variables or data structures.

<a id="spoon_ai.wallet.vault.SecretVault.exists"></a>

#### `exists`

```python
def exists(key: str) -> bool
```

Check if a secret exists in the vault.

<a id="spoon_ai.wallet.vault.SecretVault.keys"></a>

#### `keys`

```python
def keys() -> list[str]
```

Return a list of all secret keys (not the values).

<a id="spoon_ai.wallet.vault.SecretVault.wipe"></a>

#### `wipe`

```python
def wipe(key: str) -> bool
```

Securely wipe a secret from the vault.

This method:
1. Zero-fills the bytearray in-place.
2. Removes the key from the vault.

**Arguments**:

- `key` - Identifier for the secret to wipe.
  

**Returns**:

  True if the secret existed and was wiped, False otherwise.

<a id="spoon_ai.wallet.vault.SecretVault.wipe_all"></a>

#### `wipe_all`

```python
def wipe_all() -> int
```

Securely wipe all secrets from the vault.

**Returns**:

  Number of secrets that were wiped.

<a id="spoon_ai.wallet.vault.get_vault"></a>

#### `get_vault`

```python
def get_vault() -> SecretVault
```

Get the singleton SecretVault instance.

<a id="spoon_ai.wallet.encrypt_key"></a>

# Module `spoon_ai.wallet.encrypt_key`

Interactive helper to produce ENC:v2 payloads for PRIVATE_KEY (or any secret).

Uses AES-256-GCM encryption with Argon2id key derivation.

<a id="spoon_ai.security"></a>

# Module `spoon_ai.security`

Environment security helpers for ENC:v2 encrypted secrets.

Security model:
- Decrypted secrets are stored in SecretVault, NOT in os.environ.
- The `decrypted_secrets` context manager provides scoped access to secrets
  via the vault, automatically wiping them when the context exits.
- Legacy `decrypted_environ` is DEPRECATED and will emit a warning.

This avoids the critical security issue where secrets remain in os.environ
(readable via /proc/&#123;pid&#125;/environ, inherited by subprocesses, etc.).

<a id="spoon_ai.security.init_security"></a>

#### `init_security`

```python
def init_security(*, vault: Optional[SecretVault] = None) -> SecretVault
```

Initialize env security features and return the vault.

Behaviour:
- Load `.env` files (if python-dotenv is installed).
- Detect presence of ENC:v2 encrypted values.
- If `SPOON_SECURITY_DECRYPT_ON_IMPORT` is truthy, decrypt all encrypted
env vars and store in SecretVault (NOT os.environ).
- Register atexit handler to wipe vault on shutdown.

**Returns**:

  The SecretVault instance containing decrypted secrets.
  

**Raises**:

- `RuntimeError` - If encrypted vars found but no password provided.
- `DecryptionError` - If decryption fails.

<a id="spoon_ai.security.decrypted_secrets"></a>

#### `decrypted_secrets`

```python
@contextmanager
def decrypted_secrets(
        keys: Optional[Iterable[str]] = None,
        *,
        password: Optional[str] = None,
        prompt: bool = True,
        vault: Optional[SecretVault] = None) -> Iterator[SecretVault]
```

Context manager for scoped access to decrypted secrets via SecretVault.

This is the RECOMMENDED way to access encrypted secrets. Secrets are:
1. Decrypted and stored in the vault on context entry.
2. Accessible via `vault.get_decoded(key)` within the context.
3. Automatically wiped from the vault on context exit.

**Arguments**:

- `keys` - Specific env var names to decrypt. If None, all encrypted vars.
- `password` - Master password. If None, resolved from env or prompt.
- `prompt` - Whether to prompt for password if not in env.
- `vault` - Optional vault instance (defaults to singleton).
  

**Yields**:

  SecretVault instance with decrypted secrets.
  

**Example**:

  with decrypted_secrets(["PRIVATE_KEY"]) as vault:
  with vault.get_decoded("PRIVATE_KEY") as pk:
  account = Account.from_key(pk)
  # Use account...
  # Secrets wiped automatically

<a id="spoon_ai.security.async_decrypted_secrets"></a>

#### `async_decrypted_secrets`

```python
@asynccontextmanager
async def async_decrypted_secrets(
        keys: Optional[Iterable[str]] = None,
        *,
        password: Optional[str] = None,
        prompt: bool = True,
        vault: Optional[SecretVault] = None) -> Iterator[SecretVault]
```

Async version of `decrypted_secrets()` with per-event-loop locking.

This prevents race conditions when multiple async tasks attempt to
decrypt/wipe secrets concurrently.

**Arguments**:

- `keys` - Specific env var names to decrypt. If None, all encrypted vars.
- `password` - Master password. If None, resolved from env or prompt.
- `prompt` - Whether to prompt for password if not in env.
- `vault` - Optional vault instance (defaults to singleton).
  

**Yields**:

  SecretVault instance with decrypted secrets.

<a id="spoon_ai.security.decrypted_environ"></a>

#### `decrypted_environ`

```python
@contextmanager
def decrypted_environ(keys: Optional[Iterable[str]] = None,
                      *,
                      password: Optional[str] = None,
                      prompt: bool = True) -> Iterator[None]
```

DEPRECATED: Use `decrypted_secrets()` instead.

This function modifies os.environ, which is a security risk.
Secrets in os.environ can be read via /proc/&#123;pid&#125;/environ.

<a id="spoon_ai.security.async_decrypted_environ"></a>

#### `async_decrypted_environ`

```python
@asynccontextmanager
async def async_decrypted_environ(keys: Optional[Iterable[str]] = None,
                                  *,
                                  password: Optional[str] = None,
                                  prompt: bool = True) -> Iterator[None]
```

DEPRECATED: Use `async_decrypted_secrets()` instead.

This function modifies os.environ, which is a security risk.

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

<a id="spoon_ai.utils.utils"></a>

# Module `spoon_ai.utils.utils`

<a id="spoon_ai.utils"></a>

# Module `spoon_ai.utils`

<a id="spoon_ai.utils.config"></a>

# Module `spoon_ai.utils.config`

<a id="spoon_ai.utils.streaming"></a>

# Module `spoon_ai.utils.streaming`

<a id="spoon_ai.utils.streaming.StreamOutcome"></a>

## `StreamOutcome` Objects

```python
@dataclass
class StreamOutcome()
```

Accumulator for streaming output state.

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

<a id="spoon_ai.callbacks.stream_event"></a>

# Module `spoon_ai.callbacks.stream_event`

<a id="spoon_ai.callbacks.stream_event.StreamEventCallbackHandler"></a>

## `StreamEventCallbackHandler` Objects

```python
class StreamEventCallbackHandler(BaseCallbackHandler)
```

Translate callback invocations into standardized stream events.

<a id="spoon_ai.callbacks.skill_callback"></a>

# Module `spoon_ai.callbacks.skill_callback`

Skill-specific callback handler.

Extends BaseCallbackHandler with skill lifecycle hooks.

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler"></a>

## `SkillCallbackHandler` Objects

```python
class SkillCallbackHandler(BaseCallbackHandler)
```

Callback handler for skill lifecycle events.

Extends BaseCallbackHandler with skill-specific hooks:
- on_skill_start: Called when a skill is activated
- on_skill_end: Called when a skill is deactivated
- on_skill_error: Called when skill activation/execution fails

Usage:
    class MySkillHandler(SkillCallbackHandler):
        async def on_skill_start(self, skill_name, context, **kwargs):
            print(f"Skill activated: &#123;skill_name&#125;")

        async def on_skill_end(self, skill_name, result, **kwargs):
            print(f"Skill deactivated: &#123;skill_name&#125;")

    agent = SpoonReactSkill(callbacks=[MySkillHandler()])

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_start"></a>

#### `on_skill_start`

```python
async def on_skill_start(skill_name: str,
                         context: Dict[str, Any],
                         *,
                         run_id: Optional[str] = None,
                         **kwargs) -> None
```

Called when a skill is activated.

**Arguments**:

- `skill_name` - Name of the activated skill
- `context` - Skill activation context
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_end"></a>

#### `on_skill_end`

```python
async def on_skill_end(skill_name: str,
                       result: Any,
                       *,
                       run_id: Optional[str] = None,
                       **kwargs) -> None
```

Called when a skill is deactivated.

**Arguments**:

- `skill_name` - Name of the deactivated skill
- `result` - Result or state from the skill
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_error"></a>

#### `on_skill_error`

```python
async def on_skill_error(skill_name: str,
                         error: Exception,
                         *,
                         run_id: Optional[str] = None,
                         **kwargs) -> None
```

Called when a skill encounters an error.

**Arguments**:

- `skill_name` - Name of the skill that errored
- `error` - The exception that occurred
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_match"></a>

#### `on_skill_match`

```python
async def on_skill_match(query: str,
                         matched_skills: list,
                         *,
                         run_id: Optional[str] = None,
                         **kwargs) -> None
```

Called when skills are matched to a query.

**Arguments**:

- `query` - The user query that triggered matching
- `matched_skills` - List of skill names that matched
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.LoggingSkillCallback"></a>

## `LoggingSkillCallback` Objects

```python
class LoggingSkillCallback(SkillCallbackHandler)
```

Skill callback that logs all events.

Useful for debugging and monitoring skill system activity.

<a id="spoon_ai.callbacks.skill_callback.MetricsSkillCallback"></a>

## `MetricsSkillCallback` Objects

```python
class MetricsSkillCallback(SkillCallbackHandler)
```

Skill callback that collects metrics.

Tracks:
- Number of skill activations/deactivations
- Error counts per skill
- Match counts

Usage:
    metrics = MetricsSkillCallback()
    agent = SpoonReactSkill(callbacks=[metrics])
    # ... use agent ...
    print(metrics.get_metrics())

<a id="spoon_ai.callbacks.skill_callback.MetricsSkillCallback.get_metrics"></a>

#### `get_metrics`

```python
def get_metrics() -> Dict[str, Any]
```

Get collected metrics.

<a id="spoon_ai.callbacks.skill_callback.MetricsSkillCallback.reset"></a>

#### `reset`

```python
def reset() -> None
```

Reset all metrics.

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

<a id="spoon_ai.callbacks"></a>

# Module `spoon_ai.callbacks`

Callback system for streaming and event handling in Spoon AI.

This module provides a comprehensive callback system similar to LangChain's callbacks,
enabling real-time monitoring and event handling for LLM calls, agent execution,
tool invocation, and graph workflows.

<a id="spoon_ai.callbacks.manager"></a>

# Module `spoon_ai.callbacks.manager`

<a id="spoon_ai.callbacks.manager.CallbackManager"></a>

## `CallbackManager` Objects

```python
class CallbackManager()
```

Lightweight dispatcher for callback handlers.

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

<a id="spoon_ai.payments"></a>

# Module `spoon_ai.payments`

Payment utilities for integrating the SpoonOS core with the x402 payments protocol.

This package wraps the upstream `x402` Python SDK with configuration and service
abstractions that align to SpoonOS conventions (config.json priority, .env overrides,
and async-friendly helper utilities).

<a id="spoon_ai.payments.cli"></a>

# Module `spoon_ai.payments.cli`

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

<a id="spoon_ai.payments.facilitator_client"></a>

# Module `spoon_ai.payments.facilitator_client`

<a id="spoon_ai.payments.facilitator_client.X402FacilitatorClient"></a>

## `X402FacilitatorClient` Objects

```python
class X402FacilitatorClient()
```

Thin wrapper over the upstream facilitator client with async header hooks.

<a id="spoon_ai.payments.app"></a>

# Module `spoon_ai.payments.app`

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

<a id="spoon_ai.rag.index"></a>

# Module `spoon_ai.rag.index`

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

<a id="spoon_ai.rag.embeddings.get_embedding_client"></a>

#### `get_embedding_client`

```python
def get_embedding_client(
        provider: Optional[str],
        *,
        openai_api_key: Optional[str] = None,
        openai_model: str = "text-embedding-3-small") -> EmbeddingClient
```

Create an embedding client.

Provider selection rules:
- provider is None/"auto": pick the first configured embeddings provider using a dedicated
  priority order (OpenAI &gt; OpenRouter &gt; Gemini).
- provider is "openai" / "openrouter" / "gemini" / "ollama": force that provider (uses core env config when applicable).
- provider is "openai_compatible": use OpenAI-compatible embeddings via RAG_EMBEDDINGS_* env vars.
- otherwise: deterministic hash embeddings (offline).

<a id="spoon_ai.rag.loader"></a>

# Module `spoon_ai.rag.loader`

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

<a id="spoon_ai.rag.vectorstores.pinecone_store"></a>

# Module `spoon_ai.rag.vectorstores.pinecone_store`

<a id="spoon_ai.rag.vectorstores.qdrant_store"></a>

# Module `spoon_ai.rag.vectorstores.qdrant_store`

<a id="spoon_ai.rag.vectorstores"></a>

# Module `spoon_ai.rag.vectorstores`

<a id="spoon_ai.rag.vectorstores.chroma_store"></a>

# Module `spoon_ai.rag.vectorstores.chroma_store`

<a id="spoon_ai.rag.vectorstores.faiss_store"></a>

# Module `spoon_ai.rag.vectorstores.faiss_store`

<a id="spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore"></a>

## `FaissVectorStore` Objects

```python
class FaissVectorStore(VectorStore)
```

FAISS-backed local vector store (cosine via inner product + L2 norm).

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

<a id="spoon_ai.rag"></a>

# Module `spoon_ai.rag`

<a id="spoon_ai.rag.qa"></a>

# Module `spoon_ai.rag.qa`

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

<a id="spoon_ai.rag.retriever"></a>

# Module `spoon_ai.rag.retriever`

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

<a id="spoon_ai.memory.remove_message"></a>

# Module `spoon_ai.memory.remove_message`

Helpers for emitting message-removal directives.

<a id="spoon_ai.memory.remove_message.RemoveMessage"></a>

## `RemoveMessage` Objects

```python
class RemoveMessage(BaseModel)
```

Lightweight message that signals another message should be removed.

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

<a id="spoon_ai.memory"></a>

# Module `spoon_ai.memory`

Short-term memory management for conversation history.

This module provides memory management utilities for maintaining and optimizing
conversation history in chat applications.

<a id="spoon_ai.memory.checkpointer"></a>

# Module `spoon_ai.memory.checkpointer`

Enhanced Checkpointing System

Provides persistent storage for agent state, enabling:
- Conversation pause and resume
- Thread-based isolation
- State recovery after crashes
- Cross-session persistence

Backends:
- InMemoryCheckpointer: For testing
- SQLiteCheckpointer: Production-ready persistence
- JSONCheckpointer: File-based persistence

Usage:
    checkpointer = SQLiteCheckpointer("agent_memory.db")

    agent = ToolCallAgent(
        thread_id="user-123",
        middleware=[CheckpointMiddleware(checkpointer)]
    )

    # State is automatically saved after each step
    await agent.run("Do something complex")

    # Resume in a new session
    agent2 = ToolCallAgent(
        thread_id="user-123",  # Same thread
        middleware=[CheckpointMiddleware(checkpointer)]
    )
    # Agent2 will restore state from checkpoint

<a id="spoon_ai.memory.checkpointer.Checkpoint"></a>

## `Checkpoint` Objects

```python
@dataclass
class Checkpoint()
```

A single checkpoint containing agent state.

<a id="spoon_ai.memory.checkpointer.Checkpoint.messages"></a>

#### `messages`

Serialized messages

<a id="spoon_ai.memory.checkpointer.Checkpoint.agent_state"></a>

#### `agent_state`

Agent state dict

<a id="spoon_ai.memory.checkpointer.Checkpoint.metadata"></a>

#### `metadata`

Additional metadata

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer"></a>

## `BaseCheckpointer` Objects

```python
class BaseCheckpointer(ABC)
```

Abstract base class for checkpointers.

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.save"></a>

#### `save`

```python
@abstractmethod
def save(checkpoint: Checkpoint) -> None
```

Save a checkpoint.

**Arguments**:

- `checkpoint` - Checkpoint to save

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.load"></a>

#### `load`

```python
@abstractmethod
def load(thread_id: str) -> Optional[Checkpoint]
```

Load the latest checkpoint for a thread.

**Arguments**:

- `thread_id` - Thread identifier
  

**Returns**:

  Latest checkpoint or None if not found

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.list_threads"></a>

#### `list_threads`

```python
@abstractmethod
def list_threads() -> List[str]
```

List all thread IDs with checkpoints.

**Returns**:

  List of thread IDs

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.delete"></a>

#### `delete`

```python
@abstractmethod
def delete(thread_id: str) -> bool
```

Delete all checkpoints for a thread.

**Arguments**:

- `thread_id` - Thread identifier
  

**Returns**:

  True if deleted, False if not found

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.get_history"></a>

#### `get_history`

```python
@abstractmethod
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history for a thread.

**Arguments**:

- `thread_id` - Thread identifier
- `limit` - Maximum number of checkpoints to return
  

**Returns**:

  List of checkpoints, most recent first

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer"></a>

## `InMemoryCheckpointer` Objects

```python
class InMemoryCheckpointer(BaseCheckpointer)
```

In-memory checkpointer for testing and development.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.save"></a>

#### `save`

```python
def save(checkpoint: Checkpoint) -> None
```

Save checkpoint to memory.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.load"></a>

#### `load`

```python
def load(thread_id: str) -> Optional[Checkpoint]
```

Load latest checkpoint from memory.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.list_threads"></a>

#### `list_threads`

```python
def list_threads() -> List[str]
```

List all thread IDs.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.delete"></a>

#### `delete`

```python
def delete(thread_id: str) -> bool
```

Delete all checkpoints for thread.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.get_history"></a>

#### `get_history`

```python
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer"></a>

## `SQLiteCheckpointer` Objects

```python
class SQLiteCheckpointer(BaseCheckpointer)
```

SQLite-based checkpointer for production use.

Features:
- Persistent storage
- Automatic schema creation
- Thread-safe operations
- Checkpoint history

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.__init__"></a>

#### `__init__`

```python
def __init__(db_path: str = "checkpoints.db")
```

Initialize SQLite checkpointer.

**Arguments**:

- `db_path` - Path to SQLite database file

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.save"></a>

#### `save`

```python
def save(checkpoint: Checkpoint) -> None
```

Save checkpoint to SQLite.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.load"></a>

#### `load`

```python
def load(thread_id: str) -> Optional[Checkpoint]
```

Load latest checkpoint from SQLite.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.list_threads"></a>

#### `list_threads`

```python
def list_threads() -> List[str]
```

List all thread IDs.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.delete"></a>

#### `delete`

```python
def delete(thread_id: str) -> bool
```

Delete all checkpoints for thread.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.get_history"></a>

#### `get_history`

```python
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer"></a>

## `JSONCheckpointer` Objects

```python
class JSONCheckpointer(BaseCheckpointer)
```

JSON file-based checkpointer.

Each thread gets its own JSON file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.__init__"></a>

#### `__init__`

```python
def __init__(storage_dir: str = ".checkpoints")
```

Initialize JSON checkpointer.

**Arguments**:

- `storage_dir` - Directory for checkpoint files

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.save"></a>

#### `save`

```python
def save(checkpoint: Checkpoint) -> None
```

Save checkpoint to JSON file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.load"></a>

#### `load`

```python
def load(thread_id: str) -> Optional[Checkpoint]
```

Load latest checkpoint from JSON file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.list_threads"></a>

#### `list_threads`

```python
def list_threads() -> List[str]
```

List all thread IDs.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.delete"></a>

#### `delete`

```python
def delete(thread_id: str) -> bool
```

Delete checkpoint file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.get_history"></a>

#### `get_history`

```python
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history.

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware"></a>

## `CheckpointMiddleware` Objects

```python
class CheckpointMiddleware(AgentMiddleware)
```

Middleware that adds automatic checkpointing.

Features:
- Automatic state saving after each step
- Automatic state restoration on startup
- Thread-based isolation
- Configurable checkpoint frequency

Usage:
    checkpointer = SQLiteCheckpointer("agent.db")

    agent = ToolCallAgent(
        thread_id="user-123",
        middleware=[CheckpointMiddleware(
            checkpointer,
            save_frequency=1  # Save after every step
        )]
    )

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(checkpointer: BaseCheckpointer,
             save_frequency: int = 1,
             auto_restore: bool = True)
```

Initialize checkpoint middleware.

**Arguments**:

- `checkpointer` - Checkpointer backend
- `save_frequency` - Save checkpoint every N steps
- `auto_restore` - Automatically restore state on startup

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Restore state from checkpoint on startup.

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Save checkpoint after agent completes.

<a id="spoon_ai.memory.checkpointer.create_sqlite_checkpointer"></a>

#### `create_sqlite_checkpointer`

```python
def create_sqlite_checkpointer(
        db_path: str = "agent_memory.db") -> SQLiteCheckpointer
```

Create a SQLite checkpointer.

**Arguments**:

- `db_path` - Path to SQLite database
  

**Returns**:

  Configured SQLiteCheckpointer

<a id="spoon_ai.memory.checkpointer.create_memory_checkpointer"></a>

#### `create_memory_checkpointer`

```python
def create_memory_checkpointer() -> InMemoryCheckpointer
```

Create an in-memory checkpointer for testing.

**Returns**:

  InMemoryCheckpointer instance

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

<a id="spoon_ai.backends.sandbox"></a>

# Module `spoon_ai.backends.sandbox`

Base sandbox implementation with execute() as the only required abstract method.

This module provides a base class that implements all SandboxBackendProtocol
methods using shell commands executed via execute(). Concrete implementations
only need to implement the execute() method.

This design allows for remote sandboxes (Docker, Modal, Daytona, etc.) where
you just implement execute() to run commands remotely.

Compatible with LangChain DeepAgents BaseSandbox interface.

Usage:
    # For local execution
    class LocalSandbox(BaseSandbox):
        def execute(self, command: str) -&gt; ExecuteResponse:
            # Run locally
            result = subprocess.run(command, shell=True, ...)
            return ExecuteResponse(output=result.stdout, exit_code=result.returncode)

    # For remote execution (Docker, Modal, etc.)
    class DockerSandbox(BaseSandbox):
        def execute(self, command: str) -&gt; ExecuteResponse:
            # Run in Docker container
            result = docker_client.containers.run(self.image, command, ...)
            return ExecuteResponse(output=result, exit_code=0)

<a id="spoon_ai.backends.sandbox.BaseSandbox"></a>

## `BaseSandbox` Objects

```python
class BaseSandbox(SandboxBackendProtocol, ABC)
```

Base sandbox implementation with execute() as abstract method.

This class provides default implementations for all protocol methods
using shell commands. Subclasses only need to implement:
- execute(): Run a shell command and return output
- id: Unique identifier property
- upload_files(): Upload files to sandbox (optional, has default)
- download_files(): Download files from sandbox (optional, has default)

The default implementations use Python commands executed via execute()
to perform file operations, making this suitable for remote sandboxes
where you only have shell access.

**Example**:

    ```python
    class DockerSandbox(BaseSandbox):
        def __init__(self, container_id: str):
            self._container_id = container_id

        @property
        def id(self) -> str:
            return f"docker-{self._container_id}"

        def execute(self, command: str) -> ExecuteResponse:
            result = docker_exec(self._container_id, command)
            return ExecuteResponse(
                output=result.output,
                exit_code=result.exit_code
            )
    ```

<a id="spoon_ai.backends.sandbox.BaseSandbox.execute"></a>

#### `execute`

```python
@abstractmethod
def execute(command: str) -> ExecuteResponse
```

Execute a command in the sandbox and return ExecuteResponse.

This is the core method that subclasses must implement.
All other file operations are built on top of this.

**Arguments**:

- `command` - Full shell command string to execute.
  

**Returns**:

  ExecuteResponse with combined output, exit code, and truncation flag.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async version of execute.

<a id="spoon_ai.backends.sandbox.BaseSandbox.id"></a>

#### `id`

```python
@property
@abstractmethod
def id() -> str
```

Unique identifier for the sandbox backend.

<a id="spoon_ai.backends.sandbox.BaseSandbox.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> List[FileInfo]
```

List directory contents using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> List[GrepMatch]
```

Search for pattern in files using grep command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Find files matching pattern using glob command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Upload multiple files to the sandbox.

Default implementation uses base64 encoding via execute().
Override for more efficient implementations.

**Arguments**:

- `files` - List of (path, content) tuples
  

**Returns**:

  List of FileUploadResponse for each file

<a id="spoon_ai.backends.sandbox.BaseSandbox.download_files"></a>

#### `download_files`

```python
def download_files(paths: List[str]) -> List[FileDownloadResponse]
```

Download multiple files from the sandbox.

Default implementation uses base64 encoding via execute().
Override for more efficient implementations.

**Arguments**:

- `paths` - List of file paths to download
  

**Returns**:

  List of FileDownloadResponse for each file

<a id="spoon_ai.backends.sandbox.BaseSandbox.als_info"></a>

#### `als_info`

```python
async def als_info(path: str) -> List[FileInfo]
```

Async version of ls_info.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aread"></a>

#### `aread`

```python
async def aread(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Async version of read.

<a id="spoon_ai.backends.sandbox.BaseSandbox.awrite"></a>

#### `awrite`

```python
async def awrite(file_path: str, content: str) -> WriteResult
```

Async version of write.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aedit"></a>

#### `aedit`

```python
async def aedit(file_path: str,
                old_string: str,
                new_string: str,
                replace_all: bool = False) -> EditResult
```

Async version of edit.

<a id="spoon_ai.backends.sandbox.BaseSandbox.agrep_raw"></a>

#### `agrep_raw`

```python
async def agrep_raw(pattern: str,
                    path: Optional[str] = None,
                    glob: Optional[str] = None) -> List[GrepMatch]
```

Async version of grep_raw.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aglob_info"></a>

#### `aglob_info`

```python
async def aglob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Async version of glob_info.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aupload_files"></a>

#### `aupload_files`

```python
async def aupload_files(
        files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Async version of upload_files.

<a id="spoon_ai.backends.sandbox.BaseSandbox.adownload_files"></a>

#### `adownload_files`

```python
async def adownload_files(paths: List[str]) -> List[FileDownloadResponse]
```

Async version of download_files.

<a id="spoon_ai.backends.utils"></a>

# Module `spoon_ai.backends.utils`

Shared utility functions for memory backend implementations.

This module contains both user-facing string formatters and structured
helpers used by backends and the composite router.

<a id="spoon_ai.backends.utils.sanitize_tool_call_id"></a>

#### `sanitize_tool_call_id`

```python
def sanitize_tool_call_id(tool_call_id: str) -> str
```

Sanitize tool_call_id to prevent path traversal.

Replaces dangerous characters (., /, \) with underscores.

<a id="spoon_ai.backends.utils.validate_path"></a>

#### `validate_path`

```python
def validate_path(path: Optional[str]) -> str
```

Validate and normalize a path.

**Arguments**:

- `path` - Path to validate
  

**Returns**:

  Normalized path starting with /
  

**Raises**:

- `ValueError` - If path is invalid

<a id="spoon_ai.backends.utils.format_content_with_line_numbers"></a>

#### `format_content_with_line_numbers`

```python
def format_content_with_line_numbers(content: str | list[str],
                                     start_line: int = 1) -> str
```

Format file content with line numbers (cat -n style).

**Arguments**:

- `content` - File content as string or list of lines
- `start_line` - Starting line number (default: 1)
  

**Returns**:

  Formatted content with line numbers

<a id="spoon_ai.backends.utils.check_empty_content"></a>

#### `check_empty_content`

```python
def check_empty_content(content: str) -> Optional[str]
```

Check if content is empty and return warning message.

**Arguments**:

- `content` - Content to check
  

**Returns**:

  Warning message if empty, None otherwise

<a id="spoon_ai.backends.utils.file_data_to_string"></a>

#### `file_data_to_string`

```python
def file_data_to_string(file_data: dict[str, Any]) -> str
```

Convert FileData to plain string content.

**Arguments**:

- `file_data` - FileData dict with 'content' key
  

**Returns**:

  Content as string with lines joined by newlines

<a id="spoon_ai.backends.utils.create_file_data"></a>

#### `create_file_data`

```python
def create_file_data(content: str,
                     created_at: Optional[str] = None) -> dict[str, Any]
```

Create a FileData object with timestamps.

**Arguments**:

- `content` - File content as string
- `created_at` - Optional creation timestamp (ISO format)
  

**Returns**:

  FileData dict with content and timestamps

<a id="spoon_ai.backends.utils.update_file_data"></a>

#### `update_file_data`

```python
def update_file_data(file_data: dict[str, Any],
                     content: str) -> dict[str, Any]
```

Update FileData with new content, preserving creation timestamp.

**Arguments**:

- `file_data` - Existing FileData dict
- `content` - New content as string
  

**Returns**:

  Updated FileData dict

<a id="spoon_ai.backends.utils.format_read_response"></a>

#### `format_read_response`

```python
def format_read_response(file_data: dict[str, Any], offset: int,
                         limit: int) -> str
```

Format file data for read response with line numbers.

**Arguments**:

- `file_data` - FileData dict
- `offset` - Line offset (0-indexed)
- `limit` - Maximum number of lines
  

**Returns**:

  Formatted content or error message

<a id="spoon_ai.backends.utils.perform_string_replacement"></a>

#### `perform_string_replacement`

```python
def perform_string_replacement(content: str, old_string: str, new_string: str,
                               replace_all: bool) -> tuple[str, int] | str
```

Perform string replacement with occurrence validation.

**Arguments**:

- `content` - Original content
- `old_string` - String to replace
- `new_string` - Replacement string
- `replace_all` - Whether to replace all occurrences
  

**Returns**:

  Tuple of (new_content, occurrences) on success, or error message string

<a id="spoon_ai.backends.utils.glob_match"></a>

#### `glob_match`

```python
def glob_match(path: str, pattern: str) -> bool
```

Match a path against a glob pattern.

**Arguments**:

- `path` - File path to match
- `pattern` - Glob pattern
  

**Returns**:

  True if path matches pattern

<a id="spoon_ai.backends.utils.glob_search_files"></a>

#### `glob_search_files`

```python
def glob_search_files(files: dict[str, Any],
                      pattern: str,
                      path: str = "/") -> str
```

Search files dict for paths matching glob pattern.

**Arguments**:

- `files` - Dictionary of file paths to FileData.
- `pattern` - Glob pattern (e.g., "*.py", "**/*.ts").
- `path` - Base path to search from.
  

**Returns**:

  Newline-separated file paths, sorted by modification time.
  Returns "No files found" if no matches.

<a id="spoon_ai.backends.utils.grep_matches_from_files"></a>

#### `grep_matches_from_files`

```python
def grep_matches_from_files(
        files: dict[str, Any],
        pattern: str,
        path: Optional[str] = None,
        glob_pattern: Optional[str] = None) -> list[GrepMatch] | str
```

Return structured grep matches from an in-memory files mapping.

**Arguments**:

- `files` - Dictionary of file paths to FileData.
- `pattern` - Regex pattern to search for.
- `path` - Base path to search from.
- `glob_pattern` - Optional glob pattern to filter files.
  

**Returns**:

  List of GrepMatch on success, or error string.

<a id="spoon_ai.backends.utils.format_grep_results"></a>

#### `format_grep_results`

```python
def format_grep_results(
        results: dict[str, list[tuple[int, str]]],
        output_mode: Literal["files_with_matches", "content", "count"]) -> str
```

Format grep search results based on output mode.

**Arguments**:

- `results` - Dictionary mapping file paths to list of (line_num, line_content) tuples
- `output_mode` - Output format
  

**Returns**:

  Formatted string output

<a id="spoon_ai.backends.utils.truncate_if_too_long"></a>

#### `truncate_if_too_long`

```python
def truncate_if_too_long(result: list[str] | str) -> list[str] | str
```

Truncate result if it exceeds token limit.

<a id="spoon_ai.backends.state"></a>

# Module `spoon_ai.backends.state`

StateBackend: Store files in agent state (ephemeral).

Files persist within a conversation thread but not across threads.
State is automatically checkpointed after each agent step.

<a id="spoon_ai.backends.state.StateBackend"></a>

## `StateBackend` Objects

```python
class StateBackend(BackendProtocol)
```

Backend that stores files in agent state (ephemeral).

Uses agent's state management and checkpointing. Files persist within
a conversation thread but not across threads. State is automatically
checkpointed after each agent step.

**Example**:

    ```python
    runtime = BackendRuntime(state={"files": {}})
    backend = StateBackend(runtime)

    # Write a file
    result = backend.write("/hello.txt", "Hello, World!")

    # Read the file
    content = backend.read("/hello.txt")
    ```

<a id="spoon_ai.backends.state.StateBackend.__init__"></a>

#### `__init__`

```python
def __init__(runtime: BackendRuntime)
```

Initialize StateBackend with runtime.

**Arguments**:

- `runtime` - BackendRuntime instance providing state access.

<a id="spoon_ai.backends.state.StateBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory (non-recursive).

**Arguments**:

- `path` - Absolute path to directory.
  

**Returns**:

  List of FileInfo dicts for files and directories in the directory.

<a id="spoon_ai.backends.state.StateBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

**Arguments**:

- `file_path` - Absolute file path.
- `offset` - Line offset to start reading from (0-indexed).
- `limit` - Maximum number of lines to read.
  

**Returns**:

  Formatted file content with line numbers, or error message.

<a id="spoon_ai.backends.state.StateBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file with content.

Returns WriteResult with files_update to update state.

<a id="spoon_ai.backends.state.StateBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences.

Returns EditResult with files_update and occurrences.

<a id="spoon_ai.backends.state.StateBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

<a id="spoon_ai.backends.state.StateBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Get FileInfo for files matching glob pattern.

<a id="spoon_ai.backends.state.create_state_backend"></a>

#### `create_state_backend`

```python
def create_state_backend(
    initial_files: Optional[dict[str, Any]] = None
) -> tuple[StateBackend, BackendRuntime]
```

Create a StateBackend with optional initial files.

**Arguments**:

- `initial_files` - Optional dict of file paths to FileData.
  

**Returns**:

  Tuple of (StateBackend, BackendRuntime).
  

**Example**:

    ```python
    backend, runtime = create_state_backend()
    backend.write("/hello.txt", "Hello!")
    ```

<a id="spoon_ai.backends.protocol"></a>

# Module `spoon_ai.backends.protocol`

Protocol definition for pluggable memory backends.

This module defines the BackendProtocol that all backend implementations
must follow. Backends can store files in different locations (state, filesystem,
database, etc.) and provide a uniform interface for file operations.

Compatible with LangChain DeepAgents backend interface.

Backend Types:
- StateBackend: Ephemeral in-memory storage (per-thread)
- FilesystemBackend: Real filesystem access (optionally sandboxed)
- StoreBackend: Persistent key-value storage (cross-thread)
- CompositeBackend: Route operations to multiple backends by path prefix
- BaseSandbox: Abstract base for remote sandboxes (Docker, Modal, etc.)

**Example**:

    ```python
    from spoon_ai.backends import (
        StateBackend,
        FilesystemBackend,
        create_state_backend,
    )

    # Create a state backend
    backend, runtime = create_state_backend()

    # Write a file
    result = backend.write("/notes.txt", "Hello, World!")
    if result.error:
        print(f"Error: {result.error}")
    else:
        print(f"Created: {result.path}")

    # Read it back
    content = backend.read("/notes.txt")
    print(content)
    ```

<a id="spoon_ai.backends.protocol.FileOperationError"></a>

#### `FileOperationError`

Standardized error codes for file upload/download operations.

These represent common, recoverable errors that an LLM can understand and potentially fix:

- ``file_not_found``: The requested file doesn't exist (download)
- ``permission_denied``: Access denied for the operation
- ``is_directory``: Attempted to download a directory as a file
- ``invalid_path``: Path syntax is malformed or contains invalid characters

**Example**:

    ```python
    response = backend.download_files(["/nonexistent.txt"])
    if response[0].error == "file_not_found":
        print("File does not exist")
    ```

<a id="spoon_ai.backends.protocol.FileDownloadResponse"></a>

## `FileDownloadResponse` Objects

```python
@dataclass
class FileDownloadResponse()
```

Result of a single file download operation.

The response is designed to allow partial success in batch operations.
The errors are standardized using FileOperationError literals
for certain recoverable conditions for use cases that involve
LLMs performing file operations.

**Attributes**:

- `path` - The file path that was requested. Included for easy correlation
  when processing batch results, especially useful for error messages.
- `content` - File contents as bytes on success, None on failure.
- `error` - Standardized error code on failure, None on success.
  Uses FileOperationError literal for structured, LLM-actionable error reporting.
  

**Examples**:

  &gt;&gt;&gt; # Success
  &gt;&gt;&gt; FileDownloadResponse(path="/app/config.json", content=b"&#123;...&#125;", error=None)
  &gt;&gt;&gt; # Failure
  &gt;&gt;&gt; FileDownloadResponse(path="/wrong/path.txt", content=None, error="file_not_found")

<a id="spoon_ai.backends.protocol.FileUploadResponse"></a>

## `FileUploadResponse` Objects

```python
@dataclass
class FileUploadResponse()
```

Result of a single file upload operation.

The response is designed to allow partial success in batch operations.
The errors are standardized using FileOperationError literals
for certain recoverable conditions for use cases that involve
LLMs performing file operations.

**Attributes**:

- `path` - The file path that was requested. Included for easy correlation
  when processing batch results and for clear error messages.
- `error` - Standardized error code on failure, None on success.
  Uses FileOperationError literal for structured, LLM-actionable error reporting.
  

**Examples**:

  &gt;&gt;&gt; # Success
  &gt;&gt;&gt; FileUploadResponse(path="/app/data.txt", error=None)
  &gt;&gt;&gt; # Failure
  &gt;&gt;&gt; FileUploadResponse(path="/readonly/file.txt", error="permission_denied")

<a id="spoon_ai.backends.protocol.FileInfo"></a>

## `FileInfo` Objects

```python
class FileInfo(TypedDict)
```

Structured file listing info.

Minimal contract used across backends. Only "path" is required.
Other fields are best-effort and may be absent depending on backend.

**Attributes**:

- `path` - Absolute file path (required)
- `is_dir` - True if directory (optional)
- `size` - File size in bytes (optional, approximate)
- `modified_at` - ISO 8601 timestamp if known (optional)
  

**Example**:

    ```python
    files = backend.ls_info("/workspace")
    for f in files:
        print(f"Path: {f['path']}, Is Dir: {f.get('is_dir', False)}")
    ```

<a id="spoon_ai.backends.protocol.GrepMatch"></a>

## `GrepMatch` Objects

```python
class GrepMatch(TypedDict)
```

Structured grep match entry.

Represents a single match from a grep search operation.

**Attributes**:

- `path` - Absolute file path where match was found
- `line` - Line number (1-indexed)
- `text` - Full line content containing the match
  

**Example**:

    ```python
    matches = backend.grep_raw("TODO", path="/src")
    for m in matches:
        print(f"{m['path']}:{m['line']}: {m['text']}")
    ```

<a id="spoon_ai.backends.protocol.WriteResult"></a>

## `WriteResult` Objects

```python
@dataclass
class WriteResult()
```

Result from backend write operations.

**Attributes**:

- `error` - Error message on failure, None on success.
- `path` - Absolute path of written file, None on failure.
- `files_update` - State update dict for checkpoint backends, None for external storage.
  Checkpoint backends populate this with &#123;file_path: file_data&#125; for state sync.
  External backends set None (already persisted to disk/S3/database/etc).
  

**Examples**:

  &gt;&gt;&gt; # Checkpoint storage (state backend)
  &gt;&gt;&gt; WriteResult(path="/f.txt", files_update=&#123;"/f.txt": &#123;...&#125;&#125;)
  &gt;&gt;&gt; # External storage (filesystem backend)
  &gt;&gt;&gt; WriteResult(path="/f.txt", files_update=None)
  &gt;&gt;&gt; # Error
  &gt;&gt;&gt; WriteResult(error="File '/f.txt' already exists")

<a id="spoon_ai.backends.protocol.EditResult"></a>

## `EditResult` Objects

```python
@dataclass
class EditResult()
```

Result from backend edit operations.

**Attributes**:

- `error` - Error message on failure, None on success.
- `path` - Absolute path of edited file, None on failure.
- `files_update` - State update dict for checkpoint backends, None for external storage.
  Checkpoint backends populate this with &#123;file_path: file_data&#125; for state sync.
  External backends set None (already persisted to disk/S3/database/etc).
- `occurrences` - Number of replacements made, None on failure.
  

**Examples**:

  &gt;&gt;&gt; # Checkpoint storage with single replacement
  &gt;&gt;&gt; EditResult(path="/f.txt", files_update=&#123;"/f.txt": &#123;...&#125;&#125;, occurrences=1)
  &gt;&gt;&gt; # External storage with replace_all
  &gt;&gt;&gt; EditResult(path="/f.txt", files_update=None, occurrences=5)
  &gt;&gt;&gt; # Error - string not found
  &gt;&gt;&gt; EditResult(error="String not found in file")
  &gt;&gt;&gt; # Error - multiple occurrences without replace_all
  &gt;&gt;&gt; EditResult(error="String appears 3 times. Use replace_all=True")

<a id="spoon_ai.backends.protocol.ExecuteResponse"></a>

## `ExecuteResponse` Objects

```python
@dataclass
class ExecuteResponse()
```

Result of code execution.

Simplified schema optimized for LLM consumption.

**Attributes**:

- `output` - Combined stdout and stderr output of the executed command.
- `exit_code` - The process exit code. 0 indicates success, non-zero indicates failure.
- `truncated` - Whether the output was truncated due to backend limitations.
  

**Example**:

    ```python
    result = sandbox.execute("ls -la /workspace")
    if result.exit_code == 0:
        print(result.output)
    else:
        print(f"Command failed with exit code {result.exit_code}")
    ```

<a id="spoon_ai.backends.protocol.ExecuteResponse.output"></a>

#### `output`

Combined stdout and stderr output of the executed command.

<a id="spoon_ai.backends.protocol.ExecuteResponse.exit_code"></a>

#### `exit_code`

The process exit code. 0 indicates success, non-zero indicates failure.

<a id="spoon_ai.backends.protocol.ExecuteResponse.truncated"></a>

#### `truncated`

Whether the output was truncated due to backend limitations.

<a id="spoon_ai.backends.protocol.BackendRuntime"></a>

## `BackendRuntime` Objects

```python
@dataclass
class BackendRuntime()
```

Runtime context for backend operations.

Provides access to agent state and configuration without
exposing the entire agent instance. This is an independent
implementation that doesn't depend on LangChain's ToolRuntime.

**Attributes**:

- `state` - Mutable state dictionary for the current execution.
- `config` - Immutable configuration dictionary.
- `store` - Optional persistent store for cross-session data.
  

**Example**:

    ```python
    runtime = BackendRuntime(
        state={"files": {}},
        config={"max_file_size": 1024 * 1024},
    )

    # Access state
    files = runtime.get_state("files", {})

    # Update state
    runtime.set_state("last_read", "/notes.txt")
    ```

<a id="spoon_ai.backends.protocol.BackendRuntime.store"></a>

#### `store`

Optional persistent store

<a id="spoon_ai.backends.protocol.BackendRuntime.get_state"></a>

#### `get_state`

```python
def get_state(key: str, default: Any = None) -> Any
```

Get state value by key.

**Arguments**:

- `key` - State key to retrieve.
- `default` - Default value if key not found.
  

**Returns**:

  State value or default.

<a id="spoon_ai.backends.protocol.BackendRuntime.set_state"></a>

#### `set_state`

```python
def set_state(key: str, value: Any) -> None
```

Set state value.

**Arguments**:

- `key` - State key to set.
- `value` - Value to store.

<a id="spoon_ai.backends.protocol.BackendProtocol"></a>

## `BackendProtocol` Objects

```python
class BackendProtocol(abc.ABC)
```

Protocol for pluggable memory backends (single, unified).

Backends can store files in different locations (state, filesystem, database, etc.)
and provide a uniform interface for file operations.

All file data is represented as dicts with the following structure::

    &#123;
        "content": list[str],      # Lines of text content
        "created_at": str,         # ISO format timestamp
        "modified_at": str,        # ISO format timestamp
    &#125;

Implementing a Backend:
    To create a custom backend, subclass BackendProtocol and implement
    all abstract methods::

        class MyBackend(BackendProtocol):
            def ls_info(self, path: str) -&gt; list[FileInfo]:
                # List directory contents
                ...

            def read(self, file_path: str, offset: int = 0, limit: int = 2000) -&gt; str:
                # Read file with line numbers
                ...

            # ... implement other abstract methods

<a id="spoon_ai.backends.protocol.BackendProtocol.ls_info"></a>

#### `ls_info`

```python
@abc.abstractmethod
def ls_info(path: str) -> List[FileInfo]
```

List all files in a directory with metadata.

**Arguments**:

- `path` - Absolute path to the directory to list. Must start with '/'.
  

**Returns**:

  List of FileInfo dicts containing file metadata:
  
  - ``path`` (required): Absolute file path
  - ``is_dir`` (optional): True if directory
  - ``size`` (optional): File size in bytes
  - ``modified_at`` (optional): ISO 8601 timestamp
  

**Example**:

    ```python
    files = backend.ls_info("/workspace/src")
    for f in files:
        if f.get("is_dir"):
            print(f"📁 {f['path']}")
        else:
            print(f"📄 {f['path']} ({f.get('size', '?')} bytes)")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.als_info"></a>

#### `als_info`

```python
async def als_info(path: str) -> List[FileInfo]
```

Async version of ls_info.

<a id="spoon_ai.backends.protocol.BackendProtocol.read"></a>

#### `read`

```python
@abc.abstractmethod
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

**Arguments**:

- `file_path` - Absolute path to the file to read. Must start with '/'.
- `offset` - Line number to start reading from (0-indexed). Default: 0.
- `limit` - Maximum number of lines to read. Default: 2000.
  

**Returns**:

  String containing file content formatted with line numbers (cat -n format),
  starting at line 1. Lines longer than 2000 characters are truncated.
  
  Returns an error string if the file doesn't exist or can't be read.
  

**Notes**:

  - Use pagination (offset/limit) for large files to avoid context overflow
  - First scan: ``read(path, limit=100)`` to see file structure
  - Read more: ``read(path, offset=100, limit=200)`` for next section
  - ALWAYS read a file before editing it
  - If file exists but is empty, you'll receive a system reminder warning
  

**Example**:

    ```python
    # Read first 100 lines
    content = backend.read("/workspace/main.py", limit=100)
    print(content)
    # Output:
    #      1	import os
    #      2	import sys
    #      3
    #      4	def main():
    #      ...
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aread"></a>

#### `aread`

```python
async def aread(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Async version of read.

<a id="spoon_ai.backends.protocol.BackendProtocol.write"></a>

#### `write`

```python
@abc.abstractmethod
def write(file_path: str, content: str) -> WriteResult
```

Write content to a new file in the filesystem, error if file exists.

**Arguments**:

- `file_path` - Absolute path where the file should be created.
  Must start with '/'.
- `content` - String content to write to the file.
  

**Returns**:

  WriteResult with:
  - ``path``: Absolute path of created file (on success)
  - ``error``: Error message (on failure)
  - ``files_update``: State dict for checkpoint backends
  

**Notes**:

  This method creates NEW files only. To modify existing files,
  use the ``edit()`` method instead.
  

**Example**:

    ```python
    result = backend.write("/workspace/hello.txt", "Hello, World!")
    if result.error:
        print(f"Failed: {result.error}")
    else:
        print(f"Created: {result.path}")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.awrite"></a>

#### `awrite`

```python
async def awrite(file_path: str, content: str) -> WriteResult
```

Async version of write.

<a id="spoon_ai.backends.protocol.BackendProtocol.edit"></a>

#### `edit`

```python
@abc.abstractmethod
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Perform exact string replacements in an existing file.

**Arguments**:

- `file_path` - Absolute path to the file to edit. Must start with '/'.
- `old_string` - Exact string to search for and replace.
  Must match exactly including whitespace and indentation.
- `new_string` - String to replace old_string with.
  Must be different from old_string.
- `replace_all` - If True, replace all occurrences. If False (default),
  old_string must be unique in the file or the edit fails.
  

**Returns**:

  EditResult with:
  - ``path``: Absolute path of edited file (on success)
  - ``occurrences``: Number of replacements made (on success)
  - ``error``: Error message (on failure)
  - ``files_update``: State dict for checkpoint backends
  

**Notes**:

  - ALWAYS read the file first to understand its current content
  - The old_string must match EXACTLY, including whitespace
  - If old_string appears multiple times and replace_all=False, the edit fails
  

**Example**:

    ```python
    # Replace a single occurrence
    result = backend.edit(
        "/workspace/config.py",
        old_string="DEBUG = False",
        new_string="DEBUG = True"
    )

    # Replace all occurrences
    result = backend.edit(
        "/workspace/code.py",
        old_string="old_function",
        new_string="new_function",
        replace_all=True
    )
    print(f"Replaced {result.occurrences} occurrences")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aedit"></a>

#### `aedit`

```python
async def aedit(file_path: str,
                old_string: str,
                new_string: str,
                replace_all: bool = False) -> EditResult
```

Async version of edit.

<a id="spoon_ai.backends.protocol.BackendProtocol.grep_raw"></a>

#### `grep_raw`

```python
@abc.abstractmethod
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> List[GrepMatch] | str
```

Search for a literal text pattern in files.

**Arguments**:

- `pattern` - Literal string to search for (NOT regex).
  Performs exact substring matching within file content.
- `Example` - "TODO" matches any line containing "TODO"
  
- `path` - Optional directory path to search in.
  If None, searches in current working directory.
- `Example` - "/workspace/src"
  
- `glob` - Optional glob pattern to filter which FILES to search.
  Filters by filename/path, not content.
  Supports standard glob wildcards:
  
  - ``*`` matches any characters in filename
  - ``**`` matches any directories recursively
  - ``?`` matches single character
  - ``[abc]`` matches one character from set
  

**Examples**:

  - ``"*.py"`` - only search Python files
  - ``"**/*.txt"`` - search all .txt files recursively
  - ``"src/**/*.js"`` - search JS files under src/
  - ``"test[0-9].txt"`` - search test0.txt, test1.txt, etc.
  

**Returns**:

  On success: list[GrepMatch] with structured results containing:
  - path: Absolute file path
  - line: Line number (1-indexed)
  - text: Full line content containing the match
  
  On error: str with error message (e.g., invalid path, permission denied)
  

**Example**:

    ```python
    # Search for TODOs in Python files
    matches = backend.grep_raw("TODO", path="/workspace", glob="*.py")
    for m in matches:
        print(f"{m['path']}:{m['line']}: {m['text']}")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.agrep_raw"></a>

#### `agrep_raw`

```python
async def agrep_raw(pattern: str,
                    path: Optional[str] = None,
                    glob: Optional[str] = None) -> List[GrepMatch] | str
```

Async version of grep_raw.

<a id="spoon_ai.backends.protocol.BackendProtocol.glob_info"></a>

#### `glob_info`

```python
@abc.abstractmethod
def glob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Find files matching a glob pattern.

**Arguments**:

- `pattern` - Glob pattern with wildcards to match file paths.
  Supports standard glob syntax:
  
  - ``*`` matches any characters within a filename/directory
  - ``**`` matches any directories recursively
  - ``?`` matches a single character
  - ``[abc]`` matches one character from set
  
- `path` - Base directory to search from. Default: "/" (root).
  The pattern is applied relative to this path.
  

**Returns**:

  List of FileInfo dicts for matching files.
  

**Example**:

    ```python
    # Find all Python files
    py_files = backend.glob_info("**/*.py", path="/workspace")

    # Find config files in root
    configs = backend.glob_info("*.json", path="/workspace")

    # Find test files
    tests = backend.glob_info("**/test_*.py", path="/workspace")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aglob_info"></a>

#### `aglob_info`

```python
async def aglob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Async version of glob_info.

<a id="spoon_ai.backends.protocol.BackendProtocol.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Upload multiple files to the backend.

This API is designed to allow developers to use it either directly or
by exposing it to LLMs via custom tools. Default implementation uses
write() for each file.

**Arguments**:

- `files` - List of (path, content) tuples to upload.
  

**Returns**:

  List of FileUploadResponse objects, one per input file.
  Response order matches input order (response[i] for files[i]).
  Check the error field to determine success/failure per file.
  

**Example**:

    ```python
    responses = backend.upload_files([
        ("/app/config.json", b'{"key": "value"}'),
        ("/app/data.txt", b"content here"),
    ])
    for resp in responses:
        if resp.error:
            print(f"Failed {resp.path}: {resp.error}")
        else:
            print(f"Uploaded {resp.path}")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aupload_files"></a>

#### `aupload_files`

```python
async def aupload_files(
        files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Async version of upload_files.

<a id="spoon_ai.backends.protocol.BackendProtocol.download_files"></a>

#### `download_files`

```python
def download_files(paths: List[str]) -> List[FileDownloadResponse]
```

Download multiple files from the backend.

This API is designed to allow developers to use it either directly or
by exposing it to LLMs via custom tools. Default implementation uses
read() for each file.

**Arguments**:

- `paths` - List of file paths to download.
  

**Returns**:

  List of FileDownloadResponse objects, one per input path.
  Response order matches input order (response[i] for paths[i]).
  Check the error field to determine success/failure per file.
  

**Example**:

    ```python
    responses = backend.download_files([
        "/app/config.json",
        "/app/data.txt",
    ])
    for resp in responses:
        if resp.error:
            print(f"Failed {resp.path}: {resp.error}")
        else:
            print(f"Downloaded {resp.path}: {len(resp.content)} bytes")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.adownload_files"></a>

#### `adownload_files`

```python
async def adownload_files(paths: List[str]) -> List[FileDownloadResponse]
```

Async version of download_files.

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol"></a>

## `SandboxBackendProtocol` Objects

```python
class SandboxBackendProtocol(BackendProtocol)
```

Protocol for sandboxed backends with isolated runtime.

Sandboxed backends run in isolated environments (e.g., separate processes,
containers) and communicate via defined interfaces. This extends
BackendProtocol with command execution capabilities.

Use Cases:
- Docker containers for isolated code execution
- Modal/Daytona for cloud-based sandboxes
- Local subprocess sandboxes
- Remote SSH execution

**Example**:

    ```python
    class DockerSandbox(SandboxBackendProtocol):
        def __init__(self, container_id: str):
            self._container_id = container_id

        @property
        def id(self) -> str:
            return f"docker-{self._container_id}"

        def execute(self, command: str) -> ExecuteResponse:
            result = docker.exec_run(self._container_id, command)
            return ExecuteResponse(
                output=result.output.decode(),
                exit_code=result.exit_code
            )

        # ... implement other methods using execute()
    ```

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol.execute"></a>

#### `execute`

```python
@abc.abstractmethod
def execute(command: str) -> ExecuteResponse
```

Execute a command in the sandbox.

Simplified interface optimized for LLM consumption.

**Arguments**:

- `command` - Full shell command string to execute.
  

**Returns**:

  ExecuteResponse with:
  - ``output``: Combined stdout and stderr
  - ``exit_code``: Process exit code (0 = success)
  - ``truncated``: Whether output was truncated
  

**Example**:

            ```python
            result = sandbox.execute("python3 -c 'print(1+1)'")
            if result.exit_code == 0:
                print(f"Output: {result.output}")  # "2
"
            else:
                print(f"Failed: {result.output}")
            ```

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async version of execute.

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol.id"></a>

#### `id`

```python
@property
@abc.abstractmethod
def id() -> str
```

Unique identifier for this sandbox instance.

Used for tracking, logging, and distinguishing between
multiple sandbox instances.

**Returns**:

  Unique string identifier (e.g., "docker-abc123", "modal-xyz789")

<a id="spoon_ai.backends.protocol.BackendFactory"></a>

#### `BackendFactory`

Factory function that creates a backend from a runtime context.

**Example**:

    ```python
    def my_backend_factory(runtime: BackendRuntime) -> BackendProtocol:
        return StateBackend(runtime)

    # Use with agent
    agent = ToolCallAgent(backend=my_backend_factory, ...)
    ```

<a id="spoon_ai.backends.protocol.BACKEND_TYPES"></a>

#### `BACKEND_TYPES`

Union type for backend specification.

Can be either:
- A BackendProtocol instance (pre-created backend)
- A BackendFactory callable (creates backend from runtime)

<a id="spoon_ai.backends"></a>

# Module `spoon_ai.backends`

Pluggable Memory Backends for Deep Agents.

This module provides a unified interface for file operations across different
storage backends. Compatible with LangChain DeepAgents backend architecture.

Backend Types:
- StateBackend: Ephemeral in-memory storage (per-thread)
- FilesystemBackend: Real filesystem access (optionally sandboxed)
- StoreBackend: Persistent key-value storage (cross-thread)
- CompositeBackend: Route operations to multiple backends by path prefix
- BaseSandbox: Abstract base class for remote sandboxes (Docker, Modal, etc.)

Example Usage:
    ```python
    from spoon_ai.backends import (
        StateBackend,
        FilesystemBackend,
        StoreBackend,
        CompositeBackend,
        BaseSandbox,
        BackendRuntime,
        create_state_backend,
        create_filesystem_backend,
        create_store_backend,
        create_composite_backend,
    )

    # 1. Simple ephemeral storage
    backend, runtime = create_state_backend()
    backend.write("/notes.txt", "Hello!")
    print(backend.read("/notes.txt"))

    # 2. Real filesystem access
    backend = create_filesystem_backend(
        root_dir="/workspace",
        virtual_mode=True  # Sandbox to root_dir
    )

    # 3. Persistent database storage
    backend = create_store_backend(db_path="agent.db")

    # 4. Mixed storage with routing
    state_backend, _ = create_state_backend()
    store_backend = create_store_backend()
    fs_backend = create_filesystem_backend()

    backend = create_composite_backend(
        default=state_backend,
        routes={
            "/persistent/": store_backend,
            "/local/": fs_backend,
        }
    )

    # Operations route automatically
    backend.write("/temp.txt", "Ephemeral")         # -> state
    backend.write("/persistent/note.txt", "Saved")  # -> database
    backend.write("/local/code.py", "# Code")       # -> filesystem

    # 5. Remote sandbox (Docker, Modal, etc.)
    class DockerSandbox(BaseSandbox):
        def __init__(self, container_id: str):
            self._container_id = container_id

        @property
        def id(self) -> str:
            return f"docker-{self._container_id}"

        def execute(self, command: str) -> ExecuteResponse:
            # Run command in Docker container
            result = docker_exec(self._container_id, command)
            return ExecuteResponse(output=result.output, exit_code=result.exit_code)

    sandbox = DockerSandbox("my-container")
    sandbox.write("/app/config.json", '{"key": "value"}')
    content = sandbox.read("/app/config.json")
    ```

<a id="spoon_ai.backends.composite"></a>

# Module `spoon_ai.backends.composite`

CompositeBackend: Route operations to different backends based on path prefix.

Enables mixing multiple storage backends, e.g.:
- /ephemeral/* -&gt; StateBackend (in-memory)
- /persistent/* -&gt; StoreBackend (database)
- /local/* -&gt; FilesystemBackend (filesystem)

<a id="spoon_ai.backends.composite.CompositeBackend"></a>

## `CompositeBackend` Objects

```python
class CompositeBackend()
```

Route file operations to different backends based on path prefix.

The CompositeBackend dispatches operations to specialized backends based
on path prefixes. This allows mixing ephemeral, persistent, and filesystem
storage in a single agent.

**Example**:

    ```python
    from spoon_ai.backends import (
        CompositeBackend,
        StateBackend,
        StoreBackend,
        FilesystemBackend,
        BackendRuntime,
    )

    # Create backends
    runtime = BackendRuntime(state={"files": {}})
    state_backend = StateBackend(runtime)
    store_backend = StoreBackend(SQLiteStore("agent.db"))
    fs_backend = FilesystemBackend(root_dir="/workspace", virtual_mode=True)

    # Create composite with routes
    backend = CompositeBackend(
        default=state_backend,
        routes={
            "/persistent/": store_backend,
            "/local/": fs_backend,
        }
    )

    # Operations route automatically
    backend.write("/temp.txt", "Ephemeral")      # -> state_backend
    backend.write("/persistent/note.txt", "DB")  # -> store_backend
    backend.write("/local/code.py", "File")      # -> fs_backend
    ```

<a id="spoon_ai.backends.composite.CompositeBackend.__init__"></a>

#### `__init__`

```python
def __init__(default: BackendProtocol, routes: dict[str,
                                                    BackendProtocol]) -> None
```

Initialize CompositeBackend.

**Arguments**:

- `default` - Default backend for unmatched paths.
- `routes` - Dict mapping path prefixes to backends.
  Prefixes should end with '/' (e.g., "/persistent/").

<a id="spoon_ai.backends.composite.CompositeBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory.

<a id="spoon_ai.backends.composite.CompositeBackend.als_info"></a>

#### `als_info`

```python
async def als_info(path: str) -> list[FileInfo]
```

Async version of ls_info.

<a id="spoon_ai.backends.composite.CompositeBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content, routing to appropriate backend.

<a id="spoon_ai.backends.composite.CompositeBackend.aread"></a>

#### `aread`

```python
async def aread(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Async version of read.

<a id="spoon_ai.backends.composite.CompositeBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file, routing to appropriate backend.

<a id="spoon_ai.backends.composite.CompositeBackend.awrite"></a>

#### `awrite`

```python
async def awrite(file_path: str, content: str) -> WriteResult
```

Async version of write.

<a id="spoon_ai.backends.composite.CompositeBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file, routing to appropriate backend.

<a id="spoon_ai.backends.composite.CompositeBackend.aedit"></a>

#### `aedit`

```python
async def aedit(file_path: str,
                old_string: str,
                new_string: str,
                replace_all: bool = False) -> EditResult
```

Async version of edit.

<a id="spoon_ai.backends.composite.CompositeBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

<a id="spoon_ai.backends.composite.CompositeBackend.agrep_raw"></a>

#### `agrep_raw`

```python
async def agrep_raw(pattern: str,
                    path: Optional[str] = None,
                    glob: Optional[str] = None) -> list[GrepMatch] | str
```

Async version of grep_raw.

<a id="spoon_ai.backends.composite.CompositeBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Find files matching glob pattern.

<a id="spoon_ai.backends.composite.CompositeBackend.aglob_info"></a>

#### `aglob_info`

```python
async def aglob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Async version of glob_info.

<a id="spoon_ai.backends.composite.CompositeBackend.execute"></a>

#### `execute`

```python
def execute(command: str) -> ExecuteResponse
```

Execute a command via the default backend.

Only works if default backend implements SandboxBackendProtocol.

<a id="spoon_ai.backends.composite.CompositeBackend.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async version of execute.

<a id="spoon_ai.backends.composite.CompositeBackend.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Upload multiple files, batching by backend.

<a id="spoon_ai.backends.composite.CompositeBackend.aupload_files"></a>

#### `aupload_files`

```python
async def aupload_files(
        files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Async version of upload_files.

<a id="spoon_ai.backends.composite.CompositeBackend.download_files"></a>

#### `download_files`

```python
def download_files(paths: list[str]) -> list[FileDownloadResponse]
```

Download multiple files, batching by backend.

<a id="spoon_ai.backends.composite.CompositeBackend.adownload_files"></a>

#### `adownload_files`

```python
async def adownload_files(paths: list[str]) -> list[FileDownloadResponse]
```

Async version of download_files.

<a id="spoon_ai.backends.composite.create_composite_backend"></a>

#### `create_composite_backend`

```python
def create_composite_backend(
        default: BackendProtocol,
        routes: dict[str, BackendProtocol]) -> CompositeBackend
```

Create a CompositeBackend.

**Arguments**:

- `default` - Default backend for unmatched paths.
- `routes` - Dict mapping path prefixes to backends.
  

**Returns**:

  CompositeBackend instance.
  

**Example**:

    ```python
    backend = create_composite_backend(
        default=state_backend,
        routes={
            "/db/": store_backend,
            "/files/": fs_backend,
        }
    )
    ```

<a id="spoon_ai.backends.store"></a>

# Module `spoon_ai.backends.store`

StoreBackend: Persistent key-value store backend (cross-thread).

Uses a simple key-value store interface for persistent, cross-conversation storage.
Files persist across all threads and sessions.

<a id="spoon_ai.backends.store.BaseStore"></a>

## `BaseStore` Objects

```python
class BaseStore(abc.ABC)
```

Abstract base class for persistent stores.

Implementations can use SQLite, Redis, S3, or any other storage backend.

<a id="spoon_ai.backends.store.BaseStore.get"></a>

#### `get`

```python
@abc.abstractmethod
def get(namespace: tuple[str, ...], key: str) -> Optional[dict[str, Any]]
```

Get a value by key.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `key` - The key to retrieve.
  

**Returns**:

  The stored value dict, or None if not found.

<a id="spoon_ai.backends.store.BaseStore.put"></a>

#### `put`

```python
@abc.abstractmethod
def put(namespace: tuple[str, ...], key: str, value: dict[str, Any]) -> None
```

Store a value by key.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `key` - The key to store under.
- `value` - The value dict to store.

<a id="spoon_ai.backends.store.BaseStore.delete"></a>

#### `delete`

```python
@abc.abstractmethod
def delete(namespace: tuple[str, ...], key: str) -> None
```

Delete a value by key.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `key` - The key to delete.

<a id="spoon_ai.backends.store.BaseStore.search"></a>

#### `search`

```python
@abc.abstractmethod
def search(namespace: tuple[str, ...],
           query: Optional[str] = None,
           filter: Optional[dict[str, Any]] = None,
           limit: int = 100,
           offset: int = 0) -> list[dict[str, Any]]
```

Search for values in a namespace.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `query` - Optional search query.
- `filter` - Optional key-value filter.
- `limit` - Maximum results to return.
- `offset` - Number of results to skip.
  

**Returns**:

  List of matching items with 'key' and 'value' fields.

<a id="spoon_ai.backends.store.InMemoryStore"></a>

## `InMemoryStore` Objects

```python
class InMemoryStore(BaseStore)
```

Simple in-memory store implementation.

Useful for testing and development. Data is lost when process exits.

<a id="spoon_ai.backends.store.SQLiteStore"></a>

## `SQLiteStore` Objects

```python
class SQLiteStore(BaseStore)
```

SQLite-based persistent store.

Data persists across process restarts.

<a id="spoon_ai.backends.store.StoreBackend"></a>

## `StoreBackend` Objects

```python
class StoreBackend(BackendProtocol)
```

Backend that stores files in a persistent store (cross-thread).

Uses a key-value store for persistent, cross-conversation storage.
Files are organized via namespaces and persist across all threads.

**Example**:

    ```python
    store = SQLiteStore("agent_files.db")
    backend = StoreBackend(store)

    # Write persists across sessions
    backend.write("/notes.txt", "Important notes")

    # Read from any thread
    content = backend.read("/notes.txt")
    ```

<a id="spoon_ai.backends.store.StoreBackend.__init__"></a>

#### `__init__`

```python
def __init__(store: BaseStore,
             namespace: Optional[tuple[str, ...]] = None,
             assistant_id: Optional[str] = None)
```

Initialize StoreBackend.

**Arguments**:

- `store` - BaseStore implementation.
- `namespace` - Optional namespace tuple. Defaults to ("filesystem",).
- `assistant_id` - Optional assistant ID for multi-agent isolation.

<a id="spoon_ai.backends.store.StoreBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory.

<a id="spoon_ai.backends.store.StoreBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

<a id="spoon_ai.backends.store.StoreBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file with content.

<a id="spoon_ai.backends.store.StoreBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences.

<a id="spoon_ai.backends.store.StoreBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

<a id="spoon_ai.backends.store.StoreBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Find files matching glob pattern.

<a id="spoon_ai.backends.store.StoreBackend.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Upload multiple files to the store.

<a id="spoon_ai.backends.store.StoreBackend.download_files"></a>

#### `download_files`

```python
def download_files(paths: list[str]) -> list[FileDownloadResponse]
```

Download multiple files from the store.

<a id="spoon_ai.backends.store.create_store_backend"></a>

#### `create_store_backend`

```python
def create_store_backend(store: Optional[BaseStore] = None,
                         db_path: str = "store.db",
                         use_sqlite: bool = True,
                         namespace: Optional[tuple[str, ...]] = None,
                         assistant_id: Optional[str] = None) -> StoreBackend
```

Create a StoreBackend.

**Arguments**:

- `store` - Optional BaseStore instance. If not provided, creates one.
- `db_path` - Path to SQLite database (if using SQLite).
- `use_sqlite` - If True, use SQLite. Otherwise, use in-memory store.
- `namespace` - Optional namespace tuple.
- `assistant_id` - Optional assistant ID for isolation.
  

**Returns**:

  StoreBackend instance.
  

**Example**:

    ```python
    # Use SQLite for persistence
    backend = create_store_backend(db_path="agent.db")

    # Use in-memory store for testing
    backend = create_store_backend(use_sqlite=False)

    # With assistant isolation
    backend = create_store_backend(assistant_id="agent-001")
    ```

<a id="spoon_ai.backends.filesystem"></a>

# Module `spoon_ai.backends.filesystem`

FilesystemBackend: Read and write files directly from the filesystem.

Security features:
- Secure path resolution with root containment when in virtual_mode
- Prevent symlink-following on file I/O using O_NOFOLLOW when available
- Max file size enforcement

<a id="spoon_ai.backends.filesystem.FilesystemBackend"></a>

## `FilesystemBackend` Objects

```python
class FilesystemBackend(BackendProtocol)
```

Backend that reads and writes files directly from the filesystem.

Files are accessed using their actual filesystem paths. Relative paths are
resolved relative to the current working directory or root_dir.

**Example**:

    ```python
    # Real filesystem access
    backend = FilesystemBackend()
    content = backend.read("/path/to/file.txt")

    # Sandboxed to a directory
    backend = FilesystemBackend(
        root_dir="/workspace",
        virtual_mode=True
    )
    # "/file.txt" maps to "/workspace/file.txt"
    ```

<a id="spoon_ai.backends.filesystem.FilesystemBackend.__init__"></a>

#### `__init__`

```python
def __init__(root_dir: Optional[str | Path] = None,
             virtual_mode: bool = False,
             max_file_size_mb: int = 10) -> None
```

Initialize filesystem backend.

**Arguments**:

- `root_dir` - Optional root directory. If provided, all paths are
  resolved relative to this directory.
- `virtual_mode` - If True, treat paths as virtual absolute paths under
  root_dir. Disallows path traversal.
- `max_file_size_mb` - Maximum file size in MB for operations.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory (non-recursive).

**Arguments**:

- `path` - Absolute directory path.
  

**Returns**:

  List of FileInfo dicts for files and directories.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

**Arguments**:

- `file_path` - Absolute or relative file path.
- `offset` - Line offset to start reading from (0-indexed).
- `limit` - Maximum number of lines to read.
  

**Returns**:

  Formatted file content with line numbers, or error message.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file with content.

Returns WriteResult. External storage sets files_update=None.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences.

Returns EditResult. External storage sets files_update=None.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

Uses ripgrep if available, falls back to Python search.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Find files matching glob pattern.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Upload multiple files to the filesystem.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.download_files"></a>

#### `download_files`

```python
def download_files(paths: list[str]) -> list[FileDownloadResponse]
```

Download multiple files from the filesystem.

<a id="spoon_ai.backends.filesystem.create_filesystem_backend"></a>

#### `create_filesystem_backend`

```python
def create_filesystem_backend(root_dir: Optional[str | Path] = None,
                              virtual_mode: bool = False,
                              max_file_size_mb: int = 10) -> FilesystemBackend
```

Create a FilesystemBackend.

**Arguments**:

- `root_dir` - Root directory for file operations.
- `virtual_mode` - If True, sandbox paths to root_dir.
- `max_file_size_mb` - Maximum file size for operations.
  

**Returns**:

  FilesystemBackend instance.
  

**Example**:

    ```python
    # Access real filesystem
    backend = create_filesystem_backend()

    # Sandboxed to workspace
    backend = create_filesystem_backend(
        root_dir="/workspace",
        virtual_mode=True
    )
    ```

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

<a id="spoon_ai.agents.monitor"></a>

# Module `spoon_ai.agents.monitor`

<a id="spoon_ai.agents.spoon_react_skill"></a>

# Module `spoon_ai.agents.spoon_react_skill`

Skill-enabled production agent.

Combines SpoonReactAI with full skill system support.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill"></a>

## `SpoonReactSkill` Objects

```python
class SpoonReactSkill(SkillEnabledMixin, SpoonReactAI)
```

Production agent with full skill system support.

Combines:
- SpoonReactAI: Tool calling, MCP integration, x402 payment
- SkillEnabledMixin: Skill activation, context injection, auto-trigger

Usage:
    agent = SpoonReactSkill(name="my_agent")

    # Manual skill activation
    await agent.activate_skill("trading-analysis", &#123;"asset": "BTC"&#125;)

    # Run with auto-trigger
    result = await agent.run("Analyze ETH trading signals")
    # -&gt; Automatically activates matching skills

    # List skills
    print(agent.list_skills())
    print(agent.list_active_skills())

    # Deactivate
    await agent.deactivate_skill("trading-analysis")

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactSkill agent.

Initializes both SpoonReactAI and skill system components.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Execute agent with skill auto-activation.

Flow:
1. Auto-detect and activate relevant skills (if enabled)
2. Inject skill context into system prompt
3. Execute parent SpoonReactAI.run()

**Arguments**:

- `request` - User request/message
  

**Returns**:

  Agent response

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.initialize"></a>

#### `initialize`

```python
async def initialize(__context=None)
```

Initialize async components.

Extends SpoonReactAI.initialize() to also initialize skill system.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.add_skill_path"></a>

#### `add_skill_path`

```python
def add_skill_path(path: str) -> None
```

Add a path to search for skills.

**Arguments**:

- `path` - Directory path to add

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.discover_skills"></a>

#### `discover_skills`

```python
def discover_skills() -> int
```

Re-discover skills from all configured paths.

**Returns**:

  Number of skills discovered

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
                      content: MessageContent,
                      tool_call_id: Optional[str] = None,
                      tool_calls: Optional[List[ToolCall]] = None,
                      tool_name: Optional[str] = None,
                      timeout: Optional[float] = None) -> None
```

Thread-safe message addition with timeout protection.

Supports both text-only and multimodal content:
- Text: content="Hello world"
- Multimodal: content=[TextContent(...), ImageUrlContent(...)]

**Arguments**:

- `role` - Message role (user, assistant, tool)
- `content` - Text string or list of content blocks for multimodal messages
- `tool_call_id` - ID for tool responses
- `tool_calls` - List of tool calls for assistant messages
- `tool_name` - Name of the tool for tool responses
- `timeout` - Operation timeout in seconds

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_image"></a>

#### `add_message_with_image`

```python
async def add_message_with_image(role: Literal["user", "assistant"],
                                 text: str,
                                 image_url: Optional[str] = None,
                                 image_data: Optional[str] = None,
                                 image_media_type: str = "image/png",
                                 detail: Literal["auto", "low",
                                                 "high"] = "auto",
                                 timeout: Optional[float] = None) -> None
```

Convenience method to add a message with an image.

Supports both URL-based and base64-encoded images.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the image
- `image_url` - URL of the image (including data URLs)
- `image_data` - Base64-encoded image data
- `image_media_type` - MIME type for base64 images (e.g., "image/png")
- `detail` - Image detail level for processing
- `timeout` - Operation timeout in seconds
  

**Example**:

  # With image URL
  await agent.add_message_with_image(
  "user",
  "What's in this image?",
  image_url="https://example.com/image.png"
  )
  
  # With base64 data
  await agent.add_message_with_image(
  "user",
  "Describe this diagram",
  image_data="&lt;base64_string&gt;",
  image_media_type="image/png"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_pdf"></a>

#### `add_message_with_pdf`

```python
async def add_message_with_pdf(role: Literal["user", "assistant"],
                               text: str,
                               pdf_data: str,
                               filename: Optional[str] = None,
                               timeout: Optional[float] = None) -> None
```

Convenience method to add a message with a PDF document.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the PDF
- `pdf_data` - Base64-encoded PDF data
- `filename` - Optional filename for the PDF
- `timeout` - Operation timeout in seconds
  

**Example**:

  # With base64 PDF data
  await agent.add_message_with_pdf(
  "user",
  "Summarize this document",
  pdf_data="&lt;base64_string&gt;",
  filename="report.pdf"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_document"></a>

#### `add_message_with_document`

```python
async def add_message_with_document(role: Literal["user", "assistant"],
                                    text: str,
                                    document_data: str,
                                    media_type: str = "application/pdf",
                                    filename: Optional[str] = None,
                                    timeout: Optional[float] = None) -> None
```

Convenience method to add a message with a document.

Supports various document types including PDF, text, etc.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the document
- `document_data` - Base64-encoded document data
- `media_type` - MIME type of the document (default: application/pdf)
- `filename` - Optional filename for the document
- `timeout` - Operation timeout in seconds
  

**Example**:

  # With PDF document
  await agent.add_message_with_document(
  "user",
  "Analyze this report",
  document_data="&lt;base64_string&gt;",
  media_type="application/pdf",
  filename="annual_report.pdf"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_pdf_file"></a>

#### `add_message_with_pdf_file`

```python
async def add_message_with_pdf_file(role: Literal["user", "assistant"],
                                    text: str,
                                    file_path: str,
                                    timeout: Optional[float] = None) -> None
```

Convenience method to add a message with a PDF file from disk.

Automatically handles base64 encoding.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the PDF
- `file_path` - Path to the PDF file on disk
- `timeout` - Operation timeout in seconds
  

**Example**:

  await agent.add_message_with_pdf_file(
  "user",
  "Summarize this document",
  file_path="./documents/report.pdf"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_image_file"></a>

#### `add_message_with_image_file`

```python
async def add_message_with_image_file(role: Literal["user", "assistant"],
                                      text: str,
                                      file_path: str,
                                      detail: str = "auto",
                                      timeout: Optional[float] = None) -> None
```

Convenience method to add a message with an image file from disk.

Automatically handles base64 encoding and MIME type detection.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the image
- `file_path` - Path to the image file on disk
- `detail` - Image detail level (auto, low, high)
- `timeout` - Operation timeout in seconds
  

**Example**:

  await agent.add_message_with_image_file(
  "user",
  "What's in this image?",
  file_path="./images/photo.jpg"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_file"></a>

#### `add_message_with_file`

```python
async def add_message_with_file(role: Literal["user", "assistant"],
                                text: str,
                                file_path: str,
                                timeout: Optional[float] = None) -> None
```

Convenience method to add a message with any supported file from disk.

Automatically detects file type and handles base64 encoding.
Supports: PDF, images (png, jpg, gif, webp), text files.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the file
- `file_path` - Path to the file on disk
- `timeout` - Operation timeout in seconds
  

**Example**:

  # Works with any supported file type
  await agent.add_message_with_file("user", "Analyze this", "./report.pdf")
  await agent.add_message_with_file("user", "What's this?", "./photo.jpg")

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

Thread-safe run method with proper concurrency control, callback support, and Plan-Act-Reflect phases.

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

Thread-safe stuck detection.

Uses text_content property for comparison to handle both
text-only and multimodal messages.

<a id="spoon_ai.agents.base.BaseAgent.handle_stuck_state"></a>

#### `handle_stuck_state`

```python
async def handle_stuck_state()
```

Thread-safe stuck state handling

<a id="spoon_ai.agents.base.BaseAgent.estimate_token_count"></a>

#### `estimate_token_count`

```python
def estimate_token_count() -> int
```

Estimate the token count of current conversation context.

Uses a simple heuristic: ~4 characters per token (conservative estimate).
For more accurate counting, override this method with tiktoken or
model-specific tokenizers.

**Returns**:

  Estimated token count of all messages

<a id="spoon_ai.agents.base.BaseAgent.should_trigger_reflection"></a>

#### `should_trigger_reflection`

```python
def should_trigger_reflection() -> bool
```

Determine if reflection should be triggered based on token threshold.

LangChain-style token-based trigger:
Triggers when context tokens exceed reflect_token_threshold (default 85%)
of max_context_tokens.

**Returns**:

  True if reflection should be triggered

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

<a id="spoon_ai.agents.base.BaseAgent.get_agent_state"></a>

#### `get_agent_state`

```python
def get_agent_state(key: str, default: Any = None) -> Any
```

Get value from agent state (for middleware access).

**Arguments**:

- `key` - State key
- `default` - Default value if key not found
  

**Returns**:

  State value or default

<a id="spoon_ai.agents.base.BaseAgent.set_agent_state"></a>

#### `set_agent_state`

```python
def set_agent_state(key: str, value: Any) -> None
```

Set value in agent state (for middleware access).

**Arguments**:

- `key` - State key
- `value` - State value

<a id="spoon_ai.agents.base.BaseAgent.update_agent_state"></a>

#### `update_agent_state`

```python
def update_agent_state(updates: Dict[str, Any]) -> None
```

Bulk update agent state (for middleware access).

**Arguments**:

- `updates` - Dictionary of state updates

<a id="spoon_ai.agents.base.BaseAgent.get_diagnostics"></a>

#### `get_diagnostics`

```python
def get_diagnostics() -> Dict[str, Any]
```

Get diagnostic information about the agent's state

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
async def run(request: Optional[str] = None,
              timeout: Optional[float] = None) -> str
```

This ensures:
1. Thread-safe execution (no concurrent runs)
2. Proper timeout handling
3. Plan/Reflect/Finish phases are executed
4. Middleware hooks are called correctly

<a id="spoon_ai.agents.toolcall.ToolCallAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Override the step method to handle finish_reason termination properly.

<a id="spoon_ai.agents.toolcall.ToolCallAgent.execute_tool"></a>

#### `execute_tool`

```python
async def execute_tool(tool_call: ToolCall) -> str
```

Execute tool with middleware wrapping.

CRITICAL: This method now routes ALL tool executions through the middleware
pipeline, enabling HITL approval, observability, and other middleware features.

<a id="spoon_ai.agents.skill_mixin"></a>

# Module `spoon_ai.agents.skill_mixin`

Skill-enabled agent mixin.

Follows MCPClientMixin pattern for composable agent integration.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin"></a>

## `SkillEnabledMixin` Objects

```python
class SkillEnabledMixin()
```

Mixin that adds skill capabilities to agents.

Integrates with ReAct cycle by:
1. Injecting active skill instructions into system prompt
2. Adding skill tools to available_tools
3. Auto-triggering skills based on user input

Usage:
    class MyAgent(SkillEnabledMixin, SpoonReactAI):
        pass

    agent = MyAgent()
    await agent.activate_skill("trading-analysis")
    result = await agent.run("Analyze BTC")

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.activate_skill"></a>

#### `activate_skill`

```python
async def activate_skill(name: str,
                         context: Optional[Dict[str, Any]] = None) -> Skill
```

Activate a skill and refresh agent state.

**Arguments**:

- `name` - Skill name to activate
- `context` - Optional context data
  

**Returns**:

  Activated Skill instance

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_skill"></a>

#### `deactivate_skill`

```python
async def deactivate_skill(name: str) -> bool
```

Deactivate a skill.

**Arguments**:

- `name` - Skill name to deactivate
  

**Returns**:

  True if deactivated, False if not active

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.auto_activate_skills"></a>

#### `auto_activate_skills`

```python
async def auto_activate_skills(user_input: str) -> List[Skill]
```

Automatically activate skills matching user input.

Uses both keyword/pattern matching and LLM intent analysis.

**Arguments**:

- `user_input` - User's message
  

**Returns**:

  List of activated skills

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[str]
```

List all available skill names.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_active_skills"></a>

#### `list_active_skills`

```python
def list_active_skills() -> List[str]
```

List currently active skill names.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_info"></a>

#### `get_skill_info`

```python
def get_skill_info(name: str) -> Optional[Dict[str, Any]]
```

Get detailed information about a skill.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.is_skill_active"></a>

#### `is_skill_active`

```python
def is_skill_active(name: str) -> bool
```

Check if a skill is currently active.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_all_skills"></a>

#### `deactivate_all_skills`

```python
async def deactivate_all_skills() -> int
```

Deactivate all active skills.

**Returns**:

  Number of skills deactivated

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_stats"></a>

#### `get_skill_stats`

```python
def get_skill_stats() -> Dict[str, Any]
```

Get skill system statistics.

<a id="spoon_ai.agents"></a>

# Module `spoon_ai.agents`

<a id="spoon_ai.agents.subagents"></a>

# Module `spoon_ai.agents.subagents`

Subagent Orchestration System

Enables hierarchical agent delegation where a parent agent can create
and manage specialized child agents for complex tasks.

Compatible with LangChain DeepAgents SubAgentMiddleware interface.

Features:
- SubAgentSpec for defining subagents with tools and prompts
- CompiledSubAgent for using pre-built graphs as subagents
- Command return pattern for state updates
- State inheritance and isolation
- Hierarchical task delegation with recursion depth limits
- Automatic task tool generation
- General-purpose agent support

Usage:
    # Method 1: SubAgentSpec (simple cases)
    subagents = [
        SubAgentSpec(
            name="researcher",
            description="Specialized in research tasks",
            system_prompt="You are a research expert...",
            tools=[search_tool, summarize_tool]
        )
    ]

    # Method 2: CompiledSubAgent (complex cases with pre-built graph)
    custom_graph = StateGraph(...)
    custom_graph.add_node("analyze", analyze_node)
    compiled = custom_graph.compile()

    subagents = [
        CompiledSubAgent(
            name="complex_analyzer",
            description="Complex multi-step analysis",
            runnable=compiled
        )
    ]

    # Create parent agent with subagent support
    middleware = SubAgentMiddleware(subagents=subagents)
    agent = ToolCallAgent(middleware=[middleware], ...)

<a id="spoon_ai.agents.subagents.Command"></a>

## `Command` Objects

```python
@dataclass
class Command()
```

Command object for returning state updates and controlling execution flow.

Compatible with LangGraph Command interface. Used to:
1. Propagate state changes from subagent execution back to the parent agent
2. Resume from HITL interrupts with approval decisions

Example - State updates from subagent:
    ```python
    return Command(
        update={
            "messages": [tool_message],
            "some_state_key": new_value,
        }
    )
    ```

Example - Resume from HITL interrupt:
    ```python
    # After receiving interrupt with action_requests
    result = agent.invoke(
        Command(resume={
            "decisions": [
                {"type": "approve"},
                {"type": "edit", "args": {"path": "/new/path"}},
                {"type": "reject", "reason": "Too dangerous"},
            ]
        }),
        config=config
    )
    ```

<a id="spoon_ai.agents.subagents.Command.update"></a>

#### `update`

State updates to apply after subagent execution.

<a id="spoon_ai.agents.subagents.Command.goto"></a>

#### `goto`

Optional node to go to next (for graph-based agents).

<a id="spoon_ai.agents.subagents.Command.resume"></a>

#### `resume`

Resume data for HITL interrupts. Contains 'decisions' list.

<a id="spoon_ai.agents.subagents.Command.is_resume"></a>

#### `is_resume`

```python
@property
def is_resume() -> bool
```

Check if this is a resume command.

<a id="spoon_ai.agents.subagents.Command.get_decisions"></a>

#### `get_decisions`

```python
def get_decisions() -> List[Dict[str, Any]]
```

Get decisions from resume data.

**Returns**:

  List of decision dicts with 'type', optional 'args', optional 'reason'

<a id="spoon_ai.agents.subagents.SubAgentSpec"></a>

## `SubAgentSpec` Objects

```python
@dataclass
class SubAgentSpec()
```

Specification for a subagent.

This defines how a subagent should be configured and what
capabilities it has. When using SubAgentSpec, the middleware
will automatically create a ToolCallAgent instance.

Compatible with LangChain DeepAgents SubAgent interface.

<a id="spoon_ai.agents.subagents.SubAgentSpec.description"></a>

#### `description`

For parent agent to decide when to delegate

<a id="spoon_ai.agents.subagents.CompiledSubAgent"></a>

## `CompiledSubAgent` Objects

```python
@dataclass
class CompiledSubAgent()
```

A pre-compiled agent/graph specification.

Use this when you have a complex, pre-built graph (StateGraph/CompiledGraph)
that you want to use as a subagent. This is useful for:
- Complex multi-step workflows
- Custom graph topologies
- Reusing existing graph implementations

Compatible with LangChain DeepAgents CompiledSubAgent interface.

**Example**:

    ```python
    from spoon_ai.graph import StateGraph

    # Build custom graph
    graph = StateGraph(MyState)
    graph.add_node("analyze", analyze_node)
    graph.add_node("synthesize", synthesize_node)
    graph.add_edge("analyze", "synthesize")
    compiled = graph.compile()

    # Use as subagent
    subagent = CompiledSubAgent(
        name="analyzer",
        description="Complex multi-step analysis",
        runnable=compiled
    )
    ```

<a id="spoon_ai.agents.subagents.CompiledSubAgent.runnable"></a>

#### `runnable`

CompiledGraph or any Runnable-like object with invoke/ainvoke

<a id="spoon_ai.agents.subagents.SubAgentManager"></a>

## `SubAgentManager` Objects

```python
class SubAgentManager()
```

Manages subagent creation and task delegation with recursion safety.

Supports both SubAgentSpec (auto-compiled) and CompiledSubAgent (pre-built).
Returns Command objects for state updates.
Compatible with LangChain DeepAgents subagent management.

<a id="spoon_ai.agents.subagents.SubAgentManager.__init__"></a>

#### `__init__`

```python
def __init__(
        parent_agent: Any,
        subagent_specs: List[SubAgentType],
        default_middleware: Optional[List[AgentMiddleware]] = None,
        default_tools: Optional[List[BaseTool]] = None,
        default_interrupt_on: Optional[Dict[str,
                                            Union[bool,
                                                  InterruptOnConfig]]] = None,
        max_depth: int = 3,
        general_purpose_agent: bool = True)
```

Initialize subagent manager.

**Arguments**:

- `parent_agent` - The parent agent instance
- `subagent_specs` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `default_middleware` - Default middleware for all subagents
- `default_tools` - Default tools for general-purpose agent
- `default_interrupt_on` - Default HITL configuration for all subagents.
  This is also the fallback for any subagents that don't specify
  their own interrupt_on configuration.
- `max_depth` - Maximum recursion depth for subagent delegation (default: 3)
- `general_purpose_agent` - Whether to include a general-purpose subagent (default: True)

<a id="spoon_ai.agents.subagents.SubAgentManager.get_subagent"></a>

#### `get_subagent`

```python
def get_subagent(name: str) -> Optional[Any]
```

Get or create a subagent instance.

<a id="spoon_ai.agents.subagents.SubAgentManager.delegate_task"></a>

#### `delegate_task`

```python
async def delegate_task(
        subagent_name: str,
        task_description: str,
        inherit_state: bool = True,
        tool_call_id: Optional[str] = None) -> Union[str, Command]
```

Delegate a task to a subagent with recursion depth checking.

**Arguments**:

- `subagent_name` - Name of the subagent
- `task_description` - Task for the subagent
- `inherit_state` - Whether to inherit parent state
- `tool_call_id` - Tool call ID for Command return pattern
  

**Returns**:

  Subagent's final response as string, or Command with state updates

<a id="spoon_ai.agents.subagents.SubAgentManager.create_task_tool"></a>

#### `create_task_tool`

```python
def create_task_tool(task_description: Optional[str] = None) -> BaseTool
```

Create the 'task' tool for delegating to subagents.

**Arguments**:

- `task_description` - Custom description for the task tool.
  Supports &#123;available_agents&#125; placeholder.
  

**Returns**:

  Task delegation tool

<a id="spoon_ai.agents.subagents.SubAgentMiddleware"></a>

## `SubAgentMiddleware` Objects

```python
class SubAgentMiddleware(AgentMiddleware)
```

Middleware that adds subagent orchestration capabilities.

This middleware:
1. Injects the 'task' tool for delegation
2. Manages subagent lifecycle
3. Handles state inheritance
4. Enforces recursion depth limits
5. Returns Command objects for state updates
6. Propagates HITL configuration to subagents

Supports both SubAgentSpec (auto-compiled) and CompiledSubAgent (pre-built graphs).

Compatible with LangChain DeepAgents SubAgentMiddleware interface.

Usage:
    ```python
    # Method 1: SubAgentSpec (simple cases)
    middleware = SubAgentMiddleware(subagents=[
        SubAgentSpec(
            name="researcher",
            description="Research and gather information",
            system_prompt="You are a research expert...",
            tools=[search_tool]
        )
    ])

    # Method 2: CompiledSubAgent (complex cases)
    custom_graph = StateGraph(...)
    compiled = custom_graph.compile()

    middleware = SubAgentMiddleware(subagents=[
        CompiledSubAgent(
            name="analyzer",
            description="Complex analysis workflow",
            runnable=compiled
        )
    ])

    # Method 3: With HITL configuration inherited by subagents
    middleware = SubAgentMiddleware(
        subagents=[...],
        default_interrupt_on={
            "delete_file": True,
            "send_email": {"allowed_decisions": ["approve", "reject"]},
        },
        general_purpose_agent=True,
    )

    # Method 4: Subagent with custom interrupt_on (overrides default)
    middleware = SubAgentMiddleware(
        subagents=[
            SubAgentSpec(
                name="careful_agent",
                description="Agent that requires extra approval",
                interrupt_on={"all_tools": True},  # Overrides default
                ...
            )
        ],
        default_interrupt_on={"delete_file": True},
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.agents.subagents.SubAgentMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(
        subagents: Optional[List[SubAgentType]] = None,
        default_middleware: Optional[List[AgentMiddleware]] = None,
        default_tools: Optional[List[BaseTool]] = None,
        default_interrupt_on: Optional[Dict[str,
                                            Union[bool,
                                                  InterruptOnConfig]]] = None,
        max_depth: int = 3,
        general_purpose_agent: bool = True,
        task_description: Optional[str] = None)
```

Initialize subagent middleware.

**Arguments**:

- `subagents` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `default_middleware` - Default middleware for all subagents
- `default_tools` - Default tools for general-purpose agent
- `default_interrupt_on` - Default HITL configuration for all subagents.
  This is used for the general-purpose agent and as a fallback
  for any SubAgentSpec that doesn't specify its own interrupt_on.
- `max_depth` - Maximum recursion depth for subagent delegation
- `general_purpose_agent` - Whether to include a general-purpose subagent (default: True)
- `task_description` - Custom description for the task tool.
  If None, uses default template.
  Supports &#123;available_agents&#125; placeholder for dynamic agent list.

<a id="spoon_ai.agents.subagents.SubAgentMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize subagent manager with parent agent reference.

<a id="spoon_ai.agents.subagents.add_subagent_support"></a>

#### `add_subagent_support`

```python
def add_subagent_support(
    agent: Any,
    subagents: List[SubAgentType],
    max_depth: int = 3,
    general_purpose_agent: bool = True,
    task_description: Optional[str] = None,
    default_interrupt_on: Optional[Dict[str, Union[bool,
                                                   InterruptOnConfig]]] = None
) -> Any
```

Add subagent support to an existing agent.

**Arguments**:

- `agent` - The agent instance
- `subagents` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `max_depth` - Maximum recursion depth for subagent delegation
- `general_purpose_agent` - Whether to include a general-purpose subagent
- `task_description` - Custom description for the task tool
- `default_interrupt_on` - Default HITL configuration for all subagents
  

**Returns**:

  The agent with subagent support

<a id="spoon_ai.agents.subagents.create_general_purpose_subagent"></a>

#### `create_general_purpose_subagent`

```python
def create_general_purpose_subagent(
        name: str = "general-purpose",
        description: str = DEFAULT_GENERAL_PURPOSE_DESCRIPTION,
        tools: Optional[List[BaseTool]] = None) -> SubAgentSpec
```

Create a general-purpose subagent specification.

<a id="spoon_ai.agents.subagents.create_compiled_subagent"></a>

#### `create_compiled_subagent`

```python
def create_compiled_subagent(name: str, description: str,
                             graph: Any) -> CompiledSubAgent
```

Create a CompiledSubAgent from a graph.

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
class SpoonReactAI(MCPClientMixin, ToolCallAgent)
```

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactAI with both ToolCallAgent and MCPClientMixin initialization

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.connect"></a>

#### `connect`

```python
async def connect()
```

Establish connection to MCP server.

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

<a id="spoon_ai.agents.react"></a>

# Module `spoon_ai.agents.react`

<a id="spoon_ai.skills.models"></a>

# Module `spoon_ai.skills.models`

Skill system data models.

Pydantic schemas for skill definition, following Anthropic Skills specification
with XSpoonAi extensions.

<a id="spoon_ai.skills.models.SkillState"></a>

## `SkillState` Objects

```python
class SkillState(str, Enum)
```

Skill activation state.

<a id="spoon_ai.skills.models.ScriptType"></a>

## `ScriptType` Objects

```python
class ScriptType(str, Enum)
```

Supported script execution types.

<a id="spoon_ai.skills.models.SkillScript"></a>

## `SkillScript` Objects

```python
class SkillScript(BaseModel)
```

Script definition within a skill.

Scripts are executed by the agent when needed. The AI decides
how to call scripts - users only control whether scripts are allowed.

Example in SKILL.md:
    scripts:
      - name: fetch_data
        description: Fetch latest market data
        type: python
        file: scripts/fetch_data.py

<a id="spoon_ai.skills.models.SkillScript.validate_source"></a>

#### `validate_source`

```python
@model_validator(mode='after')
def validate_source()
```

Ensure either file or inline is provided.

<a id="spoon_ai.skills.models.ScriptConfig"></a>

## `ScriptConfig` Objects

```python
class ScriptConfig(BaseModel)
```

Script configuration section in skill metadata.

Example in SKILL.md:
    scripts:
      enabled: true
      working_directory: ./scripts
      definitions:
        - name: analyze
          type: python
          file: analyze.py

<a id="spoon_ai.skills.models.ScriptConfig.get_script"></a>

#### `get_script`

```python
def get_script(name: str) -> Optional[SkillScript]
```

Get script by name.

<a id="spoon_ai.skills.models.ScriptConfig.get_activation_scripts"></a>

#### `get_activation_scripts`

```python
def get_activation_scripts() -> List[SkillScript]
```

Get scripts to run on activation.

<a id="spoon_ai.skills.models.ScriptConfig.get_deactivation_scripts"></a>

#### `get_deactivation_scripts`

```python
def get_deactivation_scripts() -> List[SkillScript]
```

Get scripts to run on deactivation.

<a id="spoon_ai.skills.models.ScriptResult"></a>

## `ScriptResult` Objects

```python
class ScriptResult(BaseModel)
```

Result of script execution.

<a id="spoon_ai.skills.models.ScriptResult.to_string"></a>

#### `to_string`

```python
def to_string() -> str
```

Convert to string for agent context.

<a id="spoon_ai.skills.models.SkillTrigger"></a>

## `SkillTrigger` Objects

```python
class SkillTrigger(BaseModel)
```

Trigger configuration for skill activation.

<a id="spoon_ai.skills.models.SkillParameter"></a>

## `SkillParameter` Objects

```python
class SkillParameter(BaseModel)
```

Parameter definition for skills.

<a id="spoon_ai.skills.models.SkillPrerequisite"></a>

## `SkillPrerequisite` Objects

```python
class SkillPrerequisite(BaseModel)
```

Prerequisites for skill execution.

<a id="spoon_ai.skills.models.SkillMetadata"></a>

## `SkillMetadata` Objects

```python
class SkillMetadata(BaseModel)
```

Skill metadata from YAML frontmatter.

Required fields (Anthropic-compatible):
- name: Unique skill identifier
- description: Human-readable description

Optional fields (XSpoonAi extensions):
- triggers, parameters, prerequisites, composes, etc.

<a id="spoon_ai.skills.models.SkillMetadata.has_scripts"></a>

#### `has_scripts`

```python
def has_scripts() -> bool
```

Check if skill has scripts defined.

<a id="spoon_ai.skills.models.SkillMetadata.scripts_enabled"></a>

#### `scripts_enabled`

```python
def scripts_enabled() -> bool
```

Check if scripts are enabled for this skill.

<a id="spoon_ai.skills.models.Skill"></a>

## `Skill` Objects

```python
class Skill(BaseModel)
```

Complete skill definition.

Combines metadata from YAML frontmatter with markdown instructions.

<a id="spoon_ai.skills.models.Skill.name"></a>

#### `name`

```python
@property
def name() -> str
```

Convenience property for skill name.

<a id="spoon_ai.skills.models.Skill.description"></a>

#### `description`

```python
@property
def description() -> str
```

Convenience property for skill description.

<a id="spoon_ai.skills.models.Skill.get_prompt_injection"></a>

#### `get_prompt_injection`

```python
def get_prompt_injection() -> str
```

Generate prompt content to inject into agent's system prompt.

**Returns**:

  Formatted skill instructions with metadata

<a id="spoon_ai.skills.loader"></a>

# Module `spoon_ai.skills.loader`

Skill loader for parsing SKILL.md files.

Discovers and loads skills from multiple paths:
1. ~/.spoon/skills/ - Global user skills
2. ./skills/ - Project-local skills
3. Additional user-specified paths

Note: No built-in skills are included by default.
Use additional_paths to specify skill directories.

<a id="spoon_ai.skills.loader.SkillLoader"></a>

## `SkillLoader` Objects

```python
class SkillLoader()
```

Loads skills from SKILL.md files with optional Python tool modules.

SKILL.md Format:
---
name: my-skill
description: What this skill does
version: 1.0.0
triggers:
  - type: keyword
    keywords: [analyze, review]
---

__Skill Instructions__


Markdown content here...

<a id="spoon_ai.skills.loader.SkillLoader.__init__"></a>

#### `__init__`

```python
def __init__(additional_paths: Optional[List[Path]] = None)
```

Initialize loader with skill search paths.

**Arguments**:

- `additional_paths` - Additional directories to search for skills

<a id="spoon_ai.skills.loader.SkillLoader.paths"></a>

#### `paths`

```python
@property
def paths() -> List[Path]
```

Get configured skill paths.

<a id="spoon_ai.skills.loader.SkillLoader.add_path"></a>

#### `add_path`

```python
def add_path(path: Path) -> None
```

Add a path to search for skills.

<a id="spoon_ai.skills.loader.SkillLoader.discover"></a>

#### `discover`

```python
def discover() -> List[Path]
```

Discover all SKILL.md files in configured paths.

**Returns**:

  List of paths to SKILL.md files

<a id="spoon_ai.skills.loader.SkillLoader.parse"></a>

#### `parse`

```python
def parse(file_path: Path) -> Tuple[SkillMetadata, str]
```

Parse a SKILL.md file into metadata and instructions.

**Arguments**:

- `file_path` - Path to SKILL.md file
  

**Returns**:

  Tuple of (SkillMetadata, instructions_markdown)
  

**Raises**:

- `ValueError` - If file format is invalid

<a id="spoon_ai.skills.loader.SkillLoader.load_tools"></a>

#### `load_tools`

```python
def load_tools(skill_dir: Path) -> List[BaseTool]
```

Load Python tools from a skill directory.

Looks for tools.py containing BaseTool subclasses.

**Arguments**:

- `skill_dir` - Directory containing the skill
  

**Returns**:

  List of loaded tool instances

<a id="spoon_ai.skills.loader.SkillLoader.load"></a>

#### `load`

```python
def load(file_path: Path) -> Skill
```

Load a complete skill from SKILL.md and optional modules.

**Arguments**:

- `file_path` - Path to SKILL.md file
  

**Returns**:

  Loaded Skill instance

<a id="spoon_ai.skills.loader.SkillLoader.load_all"></a>

#### `load_all`

```python
def load_all() -> Dict[str, Skill]
```

Discover and load all skills from configured paths.

**Returns**:

  Dictionary mapping skill names to Skill instances

<a id="spoon_ai.skills.loader.SkillLoader.get_skill"></a>

#### `get_skill`

```python
def get_skill(name: str) -> Optional[Skill]
```

Get a loaded skill by name.

<a id="spoon_ai.skills.loader.SkillLoader.get_tools"></a>

#### `get_tools`

```python
def get_tools(skill_name: str) -> List[BaseTool]
```

Get loaded tools for a skill.

<a id="spoon_ai.skills.loader.SkillLoader.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear all cached skills and tools.

<a id="spoon_ai.skills.loader.SkillLoader.reload"></a>

#### `reload`

```python
def reload(name: str) -> Optional[Skill]
```

Reload a specific skill from disk.

**Arguments**:

- `name` - Skill name to reload
  

**Returns**:

  Reloaded Skill or None if not found

<a id="spoon_ai.skills"></a>

# Module `spoon_ai.skills`

Skill system for SpoonAI agents.

This module provides a Claude Skills-compatible system for defining and managing
agent capabilities through SKILL.md files and optional Python tools.

Key Components:
- Skill: Data model representing a skill with metadata and triggers
- SkillLoader: Discovers and parses SKILL.md files from configured paths
- SkillRegistry: Thread-safe registry with fast trigger matching
- SkillManager: Central lifecycle manager with LLM intent analysis
- ScriptExecutor: Async subprocess execution for skill scripts

Script Execution:
Skills can define scripts (Python, shell, bash) that agents can execute.
Users control whether scripts are allowed; AI decides how to use them.

Usage:
    from spoon_ai.skills import SkillManager, Skill

    # Create manager with auto-discovery and script support
    manager = SkillManager(auto_discover=True, scripts_enabled=True)

    # Activate a skill
    skill = await manager.activate("research", &#123;"topic": "AI"&#125;)

    # Get prompt injection for active skills
    context = manager.get_active_context()

    # Execute a skill script
    result = await manager.execute_script("data-processor", "analyze")

    # Find matching skills for user input
    matches = await manager.find_matching_skills("research quantum computing")

<a id="spoon_ai.skills.executor"></a>

# Module `spoon_ai.skills.executor`

Script execution engine for skills.

Provides async subprocess management for executing skill scripts.
AI decides how to call scripts - users only control whether scripts are allowed.

<a id="spoon_ai.skills.executor.MAX_OUTPUT_SIZE"></a>

#### `MAX_OUTPUT_SIZE`

5MB

<a id="spoon_ai.skills.executor.ScriptExecutionError"></a>

## `ScriptExecutionError` Objects

```python
class ScriptExecutionError(Exception)
```

Raised when script execution fails.

<a id="spoon_ai.skills.executor.ScriptExecutor"></a>

## `ScriptExecutor` Objects

```python
class ScriptExecutor()
```

Async script executor for skill scripts.

Features:
- Async subprocess execution with timeout
- Support for Python, shell, bash scripts
- Environment variable passthrough
- Output capture and size limiting
- Global enable/disable control

<a id="spoon_ai.skills.executor.ScriptExecutor.__init__"></a>

#### `__init__`

```python
def __init__(enabled: bool = True,
             default_timeout: int = DEFAULT_TIMEOUT,
             max_output_size: int = MAX_OUTPUT_SIZE,
             env_passthrough: Optional[List[str]] = None)
```

Initialize script executor.

**Arguments**:

- `enabled` - Whether script execution is allowed
- `default_timeout` - Default timeout in seconds
- `max_output_size` - Max output capture size in bytes
- `env_passthrough` - Environment variables to pass through

<a id="spoon_ai.skills.executor.ScriptExecutor.is_available"></a>

#### `is_available`

```python
def is_available(script_type: ScriptType) -> bool
```

Check if a script type can be executed.

<a id="spoon_ai.skills.executor.ScriptExecutor.get_interpreter"></a>

#### `get_interpreter`

```python
def get_interpreter(script_type: ScriptType) -> Optional[str]
```

Get interpreter path for a script type.

<a id="spoon_ai.skills.executor.ScriptExecutor.execute"></a>

#### `execute`

```python
async def execute(script: SkillScript,
                  input_text: Optional[str] = None,
                  working_directory: Optional[str] = None,
                  extra_env: Optional[Dict[str, str]] = None,
                  timeout: Optional[int] = None) -> ScriptResult
```

Execute a script asynchronously.

**Arguments**:

- `script` - Script to execute
- `input_text` - Optional text to pass to script via stdin
- `working_directory` - Working directory for execution
- `extra_env` - Additional environment variables
- `timeout` - Timeout override (uses script.timeout or default)
  

**Returns**:

  ScriptResult with output and status

<a id="spoon_ai.skills.executor.ScriptExecutor.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get execution statistics.

<a id="spoon_ai.skills.executor.ScriptExecutor.set_enabled"></a>

#### `set_enabled`

```python
def set_enabled(enabled: bool) -> None
```

Enable or disable script execution.

<a id="spoon_ai.skills.executor.get_executor"></a>

#### `get_executor`

```python
def get_executor() -> ScriptExecutor
```

Get or create the global script executor.

<a id="spoon_ai.skills.executor.configure_executor"></a>

#### `configure_executor`

```python
def configure_executor(**kwargs) -> ScriptExecutor
```

Configure and return the global executor.

<a id="spoon_ai.skills.executor.set_scripts_enabled"></a>

#### `set_scripts_enabled`

```python
def set_scripts_enabled(enabled: bool) -> None
```

Enable or disable script execution globally.

<a id="spoon_ai.skills.registry"></a>

# Module `spoon_ai.skills.registry`

Thread-safe skill registry with indexing.

Follows NodePluginSystem pattern from graph/builder.py.

<a id="spoon_ai.skills.registry.SkillRegistry"></a>

## `SkillRegistry` Objects

```python
class SkillRegistry()
```

Thread-safe registry for skills with fast trigger matching.

Maintains indexes for:
- Tags: O(1) lookup by tag
- Keywords: O(1) lookup by keyword
- Intents: O(1) lookup by intent category
- Patterns: Compiled regex patterns for matching

<a id="spoon_ai.skills.registry.SkillRegistry.register"></a>

#### `register`

```python
def register(skill: Skill) -> None
```

Register a skill and update indexes.

**Arguments**:

- `skill` - Skill to register

<a id="spoon_ai.skills.registry.SkillRegistry.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> bool
```

Remove a skill from the registry.

**Arguments**:

- `name` - Skill name to remove
  

**Returns**:

  True if removed, False if not found

<a id="spoon_ai.skills.registry.SkillRegistry.get"></a>

#### `get`

```python
def get(name: str) -> Optional[Skill]
```

Get a skill by name.

**Arguments**:

- `name` - Skill name
  

**Returns**:

  Skill or None if not found

<a id="spoon_ai.skills.registry.SkillRegistry.list_names"></a>

#### `list_names`

```python
def list_names() -> List[str]
```

Get all registered skill names.

<a id="spoon_ai.skills.registry.SkillRegistry.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[Skill]
```

Get all registered skills.

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_tag"></a>

#### `find_by_tag`

```python
def find_by_tag(tag: str) -> List[Skill]
```

Find skills by tag.

**Arguments**:

- `tag` - Tag to search for
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_keyword"></a>

#### `find_by_keyword`

```python
def find_by_keyword(text: str) -> List[Skill]
```

Find skills by keyword matching.

Extracts words from text and matches against keyword index.

**Arguments**:

- `text` - Text to match keywords against
  

**Returns**:

  List of matching skills (deduplicated)

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_pattern"></a>

#### `find_by_pattern`

```python
def find_by_pattern(text: str) -> List[Skill]
```

Find skills by regex pattern matching.

**Arguments**:

- `text` - Text to match patterns against
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_intent"></a>

#### `find_by_intent`

```python
def find_by_intent(intent_category: str) -> List[Skill]
```

Find skills by intent category.

**Arguments**:

- `intent_category` - Intent category to match
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_all_matching"></a>

#### `find_all_matching`

```python
def find_all_matching(text: str) -> List[Skill]
```

Find all skills matching by keywords or patterns.

Combines keyword and pattern matching, sorted by trigger priority.

**Arguments**:

- `text` - Text to match against
  

**Returns**:

  List of matching skills, sorted by priority (highest first)

<a id="spoon_ai.skills.registry.SkillRegistry.get_intent_categories"></a>

#### `get_intent_categories`

```python
def get_intent_categories() -> List[str]
```

Get all registered intent categories.

<a id="spoon_ai.skills.script_tool"></a>

# Module `spoon_ai.skills.script_tool`

Script-based tool for agent integration.

Wraps SkillScript as a BaseTool that agents can call.
AI decides how to use scripts - users only control whether scripts are allowed.

<a id="spoon_ai.skills.script_tool.ScriptTool"></a>

## `ScriptTool` Objects

```python
class ScriptTool(BaseTool)
```

Tool wrapper for skill scripts.

Exposes a SkillScript as a callable tool that agents can invoke.
The AI decides what input to provide - there's no fixed parameter schema.

<a id="spoon_ai.skills.script_tool.ScriptTool.__init__"></a>

#### `__init__`

```python
def __init__(script: SkillScript,
             skill_name: str,
             working_directory: Optional[str] = None)
```

Create a tool from a script definition.

**Arguments**:

- `script` - SkillScript to wrap
- `skill_name` - Parent skill name
- `working_directory` - Base working directory

<a id="spoon_ai.skills.script_tool.ScriptTool.execute"></a>

#### `execute`

```python
async def execute(input: Optional[str] = None, **kwargs) -> str
```

Execute the script.

**Arguments**:

- `input` - Optional input text to pass to script via stdin
- `**kwargs` - Additional arguments (ignored)
  

**Returns**:

  Script output as string

<a id="spoon_ai.skills.script_tool.ScriptTool.to_param"></a>

#### `to_param`

```python
def to_param() -> dict
```

Generate OpenAI-compatible function definition.

<a id="spoon_ai.skills.script_tool.create_script_tools"></a>

#### `create_script_tools`

```python
def create_script_tools(
        skill_name: str,
        scripts: List[SkillScript],
        working_directory: Optional[str] = None) -> List[ScriptTool]
```

Create ScriptTool instances from script definitions.

**Arguments**:

- `skill_name` - Parent skill name
- `scripts` - List of script definitions
- `working_directory` - Base working directory (fallback if script has none)
  

**Returns**:

  List of ScriptTool instances

<a id="spoon_ai.skills.manager"></a>

# Module `spoon_ai.skills.manager`

Central skill manager for lifecycle, discovery, and activation.

Reuses:
- IntentAnalyzer from graph/builder.py for LLM-powered matching
- InMemoryCheckpointer from graph/checkpointer.py for state persistence

Script execution support:
- Runs activation/deactivation scripts automatically
- Creates ScriptTool instances for agent access
- Global and per-skill script enable/disable

<a id="spoon_ai.skills.manager.SkillManager"></a>

## `SkillManager` Objects

```python
class SkillManager()
```

Central manager for skill lifecycle, discovery, and activation.

Features:
- Multi-path skill discovery
- Keyword and pattern-based trigger matching
- LLM-powered intent matching (via IntentAnalyzer)
- State persistence (via InMemoryCheckpointer)
- Skill composition (prerequisite activation)

<a id="spoon_ai.skills.manager.SkillManager.__init__"></a>

#### `__init__`

```python
def __init__(skill_paths: Optional[List[str]] = None,
             llm: Optional["LLMManager"] = None,
             auto_discover: bool = True,
             scripts_enabled: bool = True)
```

Initialize the skill manager.

**Arguments**:

- `skill_paths` - Additional directories to search for skills
- `llm` - LLM manager for intent-based matching
- `auto_discover` - Whether to auto-discover skills on init
- `scripts_enabled` - Whether to allow script execution globally

<a id="spoon_ai.skills.manager.SkillManager.discover"></a>

#### `discover`

```python
def discover() -> int
```

Discover and register all skills from configured paths.

**Returns**:

  Number of skills discovered

<a id="spoon_ai.skills.manager.SkillManager.add_skill_path"></a>

#### `add_skill_path`

```python
def add_skill_path(path: str) -> None
```

Add a path to search for skills.

**Arguments**:

- `path` - Directory path to add

<a id="spoon_ai.skills.manager.SkillManager.register"></a>

#### `register`

```python
def register(skill: Skill) -> None
```

Register a skill manually.

<a id="spoon_ai.skills.manager.SkillManager.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> bool
```

Unregister a skill by name.

Also deactivates if currently active.

<a id="spoon_ai.skills.manager.SkillManager.get"></a>

#### `get`

```python
def get(name: str) -> Optional[Skill]
```

Get a skill by name.

<a id="spoon_ai.skills.manager.SkillManager.list"></a>

#### `list`

```python
def list() -> List[str]
```

List all registered skill names.

<a id="spoon_ai.skills.manager.SkillManager.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[Skill]
```

List all registered skills.

<a id="spoon_ai.skills.manager.SkillManager.match_triggers"></a>

#### `match_triggers`

```python
def match_triggers(text: str) -> List[Skill]
```

Match skills by keywords and patterns (fast, no LLM).

**Arguments**:

- `text` - User input to match against
  

**Returns**:

  List of matching skills, sorted by priority

<a id="spoon_ai.skills.manager.SkillManager.match_intent"></a>

#### `match_intent`

```python
async def match_intent(text: str) -> List[Skill]
```

Match skills by LLM-powered intent analysis.

**Arguments**:

- `text` - User input to analyze
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.manager.SkillManager.find_matching_skills"></a>

#### `find_matching_skills`

```python
async def find_matching_skills(text: str,
                               use_intent: bool = True) -> List[Skill]
```

Find all matching skills using both trigger and intent matching.

**Arguments**:

- `text` - User input to match
- `use_intent` - Whether to also use LLM intent matching
  

**Returns**:

  Combined list of matching skills (deduplicated)

<a id="spoon_ai.skills.manager.SkillManager.activate"></a>

#### `activate`

```python
async def activate(name: str,
                   context: Optional[Dict[str, Any]] = None) -> Skill
```

Activate a skill with prerequisite checking.

**Arguments**:

- `name` - Skill name to activate
- `context` - Optional context data for the skill
  

**Returns**:

  Activated Skill instance
  

**Raises**:

- `ValueError` - If skill not found or prerequisites not met

<a id="spoon_ai.skills.manager.SkillManager.deactivate"></a>

#### `deactivate`

```python
async def deactivate(name: str) -> bool
```

Deactivate an active skill.

Persists state if configured. Runs deactivation scripts.

**Arguments**:

- `name` - Skill name to deactivate
  

**Returns**:

  True if deactivated, False if not active

<a id="spoon_ai.skills.manager.SkillManager.deactivate_all"></a>

#### `deactivate_all`

```python
async def deactivate_all() -> int
```

Deactivate all active skills.

**Returns**:

  Number of skills deactivated

<a id="spoon_ai.skills.manager.SkillManager.get_active_context"></a>

#### `get_active_context`

```python
def get_active_context() -> str
```

Generate combined prompt content for all active skills.

**Returns**:

  Formatted skill instructions for injection into system prompt

<a id="spoon_ai.skills.manager.SkillManager.get_active_tools"></a>

#### `get_active_tools`

```python
def get_active_tools() -> List[BaseTool]
```

Get all tools from active skills.

Includes both Python tools (from tools.py) and script tools.

**Returns**:

  List of tool instances from active skills

<a id="spoon_ai.skills.manager.SkillManager.get_active_skill_names"></a>

#### `get_active_skill_names`

```python
def get_active_skill_names() -> List[str]
```

Get names of all active skills.

<a id="spoon_ai.skills.manager.SkillManager.is_active"></a>

#### `is_active`

```python
def is_active(name: str) -> bool
```

Check if a skill is currently active.

<a id="spoon_ai.skills.manager.SkillManager.execute_script"></a>

#### `execute_script`

```python
async def execute_script(skill_name: str,
                         script_name: str,
                         input_text: Optional[str] = None) -> ScriptResult
```

Execute a specific script from a skill.

**Arguments**:

- `skill_name` - Name of the skill containing the script
- `script_name` - Name of the script to execute
- `input_text` - Optional input to pass to the script
  

**Returns**:

  ScriptResult with execution details
  

**Raises**:

- `ValueError` - If skill or script not found

<a id="spoon_ai.skills.manager.SkillManager.set_scripts_enabled"></a>

#### `set_scripts_enabled`

```python
def set_scripts_enabled(enabled: bool) -> None
```

Enable or disable script execution globally.

**Arguments**:

- `enabled` - Whether to enable script execution

<a id="spoon_ai.skills.manager.SkillManager.get_script_tools"></a>

#### `get_script_tools`

```python
def get_script_tools(skill_name: str) -> List[ScriptTool]
```

Get script tools for a specific skill.

**Arguments**:

- `skill_name` - Name of the skill
  

**Returns**:

  List of ScriptTool instances for the skill

<a id="spoon_ai.skills.manager.SkillManager.get_skill_info"></a>

#### `get_skill_info`

```python
def get_skill_info(name: str) -> Optional[Dict[str, Any]]
```

Get detailed information about a skill.

**Arguments**:

- `name` - Skill name
  

**Returns**:

  Dictionary with skill details or None if not found

<a id="spoon_ai.skills.manager.SkillManager.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get statistics about the skill system.

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

<a id="spoon_ai.llm.cache"></a>

# Module `spoon_ai.llm.cache`

LLM Response Caching - Cache LLM responses to avoid redundant API calls.

<a id="spoon_ai.llm.cache.LLMResponseCache"></a>

## `LLMResponseCache` Objects

```python
class LLMResponseCache()
```

Cache for LLM responses to avoid redundant API calls.

<a id="spoon_ai.llm.cache.LLMResponseCache.__init__"></a>

#### `__init__`

```python
def __init__(default_ttl: int = 3600, max_size: int = 1000)
```

Initialize the cache.

**Arguments**:

- `default_ttl` - Default time-to-live in seconds (default: 1 hour)
- `max_size` - Maximum number of cached entries (default: 1000)

<a id="spoon_ai.llm.cache.LLMResponseCache.get"></a>

#### `get`

```python
def get(messages: List[Message],
        provider: Optional[str] = None,
        **kwargs) -> Optional[LLMResponse]
```

Get cached response if available.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Provider name (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `Optional[LLMResponse]` - Cached response if found and not expired, None otherwise

<a id="spoon_ai.llm.cache.LLMResponseCache.set"></a>

#### `set`

```python
def set(messages: List[Message],
        response: LLMResponse,
        provider: Optional[str] = None,
        ttl: Optional[int] = None,
        **kwargs) -> None
```

Store response in cache.

**Arguments**:

- `messages` - List of conversation messages
- `response` - LLM response to cache
- `provider` - Provider name (optional)
- `ttl` - Time-to-live in seconds (optional, uses default if not provided)
- `**kwargs` - Additional parameters

<a id="spoon_ai.llm.cache.LLMResponseCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached entries.

<a id="spoon_ai.llm.cache.LLMResponseCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics including size, max_size, etc.

<a id="spoon_ai.llm.cache.CachedLLMManager"></a>

## `CachedLLMManager` Objects

```python
class CachedLLMManager()
```

Wrapper around LLMManager that adds response caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.__init__"></a>

#### `__init__`

```python
def __init__(llm_manager: LLMManager,
             cache: Optional[LLMResponseCache] = None)
```

Initialize cached LLM manager.

**Arguments**:

- `llm_manager` - The underlying LLMManager instance
- `cache` - Optional cache instance (creates new one if not provided)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               use_cache: bool = True,
               cache_ttl: Optional[int] = None,
               **kwargs) -> LLMResponse
```

Send chat request with caching support.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `use_cache` - Whether to use cache (default: True)
- `cache_ttl` - Custom TTL for this request (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - LLM response (from cache or API)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      provider: Optional[str] = None,
                      callbacks: Optional[List] = None,
                      **kwargs)
```

Send streaming chat request (caching not supported for streaming).

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `callbacks` - Optional callback handlers
- `**kwargs` - Additional parameters
  

**Yields**:

- `LLMResponseChunk` - Streaming response chunks

<a id="spoon_ai.llm.cache.CachedLLMManager.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear the response cache.

<a id="spoon_ai.llm.cache.CachedLLMManager.get_cache_stats"></a>

#### `get_cache_stats`

```python
def get_cache_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

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

<a id="spoon_ai.llm"></a>

# Module `spoon_ai.llm`

Unified LLM infrastructure package.

This package provides a unified interface for working with different LLM providers,
including comprehensive configuration management, monitoring, and error handling.

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

<a id="spoon_ai.llm.providers.openai_compatible_provider"></a>

# Module `spoon_ai.llm.providers.openai_compatible_provider`

OpenAI Compatible Provider base class for providers that use OpenAI-compatible APIs.
This includes OpenAI, OpenRouter, DeepSeek, and other providers with similar interfaces.

<a id="spoon_ai.llm.providers.openai_compatible_provider.MAX_INLINE_FILE_SIZE"></a>

#### `MAX_INLINE_FILE_SIZE`

4MB in bytes

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

<a id="spoon_ai.llm.providers"></a>

# Module `spoon_ai.llm.providers`

LLM Provider implementations.

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

<a id="spoon_ai.llm.providers.ollama_provider"></a>

# Module `spoon_ai.llm.providers.ollama_provider`

Ollama Provider implementation for the unified LLM interface.

Ollama runs locally and exposes an HTTP API (default: http://localhost:11434).
This provider supports chat, completion, and streaming.

**Notes**:

  - Ollama does not require an API key; the configuration layer may still provide
  a placeholder api_key value for consistency.
  - Tool calling is supported via /api/chat (tools + tool_calls).

<a id="spoon_ai.llm.providers.ollama_provider.OllamaProvider"></a>

## `OllamaProvider` Objects

```python
@register_provider(
    "ollama",
    [
        ProviderCapability.CHAT,
        ProviderCapability.COMPLETION,
        ProviderCapability.TOOLS,
        ProviderCapability.STREAMING,
    ],
)
class OllamaProvider(LLMProviderInterface)
```

Local Ollama provider via HTTP.

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

<a id="spoon_ai.identity"></a>

# Module `spoon_ai.identity`

SpoonOS Agent DID Identity Module
Implements ERC-8004 compliant decentralized identity for agents

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

<a id="spoon_ai.tools.rag_tools"></a>

# Module `spoon_ai.tools.rag_tools`

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

<a id="spoon_ai.tools.base"></a>

# Module `spoon_ai.tools.base`

<a id="spoon_ai.tools.base.reset_secrets_initialization"></a>

#### `reset_secrets_initialization`

```python
def reset_secrets_initialization() -> None
```

Reset the initialization flag. Useful for testing.

<a id="spoon_ai.tools.base.ToolFailure"></a>

## `ToolFailure` Objects

```python
class ToolFailure(Exception)
```

Exception to indicate a tool execution failure.

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

<a id="spoon_ai.tools"></a>

# Module `spoon_ai.tools`

<a id="spoon_ai.tools.hitl"></a>

# Module `spoon_ai.tools.hitl`

Human-in-the-Loop (HITL) System

Provides approval workflows for critical tool executions:
- Tool-level approval configuration with dynamic descriptions
- Multiple approval strategies (approve, edit, reject)
- Batch interrupt/resume support for parallel tool calls
- State preservation for pause/resume via Command pattern
- Integration with checkpointing

Compatible with LangChain DeepAgents HumanInTheLoopMiddleware interface.

Usage:
    from spoon_ai.tools.hitl import HumanInTheLoopMiddleware, InterruptOnConfig

    # Simple configuration
    agent = ToolCallAgent(
        tools=[dangerous_tool],
        middleware=[HumanInTheLoopMiddleware(interrupt_on=&#123;
            "delete_file": True,
            "send_email": &#123;"allowed_decisions": ["approve", "reject"]&#125;
        &#125;)]
    )

    # With dynamic description function
    def format_delete_description(tool_call, state, runtime):
        return f"Delete file: &#123;tool_call['args'].get('path', 'unknown')&#125;"

    middleware = HumanInTheLoopMiddleware(interrupt_on=&#123;
        "delete_file": &#123;
            "allowed_decisions": ["approve", "reject"],
            "description": format_delete_description,
        &#125;
    &#125;)

    # Resume after interrupt
    result = agent.invoke(Command(resume=&#123;"decisions": [
        &#123;"type": "approve"&#125;,
        &#123;"type": "edit", "args": &#123;"path": "/new/path"&#125;&#125;,
    ]&#125;), config=config)

<a id="spoon_ai.tools.hitl.InterruptOnConfig"></a>

## `InterruptOnConfig` Objects

```python
class InterruptOnConfig(TypedDict)
```

Configuration for tool interruption.

Compatible with LangChain DeepAgents InterruptOnConfig.

**Attributes**:

- `allowed_decisions` - List of allowed approval decisions.
  Defaults to ["approve", "edit", "reject"].
- `description` - Either a static string or a callable that generates
  a dynamic description based on the tool call context.
- `Signature` - (tool_call: ToolCall, state: AgentState, runtime: Runtime) -&gt; str
  

**Example**:

  # Static description
- `config` - InterruptOnConfig = &#123;
- `"allowed_decisions"` - ["approve", "reject"],
- `"description"` - "This action will delete files permanently.",
  &#125;
  
  # Dynamic description
  def format_description(tool_call, state, runtime):
  path = tool_call["args"].get("path", "unknown")
  return f"Delete file: &#123;path&#125;"
  
- `config` - InterruptOnConfig = &#123;
- `"allowed_decisions"` - ["approve", "reject"],
- `"description"` - format_description,
  &#125;

<a id="spoon_ai.tools.hitl.ApprovalDecision"></a>

## `ApprovalDecision` Objects

```python
class ApprovalDecision(str, Enum)
```

Possible approval decisions.

<a id="spoon_ai.tools.hitl.DecisionInput"></a>

## `DecisionInput` Objects

```python
@dataclass
class DecisionInput()
```

Input for a single approval decision.

Used in Command(resume=&#123;"decisions": [...]&#125;) pattern.

<a id="spoon_ai.tools.hitl.DecisionInput.args"></a>

#### `args`

For edit decision

<a id="spoon_ai.tools.hitl.DecisionInput.reason"></a>

#### `reason`

For reject decision

<a id="spoon_ai.tools.hitl.DecisionInput.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "DecisionInput"
```

Create from dictionary.

<a id="spoon_ai.tools.hitl.ActionRequest"></a>

## `ActionRequest` Objects

```python
@dataclass
class ActionRequest()
```

A pending action request.

Compatible with LangChain's action_request format.

<a id="spoon_ai.tools.hitl.ActionRequest.name"></a>

#### `name`

Tool name

<a id="spoon_ai.tools.hitl.ActionRequest.args"></a>

#### `args`

Tool arguments

<a id="spoon_ai.tools.hitl.ActionRequest.id"></a>

#### `id`

Tool call ID

<a id="spoon_ai.tools.hitl.ActionRequest.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary for serialization.

<a id="spoon_ai.tools.hitl.ApprovalRequest"></a>

## `ApprovalRequest` Objects

```python
@dataclass
class ApprovalRequest()
```

Request object passed to approval_callback.

Provides a simple interface for approval callbacks.

<a id="spoon_ai.tools.hitl.ApprovalRequest.from_action_request"></a>

#### `from_action_request`

```python
@classmethod
def from_action_request(cls, action: ActionRequest) -> "ApprovalRequest"
```

Create from ActionRequest.

<a id="spoon_ai.tools.hitl.ReviewConfig"></a>

## `ReviewConfig` Objects

```python
@dataclass
class ReviewConfig()
```

Review configuration for a pending action.

Compatible with LangChain's review_config format.

<a id="spoon_ai.tools.hitl.ReviewConfig.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary for serialization.

<a id="spoon_ai.tools.hitl.InterruptValue"></a>

## `InterruptValue` Objects

```python
@dataclass
class InterruptValue()
```

Value returned in __interrupt__ for batch interrupts.

Compatible with LangChain's interrupt value format.
Contains both action_requests and review_configs.

<a id="spoon_ai.tools.hitl.InterruptValue.__len__"></a>

#### `__len__`

```python
def __len__() -> int
```

Return number of pending actions (for compatibility).

<a id="spoon_ai.tools.hitl.InterruptValue.__iter__"></a>

#### `__iter__`

```python
def __iter__()
```

Iterate over keys (for compatibility).

<a id="spoon_ai.tools.hitl.InterruptValue.__getitem__"></a>

#### `__getitem__`

```python
def __getitem__(key: str) -> Any
```

Get item by key (for compatibility).

<a id="spoon_ai.tools.hitl.InterruptValue.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary for serialization.

<a id="spoon_ai.tools.hitl.InterruptInfo"></a>

## `InterruptInfo` Objects

```python
@dataclass
class InterruptInfo()
```

Wrapper for interrupt information.

Compatible with LangChain's __interrupt__[0] format.

<a id="spoon_ai.tools.hitl.InterruptInfo.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary.

<a id="spoon_ai.tools.hitl.ResumeData"></a>

## `ResumeData` Objects

```python
@dataclass
class ResumeData()
```

Data for resuming from an interrupt.

Compatible with LangChain Command(resume=...) pattern.

<a id="spoon_ai.tools.hitl.ResumeData.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "ResumeData"
```

Create from dictionary.

<a id="spoon_ai.tools.hitl.HITLInterrupt"></a>

## `HITLInterrupt` Objects

```python
class HITLInterrupt(Exception)
```

Exception raised when tool execution requires batch approval.

This signals to the agent that execution should pause and return
an __interrupt__ with action_requests and review_configs.

<a id="spoon_ai.tools.hitl.ParsedInterruptConfig"></a>

## `ParsedInterruptConfig` Objects

```python
@dataclass
class ParsedInterruptConfig()
```

Parsed and normalized interrupt configuration.

<a id="spoon_ai.tools.hitl.ParsedInterruptConfig.from_config"></a>

#### `from_config`

```python
@classmethod
def from_config(
    cls,
    config: Union[bool,
                  InterruptOnConfig]) -> Optional["ParsedInterruptConfig"]
```

Parse configuration from various formats.

<a id="spoon_ai.tools.hitl.ParsedInterruptConfig.get_description"></a>

#### `get_description`

```python
def get_description(tool_call: ToolCall, state: AgentState,
                    runtime: Runtime) -> Optional[str]
```

Get description, calling function if needed.

<a id="spoon_ai.tools.hitl.HITLManager"></a>

## `HITLManager` Objects

```python
class HITLManager()
```

Manages human-in-the-loop approval workflows.

Supports batch interrupts for parallel tool calls.

<a id="spoon_ai.tools.hitl.HITLManager.__init__"></a>

#### `__init__`

```python
def __init__(interrupt_on: Dict[str, Union[bool, InterruptOnConfig]])
```

Initialize HITL manager.

**Arguments**:

- `interrupt_on` - Tool interruption configuration.
  - Dict[str, bool]: Simple approval (True = require approval)
  - Dict[str, InterruptOnConfig]: Detailed configuration with
  allowed_decisions and description

<a id="spoon_ai.tools.hitl.HITLManager.should_interrupt"></a>

#### `should_interrupt`

```python
def should_interrupt(tool_name: str) -> bool
```

Check if tool requires approval.

<a id="spoon_ai.tools.hitl.HITLManager.get_config"></a>

#### `get_config`

```python
def get_config(tool_name: str) -> Optional[ParsedInterruptConfig]
```

Get parsed configuration for a tool.

<a id="spoon_ai.tools.hitl.HITLManager.add_pending_action"></a>

#### `add_pending_action`

```python
def add_pending_action(tool_call: ToolCall, state: AgentState,
                       runtime: Runtime) -> None
```

Add a pending action for batch interrupt.

**Arguments**:

- `tool_call` - The tool call dict or Pydantic object with name, args, id
- `state` - Current agent state
- `runtime` - Agent runtime

<a id="spoon_ai.tools.hitl.HITLManager.has_pending_actions"></a>

#### `has_pending_actions`

```python
def has_pending_actions() -> bool
```

Check if there are pending actions.

<a id="spoon_ai.tools.hitl.HITLManager.create_interrupt"></a>

#### `create_interrupt`

```python
def create_interrupt() -> InterruptInfo
```

Create an interrupt with all pending actions.

**Returns**:

  InterruptInfo with action_requests and review_configs

<a id="spoon_ai.tools.hitl.HITLManager.clear_pending"></a>

#### `clear_pending`

```python
def clear_pending() -> None
```

Clear all pending actions.

<a id="spoon_ai.tools.hitl.HITLManager.apply_decisions"></a>

#### `apply_decisions`

```python
def apply_decisions(decisions: List[DecisionInput],
                    tool_calls: List[ToolCall]) -> List[ToolCall]
```

Apply decisions to tool calls.

**Arguments**:

- `decisions` - List of decisions from Command(resume=...)
- `tool_calls` - Original tool calls
  

**Returns**:

  Modified tool calls with edits applied, rejected calls removed

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware"></a>

## `HumanInTheLoopMiddleware` Objects

```python
class HumanInTheLoopMiddleware(AgentMiddleware)
```

Middleware that implements Human-in-the-Loop approval workflows.

Compatible with LangChain DeepAgents HumanInTheLoopMiddleware.

This middleware intercepts tool calls that require approval and creates
an __interrupt__ with action_requests and review_configs for batch approval.

Features:
- Per-tool approval configuration
- Dynamic description functions
- Batch interrupt/resume for parallel tool calls
- Command(resume=...) pattern for resuming

Usage:
    # Simple approval
    middleware = HumanInTheLoopMiddleware(interrupt_on=&#123;
        "delete_file": True,
        "send_email": True
    &#125;)

    # With dynamic description
    def format_shell_description(tool_call, state, runtime):
        command = tool_call["args"].get("command", "N/A")
        return f"Execute Command: &#123;command&#125;"

    middleware = HumanInTheLoopMiddleware(interrupt_on=&#123;
        "shell": &#123;
            "allowed_decisions": ["approve", "reject"],
            "description": format_shell_description,
        &#125;,
        "write_file": &#123;
            "allowed_decisions": ["approve", "edit", "reject"],
        &#125;,
    &#125;)

    # Resume from interrupt
    result = agent.invoke(
        Command(resume=&#123;"decisions": [
            &#123;"type": "approve"&#125;,
            &#123;"type": "edit", "args": &#123;"path": "/new/path"&#125;&#125;,
        ]&#125;),
        config=config
    )

Interrupt Format (returned in result["__interrupt__"]):
    [
        &#123;
            "value": &#123;
                "action_requests": [
                    &#123;"name": "shell", "args": &#123;"command": "rm -rf"&#125;, "id": "..."&#125;,
                ],
                "review_configs": [
                    &#123;
                        "action_name": "shell",
                        "action_id": "...",
                        "allowed_decisions": ["approve", "reject"],
                        "description": "Execute Command: rm -rf",
                    &#125;,
                ],
            &#125;,
            "interrupt_id": "...",
        &#125;
    ]

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(interrupt_on: Dict[str, Union[bool, InterruptOnConfig]],
             approval_callback: Optional[Callable[["ApprovalRequest"],
                                                  ApprovalDecision]] = None)
```

Initialize HITL middleware.

**Arguments**:

- `interrupt_on` - Tool interruption configuration.
  Keys are tool names, values can be:
  - True: Require approval with default allowed_decisions
  - False: No approval needed (tool is skipped)
  - InterruptOnConfig dict with:
  - allowed_decisions: List of ["approve", "edit", "reject"]
  - description: Static string or callable for dynamic description
- `approval_callback` - Optional callback function for automatic approval.
  If provided, this callback is called instead of raising HITLInterrupt.
  The callback receives an ApprovalRequest and returns an ApprovalDecision.

**Example**:

  def auto_approve(request):
  print(f"Approving &#123;request.tool_name&#125;")
  return ApprovalDecision.APPROVE

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.set_resume_data"></a>

#### `set_resume_data`

```python
def set_resume_data(resume: Dict[str, Any]) -> None
```

Set resume data from Command(resume=...).

Called by the agent when resuming from interrupt.

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize state for HITL tracking.

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Intercept model response to collect tool calls requiring approval.

This processes the model response and identifies tool calls that
need approval, then raises an HITLInterrupt if any are found.

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.get_interrupt_config"></a>

#### `get_interrupt_config`

```python
def get_interrupt_config(tool_name: str) -> Optional[Dict[str, Any]]
```

Get interrupt configuration for a tool.

**Returns**:

  Dict with allowed_decisions, or None if tool doesn't require approval

<a id="spoon_ai.tools.hitl.create_hitl_middleware"></a>

#### `create_hitl_middleware`

```python
def create_hitl_middleware(
        *tool_names: str,
        allowed_decisions: Optional[List[str]] = None
) -> HumanInTheLoopMiddleware
```

Create HITL middleware for specified tools.

**Arguments**:

- `*tool_names` - Names of tools that require approval
- `allowed_decisions` - Allowed decisions for all tools
  

**Returns**:

  Configured HumanInTheLoopMiddleware
  

**Example**:

  middleware = create_hitl_middleware(
  "delete_file",
  "send_email",
  "shutdown_server",
  allowed_decisions=["approve", "reject"]
  )

<a id="spoon_ai.tools.hitl.format_tool_call_description"></a>

#### `format_tool_call_description`

```python
def format_tool_call_description(tool_call: ToolCall, state: AgentState,
                                 runtime: Runtime) -> str
```

Default description formatter for tool calls.

Can be used as a base for custom description functions.

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

