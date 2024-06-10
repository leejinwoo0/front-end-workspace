## hs1/hs1a 표기법

- hs1 표기법은 앞에서부터 색상(hue), 채도(saturation), 밝기(brightness)를 표시
- hs1a 표기법은 hs1에 불투명도 값을 추가로 지정
- 색상(hue)은 색상환으로 표시

# Flex(Flex Box, Flexbox)

- CSS 레이아웃 모델로 화면 크기에 따라 레이아웃의 배치나 크기를
  조절할 때 편리하게 사용

'''htm1

<div class="container">

## display: flex;

-Flex 컨테이너에 'display: flex;' 적용하면서 시작

'''ccc
.container {
display: flex;
'''
}

## flex-direction

- 배치 방향 설정
- 아이템들이 배치된느 메인축의 방향을 결정하는 속성

```css
.container {
  flex-direction: row / colum / row-reverse / column-reverse;
}
```

- row : 왼쪽부터 순차적으로 배치
  (기본값)
- row-reverse : 오른쪽부터 배치
- column : 위에서부터 배치
- column-reverse : 아래애서부터 배치

## flex-wrap

- 아이템 줄바꿈을 어떻게 할지 결정하는 속성

```css
.container {
    flex-wrap : nowrap / wrap / wrap-reverse:
}
```

- no-wrap : 기본값 줄바꿈을 하지않음
- wrap : 줄바꿈
- wrap-reverse : 역순으로 배치후 줄바꿈

## flex-flow

- flex-direction 과 flex-wrap 을 한꺼번에 지정할 수 있는 속성

```css
.container {
  flex-flow: flex-direction flex-wrap;
}
```

## justify-content

- 메인축 방향으로 정렬

```css
.container {
  justify-content: flex-start / flex-end / center / space-between /
    space-around / space-evenly;
}
```

- flex-start : 기본값 아이템들을 시작점으로 정렬
- flex-end : 아이템들을 끝점으로 정렬
- center : 아이템들을 가운데로 정렬
- space-between : 아이템들 사이에 균일한 간격으로 정렬
- space-around : 각 아이템의 좌우에 균일한 간격으로 정렬
- space-evenly : 아이템들의 사이와 양 끝에 균일한 간격으로 정렬

## align-items

- 수직축 방향으로 정렬

```css
.container {
  align-items: stretch / flex-start / flex-end / center / baseline;
}
```

- stretch : 기본값 아이템들을 끌까지 늘림
- flex-start : 아이템들을 위쪽으로 정렬
- flex-end : 아이템들을 아래쪽으로 정렬
- center : 아이템들을 가운데 정렬
- baseline : 아이템들을 텍스트 베이스라인 기준으로 정렬

## align-content

- 여러 행 정렬
- `flex-wrap: wrap` 이 설정된 상태에서, 아이템들의 행이 2줄 이상인 경우 수직축 방향 정렬을 결정하는 속성

```css
.container {
  align-content: stretch / flex-start / flex-end / center / space-between /
    space-around / space-evenly;
}
```

## flex-basis

- flex 아이템의 기본 크기 설정 (flex-direction이 row일 때는 너비, colum일 때는 높이)

```css
.item {
  flex-basis: auto / 0 / 크기;
}
```

## flex-grow

- flex-basis의 값보다 커질 수 있는지르 결정하는 속성

```css
.item {
  flex-grow: 0 / 숫자;
}
```

## flex-shrink

- flex-grow와 쌍을 이루는 속성으로, flex-basis 값보다 작아질수 있는지를 결정하는 속성

```css
.item {
  flex-shrink: 1 / 숫자;
}
```

## flex

- flex-grow, flex-shrink, flex-basis 를 한번에 쓸 수 있는 속성

```css
.item {
  flex: 1 1 auto;
  /* flex-grow:1, flex-shrink:1, flex-basis:auto */
  flex: 1 500px;
  /* flex-grow:1, flex-shrink:1, flex-basis:500px */
  flex: 1;
  /* flex-grow:1, flex-shrink:1, flex-basis:0% */
}
```

## align-self

-특정 아이템만 정렬을 따로 정렬하고자 할 때 사용하는 속성

```css
.item {
  align-self: flex-start / flex-end / center / baseline / stretch;
}
```

## order

-item 들의 순서를 바꿀 수 있는 속성

```css
.item {
  order: 0 / 숫자;
}
```
