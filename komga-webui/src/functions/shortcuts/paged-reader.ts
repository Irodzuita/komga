import {Shortcut} from '@/types/shortcuts'

export const shortcutsLTR = [
  new Shortcut('bookreader.shortcuts.previous_page',
    (ctx: any) => {
      ctx.turnLeft()
    }, 'ArrowLeft', '←'),
  new Shortcut('bookreader.shortcuts.next_page',
    (ctx: any) => {
      ctx.turnRight()
    }, 'ArrowRight', '→'),
]

export const shortcutsRTL = [
  new Shortcut('bookreader.shortcuts.previous_page',
    (ctx: any) => {
      ctx.turnRight()
    }, 'ArrowRight', '→'),
  new Shortcut('bookreader.shortcuts.next_page',
    (ctx: any) => {
      ctx.turnLeft()
    }, 'ArrowLeft', '←'),
]

export const shortcutsVertical = [
  new Shortcut('bookreader.shortcuts.previous_page',
    (ctx: any) => {
      ctx.verticalPrev()
    }, 'ArrowUp', '↑'),
  new Shortcut('bookreader.shortcuts.previous_page',
    (ctx: any) => {
      ctx.verticalPrev()
    }, 'x', 'X'),
  new Shortcut('bookreader.shortcuts.next_page',
    (ctx: any) => {
      ctx.verticalNext()
    }, 'ArrowDown', '↓'),
  new Shortcut('bookreader.shortcuts.next_page',
    (ctx: any) => {
      ctx.verticalNext()
    }, 'z', 'Z'),
]

export const shortcutsSettingsPaged = [
  new Shortcut('bookreader.shortcuts.cycle_page_layout',
    (ctx: any) => ctx.cyclePageLayout()
    , 'd'),
]
