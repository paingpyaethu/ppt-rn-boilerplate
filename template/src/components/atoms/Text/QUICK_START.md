# Text Components - Quick Start Guide

## 🚀 Quick Import

```tsx
import { Text, Heading, Caption, Label, ErrorText, Link } from '@/components/atoms';
```

## 📝 Common Usage Examples

### Basic Text
```tsx
<Text>Hello World</Text>
<Text size="size_24" weight="bold" color="purple500">
  Important Message
</Text>
```

### Headings
```tsx
<Heading level={1}>Page Title</Heading>
<Heading level={2} color="purple500">Section</Heading>
<Heading level={3}>Subsection</Heading>
```

### Form Labels
```tsx
<Label>Username</Label>
<Label required>Password</Label>
<Label size="small" color="gray400">Optional</Label>
```

### Error Messages
```tsx
<ErrorText visible={hasError}>
  This field is required
</ErrorText>
```

### Captions & Helper Text
```tsx
<Caption size="small">
  This is helper text
</Caption>
<Caption size="medium" color="gray200">
  Additional information
</Caption>
```

### Links
```tsx
<Link onPress={handlePress}>Click here</Link>
<Link underline onPress={handleNavigate}>Learn more</Link>
<Link disabled>Coming soon</Link>
```

## 🎨 All Available Props

### Text Component Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'size_12' \| 'size_16' \| 'size_24' \| 'size_32' \| 'size_40' \| 'size_80'` | `'size_16'` | Font size |
| `weight` | `'regular' \| 'medium' \| 'semiBold' \| 'bold'` | `'regular'` | Font weight |
| `color` | Theme color key | `'gray800'` | Text color |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `transform` | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'` | `'none'` | Text transform |
| `numberOfLines` | `number` | - | Max lines |
| `style` | `StyleProp<TextStyle>` | - | Custom styles |
| `testID` | `string` | - | Test identifier |
| `onPress` | `() => void` | - | Press handler |
| `selectable` | `boolean` | `false` | Text selectable |

## 🏗️ Component Architecture

```
Text (Base)
├── Heading (Pre-configured headings)
├── Caption (Small descriptive text)
├── Label (Form field labels)
├── ErrorText (Error messages)
└── Link (Clickable text)
```

## 💡 Pro Tips

1. **Always use theme colors**: Use `color="purple500"` instead of hardcoded colors
2. **Leverage variants**: Use specialized components (`Heading`, `Caption`, etc.) for consistency
3. **Keep it semantic**: Use appropriate components for their intended purpose
4. **Test accessibility**: Use `testID` prop for testing
5. **Language support**: Components automatically adapt font families based on language

## 🔧 Customization Examples

### Custom Styled Text
```tsx
<Text 
  size="size_24"
  weight="bold"
  color="purple500"
  align="center"
  transform="uppercase"
  style={{ letterSpacing: 2 }}
>
  Custom Text
</Text>
```

### Form Field with All Elements
```tsx
<View>
  <Label required>Email Address</Label>
  <TextInput />
  <ErrorText visible={error}>Invalid email</ErrorText>
  <Caption size="small">We'll never share your email</Caption>
</View>
```

### Multi-line Truncated Text
```tsx
<Text numberOfLines={3}>
  Long text that will be truncated after three lines...
</Text>
```

### Styled Link Button
```tsx
<Link 
  size="size_16"
  weight="semiBold"
  underline
  onPress={handleAction}
  style={{ marginTop: 20 }}
>
  View Details →
</Link>
```

## 🎯 Best Practices

### ✅ DO
- Use semantic components (`Heading`, `Label`, etc.)
- Leverage theme colors for consistency
- Use appropriate font sizes from the design system
- Test with different languages
- Provide testIDs for important text

### ❌ DON'T
- Don't use hardcoded colors or font families
- Don't bypass the component system for one-off styles
- Don't forget to handle text truncation for long content
- Don't mix RN's Text with custom Text components unnecessarily

## 🧪 Testing

```tsx
import { render } from '@testing-library/react-native';
import { Text } from '@/components/atoms';

it('renders text correctly', () => {
  const { getByTestId } = render(
    <Text testID="my-text">Hello</Text>
  );
  expect(getByTestId('my-text')).toBeTruthy();
});
```

## 🌍 Internationalization

Text components work seamlessly with i18next:

```tsx
import { useTranslation } from 'react-i18next';
import { Text } from '@/components/atoms';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <Text size="size_16" weight="medium">
      {t('common.welcome')}
    </Text>
  );
};
```

The font family automatically switches based on the selected language (SpaceGrotesk for English, Pyidaungsu for Myanmar).
