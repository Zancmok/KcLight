ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal('tribes_help')
      .requires(s => s.hasPermission(0))
      .executes(ctx => {
        const player = ctx.source.player

		// Utils.server.runCommand(`say ${player} halo`)
        return 1
      })
  )
})
