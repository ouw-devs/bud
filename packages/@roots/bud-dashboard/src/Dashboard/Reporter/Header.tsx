import {React, Box, Text, Spinner} from '@roots/bud-support'

export const Header = ({
  colors,
  progress,
  stats,
  hasErrors,
  pkg,
}) => (
  <Box flexDirection="row">
    <BuildIndicator
      hasErrors={hasErrors}
      colors={colors}
      progress={progress}
      stats={stats}
      pkg={pkg}
    />

    <BuildProgressMessage
      colors={colors}
      progress={progress}
      stats={stats}
    />
  </Box>
)

/**
 * Icon representing if compilation is happening
 */
const BuildIndicator = ({
  colors,
  hasErrors,
  progress,
  stats,
  pkg,
}) => {
  const showSpinner =
    progress?.message && !hasErrors && !stats?.hash
  const showCheck = stats?.hash && !hasErrors
  const showX = hasErrors

  return (
    <Box marginBottom={1}>
      <Text>
        {showSpinner && (
          <Text color={colors?.white}>
            <Spinner />
          </Text>
        )}
        {showCheck && <Text color={colors?.success}>✓</Text>}
        {showX && <Text color={colors?.error}>X</Text>}{' '}
        {pkg?.name}{' '}
      </Text>
    </Box>
  )
}

/**
 * Current compilation output
 */
const BuildProgressMessage = ({progress, colors, stats}) => (
  <Text dimColor italic>
    {' '}
    {progress?.message ? (
      <Text italic color={colors?.subdued}>
        {progress?.message}{' '}
      </Text>
    ) : stats?.hash ? (
      <Text italic color={colors?.subdued}>
        {stats?.hash}{' '}
      </Text>
    ) : (
      <></>
    )}
  </Text>
)
