# Title

## sub

### subsub

hi there

---

| a   | b       | c   |
| --- | ------- | --- |
| a   | a thing | c   |

Hello

    quote

`echo` Will echo out a `string` on the command line

```js
const x = 23;
```

1. 2. 3)

**bold**

# Javascript - Chapter 1

## Strings

- Strings are used to represent text.
- Written by enclosing their content in quotes.
- Example: `Down on the sea`
- Example: "Lie on the ocean"
- Example: 'Float on the ocean'
- _Newlines_ (the characters you get when you press ENTER) can be included without escaping only when the string is quoted with backticks (`)
- \ = when found inside a quoted text, it indicates that the character after it has a special meaning = _escaping_ the character.
- A quote that is preceded by a backslash (\) will not end the string but be part of it.
- When an n character occurs after a backslash, it is interpreted as a newline.
- A t after a blackslash means tab character.

```js
Example: "This is the first line\nAnd this is the second";
Turns into: "This is the first line
             And this is the second"
```

- If you want a backslash to just be a backslash and not special code, put two backslashes. They will collapse together and only one will be left in the resulting string value.

```js
"A newline character is wrring like \"\\n\".";
```

- **Strings cannot be divided, multiplied, or subtracted,** but the + operator _can_ be used on them. It does not add, but it _concatenates_ - it glues two strings together.

```js
"con" + "cat" + "e" + nate" = concatenates
```

- Strings written with single or double quotes behave very muc hthe same - the only difference is in which type of quote you need to escape inside them.
- Backtick-quoted strings, usually called _template literals_, can do a few more tricks. They can span lines and embed other values.

```js
Example: `half of 100 is ${100 / 2}`;
```

- When you write something inside \${} in a template literal, its result will be computed, converted to a strong, and included at that position.
- The example produces _half of 100 is 50_.

## Unicode Standard

- Assigns a number to virtually every character you would ever need, including characters from Greek, Arabic, Japanese, Armenian etc.
- If we have a number for every character, a strong can be described by a sequence of numbers.

## Unary Operators

- _type of_ operator = produces a string value naming the type of value you give it.

```js
console.log(typeof 4.5);
// number
console.log(typeof "x");
// string
```

- The other operators shown all operated on two values, but _typeof_ takes only one.
- Operators that use two values = _binary_ operators
- Operators that use one value = _unary_ operators
- The minus operator can be used both as a binary operator and as a unary operator.

```js
console.log(- (10-2))
// -8
**Example of a binary operator**
```

## Boolean Values = True or False

- Has just two values, true and false, which are written as those words.

### Comparison

```js
console.log(3 > 2);
// True
console.log(3 < 2);
//False
```

- < > are tradition symbols for "is less than" and "is greater than" = _these are binary operators_ Applying these results in a Boolean value that indicates whether they hold true in this case.
- Strings can be compared in the same way

```js
console.log (Aardvark" < "Zoroaster")
// true
```

- The way strings are ordered is roughly alphabetic = uppercase letters are always "less" than lowercase ones, so "Z" < "a", and nonalphabetic charcters (!, -, etc.) are also included in that ordering.
- When comparing strings, JS goes over the characters from left to right, comparing the Unicode codes one by one.
- ">=" means greater than or equal to
- "<=" means less than or equal to
- "==" means equal to
- "!=" means not equal to

```js
console.log("Itchy" != "Scratchy");
//true
console.log("Apple" == "Orange");
//False
```

- There is only one value in JS that is not equal to itself, and that is NaN ("not a number")

```js
console.log(NaN == NaN);
//false
```

- NaN is suppsoed to denote the result of nonsensical computation, and as such, it isn't equal to the result of any _other_ nonsensical computations.

### Logical Operators

- There are some operations that can be applied to Boolean values themselves. JS supports three logical operators: _and, or_ and _not_. = These can be used to "reason" about Booleans.
- The && operators represents logical _and_. It is a binary operator, and its result is true only if **both the values** given to it are **true**.

```js
console.log(true && false);
// false
console.log(true && true);
//true
```

- The || operator denotes logical _or_. It produces true if either of the values given to it is true.

```js
console.log(false || true);
//true
console.log(false || false);
//false
```

- _Not_ is written as an exclamation mark (!). It is a unary operator that flips the value given to it - _!true_ produces _false_, and _!false_ gives _true_.
- When mixing these Boolean operators with arithmetic and other operators, it is not always obvious when () are needed.
- In practice, you can usually get by with knowing that of the operators we have seen so far, || has the lowest precedence, then comes &&, then the comparison operators (>, ==, etc.) and then the rest.
- This order has been chosen so that, in typical expressions like below, as few () as possible are necessary:

```js
1 + 1 == 2 && 10 * 10 > 50;
```

### Ternary logical operator

- Operates on three values.
- Written with a question mark and a colon:

```js
console.log(true ? 1 : 2);
// 1
console.log(false ? 1 : 2);
// 2
```

- Called the _conditional_ operator (or sometimes just the _ternary_ operator since it is the only such operator in the language).
- The value on the left of the question mark "picks" which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.

## Empty Values

- There are two special values, written _null_ and _undefined_, that are used to denote the absence of a _meaningful_ value.
- They are themselves values, but they carry no information.

## Automatic Type Conversion

- Examples of how JS accepts almost any program you give it, even programs that do odd things:

```js
console.log(8 * null);
// 0
console.log("5" - 1);
// 4
console.log("5" + 1);
//51
console.log("five" * 2);
// NaN
console.log(false == 0);
// true
```

- When an operator is applied to the "wrong" type of value, JS will quietly convert that value to the type it needs, using a set of rules that often aren't what you want or expect. = _type coercion_
- The _null_ from the first expression becomes 0 and the "5" in the second expression becomes "5" (from string to number). Yet in the third expression, + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).
- When something that doesn't map to a number in an obvious way (such as "five" or "undefined") is converted to a number, you get the value "NaN", so if you find yourslef getting one of those in an unexpected place, look for accidental type conversions.
- In most cases, JS tries to convert one of the values to the other value's type. However, when "null" or "undefined" occurs on either side of the operator, it produces true only if both sides are one of "null" or "undefined".

```js
console.log(null == undefined);
//true
console.log(null == 0);
//false
```

- When you want to test whether a value has a real value instead of "null" or "undefined", you can compare it to null with the == (or !=) operator.
- "===" tests whether a value is _precisely_ equal to the other.
  "=== false" = false.
- "!==" tests whether it is not _precisely_ equal to the other.
- **It is recommended to use the three-character comparison operators to prevent unexpected type conversions from tripping you up.**

## Short-Circuiting of Logical Operators

- The logical operators && and || handle values of different types in a peculiar way.
- They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the _original_ left-hand value or the right-hand value.
- The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise.

```js
console.log(null || "user");
//user
console.log("Agnes" || "user");
//Agnes
```

- We can use this funtionality as a way to fall abck on a default value.
- If you have a value that might be empty, you can put || after it with a replacement value. If the initial value can be converted to false, you'll get the replacement instead.
  The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as _false_, while all other values count as true. So 0 || -1 produces -1, and "" || "!?" = !?
- The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.
- The part to their right is only evaluated whe necessary.
- Example: true || x = no matter what X is - even if it's a piece of program that does something terrible - the result will be true,and X is never evaluated. Same goes for "false && X", which is false and will ignore X. = Called _short-circuit evaluation_.
- The conditional operator (ternary operator) works in a similar way. Of the second and third values, only the one that is selected is evaluated.

## Summary

- Values are created by typing in their name (true, null) or value (13, abc).
- You can combine and transform values with operators.
- Binary operators for arithmetic (+, -, \, /, and %). % is used to represent the remainder operation.
- String concatenation (+).
- Comparison ( ==, !=, ===, !==, <, >, <=,>=).
- Logic (&&, ||).
- Several unary operators (- to negate a number, ! to negate logically, and _typeof_ to find a value's type).
- Ternary operator (?:) to pick one of two values based on a third value.

# Javascript - Chapter 2

## Expressions and Statements

-
