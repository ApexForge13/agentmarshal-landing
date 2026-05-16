export default function Problem() {
  return (
    <section className="section-pad section-rule problem">
      <div className="wrap-narrow">
        <p className="lead">
          Services businesses are starting to deploy autonomous agents with real credentials, real corporate cards, and real authority to commit to contracts. Governance hasn&rsquo;t caught up.
        </p>
        <p style={{ marginTop: 24 }}>
          A manipulated prompt can authorize a wire transfer, leak a customer list, or sign the company up for a recurring invoice — and the only record is a chat log nobody reviews. AgentMarshal is the layer between the agent and the action: every tool call gets a verdict, every verdict gets logged, and anything outside the agent&rsquo;s declared scope stops at the policy engine before it ever reaches a downstream system.
        </p>
      </div>
    </section>
  );
}
