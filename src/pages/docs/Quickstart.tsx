import { CodeBlock } from "@/components/CodeBlock";

export function Quickstart() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 id="quickstart" className="text-4xl font-bold mb-4">
          Quickstart Guide
        </h1>
        <p className="text-xl text-muted-foreground">
          Get up and running with SelamAPI in minutes. This guide will walk you through your first API call.
        </p>
      </div>

      {/* Step 1: Account Setup */}
      <section className="space-y-4">
        <h2 id="account-setup" className="text-2xl font-semibold">
          Step 1: Account Setup
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Visit <a href="https://selamapi.com" className="text-accent hover:underline">selamapi.com</a> and create an account</li>
          <li>Verify your email address</li>
          <li>Navigate to your dashboard</li>
          <li>Click "Create API Key" and give it a name</li>
          <li>Copy your API key (starts with <code className="bg-muted px-1 rounded">sk-selam-</code>)</li>
        </ol>
      </section>

      {/* Step 2: Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold">
          Step 2: Installation
        </h2>
        <p className="text-muted-foreground">
          Install the OpenAI SDK - SelamAPI is fully compatible with OpenAI's client libraries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Python</h3>
            <CodeBlock language="bash">
{`pip install openai`}
            </CodeBlock>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Node.js</h3>
            <CodeBlock language="bash">
{`npm install openai`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Step 3: First API Call */}
      <section className="space-y-4">
        <h2 id="first-api-call" className="text-2xl font-semibold">
          Step 3: Make Your First API Call
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Python Example</h3>
            <CodeBlock language="python" title="main.py">
{`from openai import OpenAI

# Initialize the SelamAPI client
client = OpenAI(
    api_key="sk-selam-your-api-key-here",
    base_url="https://api.selamapi.com/v1"
)

# Create a chat completion
completion = client.chat.completions.create(
    model="selam-plus",
    messages=[
        {
            "role": "system", 
            "content": "You are a helpful assistant."
        },
        {
            "role": "user", 
            "content": "Write a short story about an Ethiopian wolf."
        }
    ],
    max_tokens=1000,
    temperature=0.7
)

print(completion.choices[0].message.content)`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">JavaScript Example</h3>
            <CodeBlock language="javascript" title="index.js">
{`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-selam-your-api-key-here',
  baseURL: 'https://api.selamapi.com/v1'
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'selam-plus',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        role: 'user',
        content: 'Write a short story about an Ethiopian wolf.'
      }
    ],
    max_tokens: 1000,
    temperature: 0.7
  });

  console.log(completion.choices[0].message.content);
}

main().catch(console.error);`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">cURL Example</h3>
            <CodeBlock language="bash" title="curl">
{`curl https://api.selamapi.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $SELAM_API_KEY" \\
  -d '{
    "model": "selam-plus",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Write a short story about an Ethiopian wolf."
      }
    ],
    "max_tokens": 1000,
    "temperature": 0.7
  }'`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="space-y-4">
        <h2 id="model-selection" className="text-2xl font-semibold">
          Choosing the Right Model
        </h2>
        <p className="text-muted-foreground">
          Select the model that best fits your use case:
        </p>

        <div className="space-y-4">
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">selam-coder</h3>
              <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Programming</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Best for: Code generation, debugging, technical documentation, algorithm optimization
            </p>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">selam-thinking</h3>
              <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Analysis</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Best for: Complex reasoning, research tasks, strategic analysis, problem-solving
            </p>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">selam-plus</h3>
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">General</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Best for: Creative writing, content creation, general assistance, customer support
            </p>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">selam-turbo</h3>
              <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">Speed</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Best for: Real-time applications, chatbots, high-volume processing, quick responses
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 id="next-steps" className="text-2xl font-semibold">
          Next Steps
        </h2>
        <p className="text-muted-foreground">
          Now that you've made your first API call, explore more advanced features:
        </p>

        <ul className="space-y-2 text-muted-foreground">
          <li>• <a href="/streaming" className="text-accent hover:underline">Streaming responses</a> for real-time applications</li>
          <li>• <a href="/function-calling" className="text-accent hover:underline">Function calling</a> to integrate with external tools</li>
          <li>• <a href="/vision" className="text-accent hover:underline">Vision capabilities</a> for image understanding</li>
          <li>• <a href="/best-practices" className="text-accent hover:underline">Best practices</a> for production usage</li>
        </ul>
      </section>

      {/* Error Handling */}
      <section className="space-y-4">
        <h2 id="error-handling" className="text-2xl font-semibold">
          Error Handling
        </h2>
        <p className="text-muted-foreground">
          Always implement proper error handling in your applications:
        </p>

        <CodeBlock language="python" title="Error handling example">
{`try:
    completion = client.chat.completions.create(
        model="selam-plus",
        messages=[{"role": "user", "content": "Hello!"}]
    )
    print(completion.choices[0].message.content)
except Exception as e:
    if "rate_limit" in str(e):
        print("Rate limit exceeded. Please wait.")
    elif "invalid_api_key" in str(e):
        print("Invalid API key. Please check your credentials.")
    else:
        print(f"An error occurred: {e}")`}
        </CodeBlock>
      </section>
    </div>
  );
}