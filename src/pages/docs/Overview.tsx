import { CodeBlock } from "@/components/CodeBlock";

export function Overview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 id="overview" className="text-4xl font-bold mb-4">
          SelamAPI Overview
        </h1>
        <p className="text-xl text-muted-foreground">
          SelamAPI is a powerful AI platform providing access to four specialized language models through an OpenAI-compatible API.
        </p>
      </div>

      {/* Introduction */}
      <section className="space-y-4">
        <h2 id="introduction" className="text-2xl font-semibold">
          Introduction
        </h2>
        <p className="text-muted-foreground">
          Our platform offers cutting-edge AI capabilities through a simple, developer-friendly API. With four distinct model families, 
          SelamAPI caters to various use cases from rapid prototyping to enterprise-grade applications.
        </p>
      </section>

      {/* Model Families */}
      <section className="space-y-6">
        <h2 id="model-families" className="text-2xl font-semibold">
          Model Families
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SC</span>
              </div>
              <h3 className="text-lg font-semibold">Selam-Coder</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Advanced code generation, debugging, and software architecture assistance.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Multi-language programming support</li>
              <li>• Code review and optimization</li>
              <li>• Technical documentation</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ST</span>
              </div>
              <h3 className="text-lg font-semibold">Selam-Thinking</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Deep analytical reasoning and complex problem-solving capabilities.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Logical reasoning and analysis</li>
              <li>• Research and strategic planning</li>
              <li>• Critical thinking tasks</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SP</span>
              </div>
              <h3 className="text-lg font-semibold">Selam-Plus</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Enhanced general-purpose AI for comprehensive assistance.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Creative writing and content creation</li>
              <li>• General conversation and support</li>
              <li>• Versatile task handling</li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ST</span>
              </div>
              <h3 className="text-lg font-semibold">Selam-Turbo</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              High-speed performance for real-time applications.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Ultra-fast inference</li>
              <li>• Real-time chat applications</li>
              <li>• High-volume processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 id="getting-started" className="text-2xl font-semibold">
          Getting Started
        </h2>
        <p className="text-muted-foreground">
          Start using SelamAPI in just a few steps:
        </p>
        
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Sign up for a SelamAPI account</li>
          <li>Generate your API key from the dashboard</li>
          <li>Install the OpenAI SDK (fully compatible)</li>
          <li>Start making API calls</li>
        </ol>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Quick Example</h3>
          <CodeBlock language="python" title="Python">
{`from openai import OpenAI

client = OpenAI(
    api_key="sk-selam-your-api-key-here",
    base_url="https://api.selamapi.com/v1"
)

completion = client.chat.completions.create(
    model="selam-plus",
    messages=[
        {"role": "user", "content": "Hello, SelamAPI!"}
    ]
)

print(completion.choices[0].message.content)`}
          </CodeBlock>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-4">
        <h2 id="key-features" className="text-2xl font-semibold">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">OpenAI Compatible</h3>
            <p className="text-sm text-muted-foreground">
              Drop-in replacement for OpenAI's API with the same interface and SDKs.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Streaming Support</h3>
            <p className="text-sm text-muted-foreground">
              Real-time response streaming for better user experience.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Function Calling</h3>
            <p className="text-sm text-muted-foreground">
              Enable AI to interact with external tools and APIs.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Vision Capabilities</h3>
            <p className="text-sm text-muted-foreground">
              Understand and analyze images with multimodal AI.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Enterprise Ready</h3>
            <p className="text-sm text-muted-foreground">
              Scalable architecture with comprehensive monitoring.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Competitive Pricing</h3>
            <p className="text-sm text-muted-foreground">
              Flexible pricing tiers from free to enterprise levels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}