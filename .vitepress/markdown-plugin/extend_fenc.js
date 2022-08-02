module.exports = md => {
  const originalFence = md.renderer.rules.fence.bind(md.renderer.rules)

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]

    //是不是 dot,viz-dot,dot,neato-dot
    //[布局方式]-dot
    if (token.info.length >= 3 && /dot$/.test(token.info.trim())) {
      return `<pre v-pre class="dot loading">${token.content.trim()}</pre>`
    }

    return originalFence(tokens, idx, options, env, slf)
  }
}
