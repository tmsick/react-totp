import React from "react"

export const WarningMessage: React.VFC = () => {
  return (
    <article className="message is-warning">
      <div className="message-header">
        <p>Warning</p>
      </div>
      <div className="message-body">
        All registered data in this app is ephemeral in memory and you cannot
        rely on this app to retrieve real TOTPs. Use this app only for demo
        usage. We, the app provider, are not responsible for any damage you have
        taken by using this app.
      </div>
    </article>
  )
}
