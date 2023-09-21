export interface BaseMessage {
  type: string;
  content: string;
}

class HumanMessage implements BaseMessage {
  type = 'human';
  constructor(public content: string) {}
}

class AIMessage implements BaseMessage {
  type = 'ai';
  constructor(public content: string) {}
}

class SystemMessage implements BaseMessage {
  type = 'system';
  constructor(public content: string) {}
}

// Update ChatHistoryManager
export class ChatHistoryManager {
  readonly chatHistory: BaseMessage[];

  constructor(systemMessage?: string) {
    this.chatHistory = [];

    // If a systemMessage is not provided, set a default message.
    const initialMessage = systemMessage || 'You are a helpful assistant.';
    this.addSystemMessage(initialMessage);
  }

  private addSystemMessage(message: string) {
    this.chatHistory.push(new SystemMessage(message));
  }

  addAiMessage(message: string) {
    this.chatHistory.push(new AIMessage(message));
  }

  addHumanMessage(message: string) {
    this.chatHistory.push(new HumanMessage(message));
  }
}
