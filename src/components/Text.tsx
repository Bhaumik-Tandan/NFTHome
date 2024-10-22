import { PRIMARY_FONT_STYLE } from 'constants/styles/text';
import TextProps from 'types/props/TextProps';

function Text({ children }: TextProps) {
  return (
    <p style={style}>
      {children}
    </p>
  );
}

export default Text;

const style = {
  ...PRIMARY_FONT_STYLE,
};
