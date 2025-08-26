import { CodeBlock } from "@/components/CodeBlock";

export function Models() {
  return (
    <div className="space-y-8">
      <div>
        <h1 id="models" className="text-4xl font-bold mb-4">Models</h1>
        <p className="text-xl text-muted-foreground">
          Learn about SelamAPI's four specialized AI model families and their capabilities.
        </p>
      </div>

      <section className="space-y-6">
        <h2 id="selam-coder" className="text-2xl font-semibold">🧑‍💻 Selam-Coder</h2>
        <p className="text-muted-foreground">Advanced programming specialist optimized for code generation and technical tasks.</p>
        
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Capabilities</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Multi-language code generation (Python, JavaScript, Go, Rust, etc.)</li>
            <li>• Code review and optimization suggestions</li>
            <li>• Technical documentation and API design</li>
            <li>• Algorithm implementation and debugging</li>
            <li>• Software architecture recommendations</li>
          </ul>
        </div>

        <CodeBlock language="python" title="Example: Creating a REST API">
{`# Generate a Flask REST API
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify({"users": []})

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    return jsonify({"message": "User created", "user": data}), 201

if __name__ == '__main__':
    app.run(debug=True)`}
        </CodeBlock>
      </section>

      <section className="space-y-6">
        <h2 id="selam-thinking" className="text-2xl font-semibold">🧠 Selam-Thinking</h2>
        <p className="text-muted-foreground">Deep analytical reasoning for complex problem-solving and strategic analysis.</p>
        
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Best Use Cases</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Business strategy and market analysis</li>
            <li>• Research paper analysis and synthesis</li>
            <li>• Complex decision-making scenarios</li>
            <li>• Data interpretation and insights</li>
            <li>• Academic and scientific reasoning</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="selam-plus" className="text-2xl font-semibold">⚡ Selam-Plus</h2>
        <p className="text-muted-foreground">Enhanced general-purpose model with vision capabilities for comprehensive assistance.</p>
        
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Creative writing and content generation</li>
            <li>• Image analysis and description</li>
            <li>• Customer support automation</li>
            <li>• General conversation and Q&A</li>
            <li>• Multimodal understanding</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="selam-turbo" className="text-2xl font-semibold">🚀 Selam-Turbo</h2>
        <p className="text-muted-foreground">Ultra-fast model optimized for real-time applications and high-throughput scenarios.</p>
        
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Performance</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Average response time: &lt;500ms</li>
            <li>• Optimized for streaming responses</li>
            <li>• High concurrent request handling</li>
            <li>• Reduced context window for speed</li>
            <li>• Perfect for chatbots and real-time apps</li>
          </ul>
        </div>
      </section>
    </div>
  );
}