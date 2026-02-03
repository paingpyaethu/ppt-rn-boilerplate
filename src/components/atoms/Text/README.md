# Text Components Documentation

This folder contains a comprehensive set of reusable Text components that integrate seamlessly with the theme system.

## Components

### 1. Text (Base Component)

The base Text component with full customization options.

**Props:**
- `children`: Text content to display
- `size`: Font size variant (`size_12`, `size_16`, `size_24`, `size_32`, `size_40`, `size_80`)
- `weight`: Font weight (`regular`, `medium`, `semiBold`, `bold`)
- `color`: Theme color variant (any color from theme)
- `align`: Text alignment (`left`, `center`, `right`, `justify`)
- `transform`: Text transformation (`none`, `capitalize`, `uppercase`, `lowercase`)
- `numberOfLines`: Number of lines to display
- `style`: Additional custom styles
- `testID`: Test identifier
- `onPress`: Callback when text is pressed
- `selectable`: Whether text is selectable

**Example:**
```tsx
import { Text } from '@/components/atoms';

<Text size="size_16" weight="medium" color="gray800">
  Hello World
</Text>

<Text 
  size="size_24" 
  weight="bold" 
  color="purple500"
  align="center"
  transform="uppercase"
>
  Title
</Text>
```

---

### 2. Heading

Pre-configured heading component for titles and section headers.

**Props:**
- All Text props except `size` and optionally `weight`
- `level`: Heading level (1-6, default: 1)

**Heading Configurations:**
- H1: size 40, bold
- H2: size 32, bold
- H3: size 24, semiBold
- H4: size 24, medium
- H5: size 16, semiBold
- H6: size 16, medium

**Example:**
```tsx
import { Heading } from '@/components/atoms';

<Heading level={1}>Main Title</Heading>
<Heading level={2} color="purple500">Section Title</Heading>
<Heading level={3}>Subsection</Heading>
```

---

### 3. Caption

Small descriptive text component for captions and helper text.

**Props:**
- All Text props except `size`
- `size`: Caption size (`small` for 12px, `medium` for 16px)
- Default color: `gray400`

**Example:**
```tsx
import { Caption } from '@/components/atoms';

<Caption size="small">This is a small caption</Caption>
<Caption size="medium" color="gray200">Medium sized helper text</Caption>
```

---

### 4. Label

Label component for form fields and input labels.

**Props:**
- All Text props except `size`
- `required`: Show required asterisk (default: false)
- `size`: Label size (`small`, `medium`, `large`)
- Default weight: `medium`

**Example:**
```tsx
import { Label } from '@/components/atoms';

<Label>Email Address</Label>
<Label required>Password</Label>
<Label size="small" color="gray400">Optional field</Label>
```

---

### 5. ErrorText

Error message component for displaying validation errors.

**Props:**
- All Text props except `size` and `color`
- `visible`: Whether to show the error (default: true)
- Fixed size: `size_12`
- Fixed color: `red500`

**Example:**
```tsx
import { ErrorText } from '@/components/atoms';

<ErrorText visible={hasError}>
  This field is required
</ErrorText>

<ErrorText visible={emailError}>
  Please enter a valid email address
</ErrorText>
```

---

### 6. Link

Clickable text component for links and actions.

**Props:**
- All Text props
- `underline`: Whether to underline the link (default: false)
- `disabled`: Whether the link is disabled (default: false)
- Default color: `purple500` (or `gray400` when disabled)

**Example:**
```tsx
import { Link } from '@/components/atoms';

<Link onPress={handlePress}>
  Click here
</Link>

<Link underline onPress={handleNavigate}>
  Learn more
</Link>

<Link disabled>
  Disabled link
</Link>
```

---

## Theme Integration

All Text components automatically integrate with your theme system:
- Font families adapt based on the selected language (SpaceGrotesk for English, Pyidaungsu for Myanmar)
- Colors are sourced from the theme configuration
- Font sizes and weights follow the theme guidelines
- Supports dark mode automatically

---

## Advanced Usage

### Combining Components
```tsx
import { View } from 'react-native';
import { Heading, Text, Caption, Link } from '@/components/atoms';

<View>
  <Heading level={2}>Welcome Back</Heading>
  <Text size="size_16" weight="regular" color="gray400">
    Sign in to continue
  </Text>
  <Caption size="small">
    By signing in, you agree to our terms
  </Caption>
  <Link underline onPress={handleTerms}>
    Read Terms & Conditions
  </Link>
</View>
```

### Form Example
```tsx
import { View } from 'react-native';
import { Label, ErrorText, Caption } from '@/components/atoms';
import { TextInput } from 'react-native';

<View>
  <Label required>Email</Label>
  <TextInput />
  <ErrorText visible={hasError}>
    Please enter a valid email
  </ErrorText>
  <Caption size="small">
    We'll never share your email
  </Caption>
</View>
```

### Internationalization
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

---

## Testing

All components support the `testID` prop for testing:

```tsx
<Text testID="welcome-text">Welcome</Text>
<Heading testID="page-title" level={1}>Title</Heading>
<Link testID="learn-more-link" onPress={handlePress}>Learn More</Link>
```

---

## Accessibility

The components inherit React Native's Text accessibility features:
- Use `selectable` prop to allow text selection
- Automatically respects system font scaling
- Screen reader compatible

```tsx
<Text selectable>This text can be selected and copied</Text>
```
