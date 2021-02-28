import {React, Text, Gradient} from '@roots/bud-support'

export const Bar: React.FunctionComponent<{
  colors?: [string, string]
  backgroundColor?: string
  backgroundCharacter?: string
  percent: number
  character?: string
  maxWidth?: number
}> = ({
  character = '█',
  colors = ['white', 'white'],
  backgroundCharacter = ' ',
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
  percent,
  maxWidth,
}) => {
  const fill = Math.min(Math.floor(maxWidth * percent), maxWidth)
  const background = maxWidth - fill

  return percent <= 0 ? null : (
    <Text>
      <Gradient name="vice">{character.repeat(fill)}</Gradient>

      <Text backgroundColor={backgroundColor} dimColor>
        {backgroundCharacter.repeat(background)}
      </Text>
    </Text>
  )
}
