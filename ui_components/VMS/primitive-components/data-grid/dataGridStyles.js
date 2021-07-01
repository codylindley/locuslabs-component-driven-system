import styled from 'styled-components';
import Box from '@locus-labs/vms-box';

/* stylelint-disable */

const GridStyles = styled(Box)`
	/* IMPORTANT - removed all font-size: 14px properties below from https://npmfs.com/package/@inovua/reactdatagrid-community/4.0.33/index.css. If you update this, remove all font-sizes. Then user overrides are at end of file to override these third party CSS declarations  */

	.inovua-react-toolkit-checkbox {
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		outline: none;
		vertical-align: middle;
	}
	.inovua-react-toolkit-checkbox--inline-block {
		display: inline-flex;
	}
	.inovua-react-toolkit-checkbox__icon-wrapper {
		display: flex;
	}
	.inovua-react-toolkit-checkbox__icon-wrapper svg {
		display: block;
	}
	.inovua-react-toolkit-checkbox--children-position-start {
		flex-flow: row-reverse;
	}
	.inovua-react-toolkit-checkbox--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-checkbox--read-only {
		cursor: auto;
	}
	.inovua-react-toolkit-checkbox--disabled {
		cursor: auto;
		outline: none;
		pointer-events: none;
	}
	.inovua-react-toolkit-checkbox--browser-native {
		padding: 0;
		margin: 0;
		display: inline-block;
	}
	.inovua-react-toolkit-overlay {
		position: absolute;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}
	.inovua-react-toolkit-overlay,
	.inovua-react-toolkit-overlay * {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-overlay--position-fixed {
		position: fixed;
	}
	.inovua-react-toolkit-overlay--visible {
		visibility: visible;
		pointer-events: inherit;
		opacity: 1;
	}
	.inovua-react-toolkit-overlay--has-transition.inovua-react-toolkit-overlay--transition-enter {
		opacity: 0;
		visibility: visible;
	}
	.inovua-react-toolkit-overlay--has-transition.inovua-react-toolkit-overlay--transition-enter-active {
		transition: opacity 1s ease;
		opacity: 1;
	}
	.inovua-react-toolkit-overlay--has-transition.inovua-react-toolkit-overlay--transition-leave {
		visibility: visible;
		opacity: 1;
	}
	.inovua-react-toolkit-overlay--has-transition.inovua-react-toolkit-overlay--transition-leave-active {
		transition: opacity 1s ease;
		opacity: 0;
	}
	.inovua-react-toolkit-overlay__content {
		position: relative;
		z-index: 1;
	}
	.inovua-react-toolkit-overlay__arrow-wrapper {
		position: absolute;
		overflow: hidden;
	}
	.inovua-react-toolkit-overlay__arrow-wrapper--bottom,
	.inovua-react-toolkit-overlay__arrow-wrapper--top {
		transform: translateX(-50%);
	}
	.inovua-react-toolkit-overlay__arrow-wrapper--left,
	.inovua-react-toolkit-overlay__arrow-wrapper--right {
		transform: translateY(-50%);
	}
	.inovua-react-toolkit-overlay__arrow {
		position: absolute;
		transform-origin: center;
	}
	.inovua-react-toolkit-overlay__arrow--top {
		left: 50%;
		top: 0;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
	}
	.inovua-react-toolkit-overlay__arrow--left {
		top: 50%;
		left: 0;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
	}
	.inovua-react-toolkit-overlay__arrow--right {
		right: 0;
		top: 50%;
		transform: translateX(50%) translateY(-50%) rotate(45deg);
	}
	.inovua-react-toolkit-overlay__arrow--bottom {
		left: 50%;
		bottom: 0;
		transform: translateX(-50%) translateY(50%) rotate(45deg);
	}
	.inovua-react-toolkit-date-input {
		box-sizing: border-box;
		position: relative;
		overflow: visible;
		vertical-align: middle;
	}
	.inovua-react-toolkit-date-input *,
	.inovua-react-toolkit-date-input :after,
	.inovua-react-toolkit-date-input :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-date-input > .inovua-react-toolkit-date-input__picker {
		min-width: 100%;
		position: absolute;
		z-index: 100;
		left: -1px;
		background: #fff;
	}
	.inovua-react-toolkit-date-input--picker-position-bottom
		> .inovua-react-toolkit-date-input__picker {
		top: 100%;
	}
	.inovua-react-toolkit-date-input--picker-position-top
		> .inovua-react-toolkit-date-input__picker {
		bottom: 100%;
	}
	.inovua-react-toolkit-date-input__input {
		width: 100%;
		flex: 1 1 auto;
		padding: 5px;
		border: none;
		outline: none;
	}
	.inovua-react-toolkit-date-input__clear-icon {
		color: grey;
		fill: grey;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-date-input__clear-icon svg {
		vertical-align: middle;
	}
	.inovua-react-toolkit-date-input__clear-icon:hover {
		color: #4d4d4d;
		fill: #4d4d4d;
	}
	.inovua-react-toolkit-calendar__clock {
		box-sizing: border-box;
		display: inline-block;
		border-radius: 50%;
		position: relative;
	}
	.inovua-react-toolkit-calendar__clock *,
	.inovua-react-toolkit-calendar__clock :after,
	.inovua-react-toolkit-calendar__clock :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__clock-center,
	.inovua-react-toolkit-calendar__clock-overlay {
		border-radius: 50%;
		position: absolute;
		transform: translate3d(-50%, -50%, 0);
		top: 50%;
		left: 50%;
	}
	.inovua-react-toolkit-calendar__clock-hand,
	.inovua-react-toolkit-calendar__clock-tick {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 1px;
	}
	.inovua-react-toolkit-calendar__date-format-spinner,
	.inovua-react-toolkit-calendar__date-format-spinner *,
	.inovua-react-toolkit-calendar__date-format-spinner :after,
	.inovua-react-toolkit-calendar__date-format-spinner :before,
	.inovua-react-toolkit-calendar__time-picker,
	.inovua-react-toolkit-calendar__time-picker *,
	.inovua-react-toolkit-calendar__time-picker :after,
	.inovua-react-toolkit-calendar__time-picker :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__time-picker-input {
		margin-top: 10px;
	}
	.inovua-react-toolkit-calendar__year-view {
		box-sizing: border-box;
		outline: none;
	}
	.inovua-react-toolkit-calendar__year-view *,
	.inovua-react-toolkit-calendar__year-view :after,
	.inovua-react-toolkit-calendar__year-view :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__year-view-month {
		text-align: center;
	}
	.inovua-react-toolkit-calendar__decade-view {
		box-sizing: border-box;
		outline: none;
	}
	.inovua-react-toolkit-calendar__decade-view *,
	.inovua-react-toolkit-calendar__decade-view :after,
	.inovua-react-toolkit-calendar__decade-view :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__decade-view-year {
		text-align: center;
	}
	.inovua-react-toolkit-calendar__month-decade-view {
		box-sizing: border-box;
		outline: none;
	}
	.inovua-react-toolkit-calendar__month-decade-view *,
	.inovua-react-toolkit-calendar__month-decade-view :after,
	.inovua-react-toolkit-calendar__month-decade-view :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__month-decade-view__separator {
		border: none;
	}
	.inovua-react-toolkit-calendar__nav-bar {
		box-sizing: border-box;
		outline: none;
	}
	.inovua-react-toolkit-calendar__nav-bar *,
	.inovua-react-toolkit-calendar__nav-bar :after,
	.inovua-react-toolkit-calendar__nav-bar :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__nav-bar-date {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.inovua-react-toolkit-calendar__nav-bar svg {
		vertical-align: middle;
	}
	.inovua-react-toolkit-calendar__nav-bar-month-decade-view-modal {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}
	.inovua-react-toolkit-calendar__nav-bar-month-decade-view {
		z-index: 100;
		position: absolute;
		margin: auto;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.inovua-react-toolkit-calendar__nav-bar-month-decade-view-calendar,
	.inovua-react-toolkit-calendar__nav-bar-month-decade-view-month {
		left: 0;
	}
	.inovua-react-toolkit-calendar__nav-bar-month-decade-view-show-animation {
		visibility: visible;
		-webkit-animation: inovua-react-toolkit-calendar-month-decade-view-animation-fade-in
			0.3s;
		animation: inovua-react-toolkit-calendar-month-decade-view-animation-fade-in
			0.3s;
	}
	@-webkit-keyframes inovua-react-toolkit-calendar-month-decade-view-animation-fade-in {
		0% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes inovua-react-toolkit-calendar-month-decade-view-animation-fade-in {
		0% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.inovua-react-toolkit-calendar__nav-bar-arrow {
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
		position: relative;
	}
	.inovua-react-toolkit-calendar__nav-bar-arrow--disabled {
		fill: #bfbfbf;
		cursor: default;
	}
	.inovua-react-toolkit-date-input__overlay {
		border: 0;
		visibility: visible;
		-webkit-animation: inovua-react-toolkit-date-input-animation-fade-in 0.2s;
		animation: inovua-react-toolkit-date-input-animation-fade-in 0.2s;
	}
	@-webkit-keyframes inovua-react-toolkit-date-input-animation-fade-in {
		0% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.inovua-react-toolkit-calendar,
	.inovua-react-toolkit-calendar *,
	.inovua-react-toolkit-calendar :after,
	.inovua-react-toolkit-calendar :before,
	.inovua-react-toolkit-calendar__basic-month-view,
	.inovua-react-toolkit-calendar__basic-month-view *,
	.inovua-react-toolkit-calendar__basic-month-view :after,
	.inovua-react-toolkit-calendar__basic-month-view :before,
	.inovua-react-toolkit-calendar__calendar,
	.inovua-react-toolkit-calendar__calendar *,
	.inovua-react-toolkit-calendar__calendar :after,
	.inovua-react-toolkit-calendar__calendar :before,
	.inovua-react-toolkit-calendar__month-view,
	.inovua-react-toolkit-calendar__month-view *,
	.inovua-react-toolkit-calendar__month-view :after,
	.inovua-react-toolkit-calendar__month-view :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-calendar__month-view-week-number {
		flex: none;
	}
	.inovua-react-toolkit-calendar__transition-month-view {
		position: relative;
	}
	.inovua-react-toolkit-calendar__prev {
		transform: translate3d(-100%, 0, 0);
	}
	.inovua-react-toolkit-calendar__next {
		transform: translate3d(100%, 0, 0);
	}
	.inovua-react-toolkit-calendar--transition-left {
		transform: translate3d(-100%, 0, 0);
	}
	.inovua-react-toolkit-calendar--transition-left.inovua-react-toolkit-calendar__next {
		transform: translateZ(0);
	}
	.inovua-react-toolkit-calendar--transition-right {
		z-index: 1111;
		transform: translate3d(100%, 0, 0);
	}
	.inovua-react-toolkit-calendar--transition-right.inovua-react-toolkit-calendar__prev {
		transform: translateZ(0);
	}
	.inovua-react-toolkit-calendar__center {
		z-index: 10;
	}
	.inovua-react-toolkit-calendar__center.inovua-react-toolkit-calendar--transition,
	.inovua-react-toolkit-calendar__next.inovua-react-toolkit-calendar--transition,
	.inovua-react-toolkit-calendar__prev.inovua-react-toolkit-calendar--transition {
		transition-property: transform;
	}
	.inovua-react-toolkit-calendar__next,
	.inovua-react-toolkit-calendar__prev {
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		position: absolute !important;
	}
	.inovua-react-toolkit-calendar__basic-month-view,
	.inovua-react-toolkit-calendar__month-view {
		outline: none;
	}
	.inovua-react-toolkit-calendar__basic-month-view-week-day-name,
	.inovua-react-toolkit-calendar__month-view-week-day-name {
		padding: 5px 0;
	}
	.inovua-react-toolkit-calendar__basic-month-view-day--hidden,
	.inovua-react-toolkit-calendar__month-view-day--hidden {
		visibility: hidden;
	}
	.inovua-react-toolkit-calendar__basic-month-view-day--disabled,
	.inovua-react-toolkit-calendar__month-view-day--disabled {
		color: #bfbfbf;
	}
	.inovua-react-toolkit-calendar__basic-month-view-cell,
	.inovua-react-toolkit-calendar__month-view-cell {
		flex: 1 0 auto;
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: center;
	}
	.inovua-react-toolkit-calendar__basic-month-view-week-day-names,
	.inovua-react-toolkit-calendar__month-view-week-day-names {
		flex: none;
	}
	.inovua-react-toolkit-calendar__basic-month-view-row,
	.inovua-react-toolkit-calendar__month-view-row {
		display: flex;
		flex-flow: row;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: auto;
	}
	.inovua-react-toolkit-text-input {
		box-sizing: border-box;
		text-align: start;
		direction: ltr;
		display: inline-flex;
		border: 1px solid #c5c5c5;
		overflow: hidden;
		background: #fff;
		align-items: center;
	}
	.inovua-react-toolkit-text-input *,
	.inovua-react-toolkit-text-input :after,
	.inovua-react-toolkit-text-input :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-text-input:focus {
		outline: none;
	}
	.inovua-react-toolkit-text-input--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-text-input--rtl
		.inovua-react-toolkit-text-input__input {
		padding: 0 8px 0 5px;
	}
	.inovua-react-toolkit-text-input--rtl
		.inovua-react-toolkit-text-input__clear-button {
		margin: 0 0 0 6px;
	}
	.inovua-react-toolkit-text-input__input {
		border: none;
		outline: none;
		background: none;
		width: 100%;
		height: 100%;
		padding: 0 5px 0 8px;
	}
	.inovua-react-toolkit-text-input__input::-ms-clear {
		display: none;
	}
	.inovua-react-toolkit-text-input__clear-button {
		cursor: pointer;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		padding: 0;
		outline: none;
		top: 0;
		right: 1px;
		bottom: 0;
		margin: 0 6px 0 0;
	}
	.inovua-react-toolkit-text-input__clear-button svg {
		width: 20px;
		height: 20px;
	}
	.inovua-react-toolkit-text-input__clear-button-wrapper {
		visibility: visible;
		transition: opacity 0.2s;
		opacity: 1;
		transform: translateZ(0);
	}
	.inovua-react-toolkit-text-input__clear-button-wrapper:active {
		margin-top: 2px;
	}
	.inovua-react-toolkit-text-input__clear-button-wrapper--hidden {
		opacity: 0;
		visibility: hidden;
	}
	.InovuaReactDataGrid {
		text-align: start;
		outline: none;
		z-index: 0;
	}
	.InovuaReactDataGrid,
	.InovuaReactDataGrid *,
	.InovuaReactDataGrid :after,
	.InovuaReactDataGrid :before {
		box-sizing: border-box;
	}
	.InovuaReactDataGrid .inovua-react-pagination-toolbar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.InovuaReactDataGrid .InovuaReactDataGrid-modifier--relative {
		position: relative;
	}
	.InovuaReactDataGrid .inovua-react-virtual-list {
		position: absolute;
		height: 100%;
		box-sizing: content-box;
	}
	.InovuaReactDataGrid {
		flex: 1;
		position: relative;
		min-height: 200px;
	}
	.InovuaReactDataGrid div:focus {
		outline: 0;
	}
	.InovuaReactDataGrid--rtl {
		direction: rtl;
	}
	.InovuaReactDataGrid__body,
	.InovuaReactDataGrid__body-scroll-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.InovuaReactDataGrid__body {
		overflow: hidden;
		transform: translateZ(0);
	}
	.InovuaReactDataGrid__row-active-borders {
		pointer-events: none;
		z-index: 1;
	}
	.InovuaReactDataGrid__virtual-list--scrolling .InovuaReactDataGrid__row {
		pointer-events: none;
		contain: strict;
	}
	.InovuaReactDataGrid__column-layout {
		position: relative;
		min-width: 100%;
		max-height: 100%;
	}
	.InovuaReactDataGrid__column-layout--fixed {
		overflow: hidden;
	}
	.InovuaReactDataGrid__column-reorder-arrow {
		position: absolute;
		z-index: 1000;
		fill: #000;
		display: block;
	}
	.InovuaReactDataGrid__column-reorder-arrow-fill {
		height: 100%;
		flex: 1;
	}
	.InovuaReactDataGrid__header-wrapper {
		display: flex;
		flex-flow: row;
		align-items: stretch;
		flex-wrap: nowrap;
	}
	.InovuaReactDataGrid__header-wrapper--direction-ltr {
		direction: ltr;
	}
	.InovuaReactDataGrid__header-wrapper--direction-rtl {
		direction: rtl;
	}
	.InovuaReactDataGrid__header-wrapper__fill {
		flex: 1;
		position: relative;
		visibility: hidden;
	}
	.InovuaReactDataGrid--columns-ready
		.InovuaReactDataGrid__header-wrapper__fill {
		visibility: visible;
	}
	.InovuaReactDataGrid__header-wrapper__fill__filters {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.InovuaReactDataGrid__header {
		position: relative;
		z-index: 1;
		display: flex;
		flex-flow: row nowrap;
		box-sizing: content-box;
	}
	.InovuaReactDataGrid__header--placeholder {
		position: absolute;
	}
	.InovuaReactDataGrid__header-layout {
		position: relative;
	}
	.InovuaReactDataGrid__header {
		flex: none;
	}
	.InovuaReactDataGrid__column-layout__body__inner-wrapper {
		position: relative;
	}
	.InovuaReactDataGrid__row {
		position: relative;
		overflow: visible;
	}
	.InovuaReactDataGrid__row:not(.InovuaReactDataGrid__row--virtualize-columns),
	.InovuaReactDataGrid__row:not(.InovuaReactDataGrid__row--virtualize-columns)
		> .InovuaReactDataGrid__row-cell-wrap {
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		align-items: stretch;
	}
	.InovuaReactDataGrid__row--direction-rtl
		> .InovuaReactDataGrid__row-cell-wrap.InovuaReactDataGrid__row-cell-wrap {
		flex-flow: row-reverse;
	}
	.InovuaReactDataGrid__row-resize-handle {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 4px;
		cursor: ns-resize;
	}
	.InovuaReactDataGrid__row-resize-handle.InovuaReactDataGrid__row-resize-handle--mobile {
		height: 10px;
	}
	.InovuaReactDataGrid__cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.InovuaReactDataGrid__cover--active {
		pointer-events: all;
		z-index: 10000;
	}
	.InovuaReactDataGrid__row-resize-indicator {
		position: absolute;
		top: 0;
		border-bottom: 2px solid transparent;
		cursor: ns-resize;
		left: 0;
		right: 0;
		z-index: 10000;
		pointer-events: none;
	}
	.InovuaReactDataGrid__row-resize-indicator--active {
		pointer-events: all;
	}
	.InovuaReactDataGrid__row-resize-indicator--mobile {
		border-bottom: 2px solid transparent;
	}
	.InovuaReactDataGrid__row-cell-wrap {
		background: inherit;
	}
	.InovuaReactDataGrid__row--editing {
		z-index: 100;
	}
	.InovuaReactDataGrid__row__placeholder {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
		width: 350px;
		height: 20px;
		background: #eaecef;
	}
	.InovuaReactDataGrid__resize-overlay {
		opacity: 0;
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 100000;
		cursor: col-resize;
	}
	.InovuaReactDataGrid__resize-overlay--active {
		opacity: 1;
	}
	.InovuaReactDataGrid__resize-proxy {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
	}
	.InovuaReactDataGrid__box--ellipsis,
	.InovuaReactDataGrid__cell__content,
	.InovuaReactDataGrid__header-group__title {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.InovuaReactDataGrid__header-group__title--text-align-start {
		text-align: start;
	}
	.InovuaReactDataGrid__header-group__title--text-align-end {
		text-align: end;
	}
	.InovuaReactDataGrid__header-group__title--text-align-left {
		text-align: left;
	}
	.InovuaReactDataGrid__header-group__title--text-align-right {
		text-align: right;
	}
	.InovuaReactDataGrid__header-group__title--text-align-center {
		text-align: center;
	}
	.InovuaReactDataGrid__cell--cell-selected,
	.InovuaReactDataGrid__cell--cell-selected.InovuaReactDataGrid__cell--locked {
		z-index: 10;
	}
	.InovuaReactDataGrid__cell--cell-active,
	.InovuaReactDataGrid__cell--cell-active.InovuaReactDataGrid__cell--locked {
		z-index: 20;
	}
	.InovuaReactDataGrid__cell--cell-active
		.InovuaReactDataGrid__cell__selection {
		z-index: 100;
	}
	.InovuaReactDataGrid__cell--cell-selected:not(.InovuaReactDataGrid__cell--cell-active).InovuaReactDataGrid__cell--cell-has-top-selected-sibling
		.InovuaReactDataGrid__cell__selection:after {
		border-top-width: 0;
	}
	.InovuaReactDataGrid__cell--cell-selected:not(.InovuaReactDataGrid__cell--cell-active).InovuaReactDataGrid__cell--cell-has-bottom-selected-sibling
		.InovuaReactDataGrid__cell__selection:after {
		border-bottom-width: 0;
	}
	.InovuaReactDataGrid__cell--cell-selected:not(.InovuaReactDataGrid__cell--cell-active).InovuaReactDataGrid__cell--cell-has-left-selected-sibling
		.InovuaReactDataGrid__cell__selection:after {
		border-left-width: 0;
	}
	.InovuaReactDataGrid__cell--cell-selected:not(.InovuaReactDataGrid__cell--cell-active).InovuaReactDataGrid__cell--cell-has-right-selected-sibling
		.InovuaReactDataGrid__cell__selection:after {
		border-right-width: 0;
	}
	.InovuaReactDataGrid__cell__selection {
		z-index: 10;
		position: absolute;
		top: -1px;
		bottom: 0;
		right: -1px;
		left: 0;
		pointer-events: none;
	}
	.InovuaReactDataGrid__cell__selection:after {
		content: '';
		pointer-events: none;
		position: absolute;
		right: 0;
		bottom: 0;
		top: 0;
		left: 0;
	}
	.InovuaReactDataGrid__cell--show-border-bottom
		> .InovuaReactDataGrid__cell__selection {
		bottom: -1px;
	}
	.InovuaReactDataGrid__cell--show-border-left
		> .InovuaReactDataGrid__cell__selection {
		left: -1px;
	}
	.InovuaReactDataGrid__cell--show-border-right
		> .InovuaReactDataGrid__cell__selection {
		right: -1px;
	}
	.InovuaReactDataGrid__cell--show-border-top
		> .InovuaReactDataGrid__cell__selection {
		top: -1px;
	}
	.InovuaReactDataGrid__cell--locked-start.InovuaReactDataGrid__cell--first-in-section
		.InovuaReactDataGrid__cell__selection {
		right: -2px;
	}
	.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__cell--first-in-section
		.InovuaReactDataGrid__cell__selection {
		left: -3px;
	}
	.InovuaReactDataGrid__cell__selection-dragger {
		position: absolute;
		bottom: 0;
		width: 8px;
		height: 8px;
		cursor: crosshair;
		pointer-events: all;
		z-index: 10;
		border-top: 1px solid #fff;
		border-left: 1px solid #fff;
	}
	.InovuaReactDataGrid__cell__selection-dragger--direction-ltr {
		right: -2px;
	}
	.InovuaReactDataGrid__cell__selection-dragger--direction-rtl {
		left: -2px;
	}
	.InovuaReactDataGrid__cell__editor {
		position: absolute;
		z-index: 10000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
		background: #fff;
	}
	.InovuaReactDataGrid__cell__editor--bool {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.InovuaReactDataGrid
		.InovuaReactDataGrid__cell__editor.InovuaReactDataGrid__cell__editor--text {
		height: 100%;
		width: 100%;
	}
	.InovuaReactDataGrid__column-header__filter-wrapper {
		display: flex;
		flex-flow: row;
		align-items: stretch;
	}
	.InovuaReactDataGrid__column-header__filter-wrapper > * {
		min-width: 0;
	}
	.InovuaReactDataGrid__column-header__filter-wrapper > :first-child {
		flex: 1;
	}
	.InovuaReactDataGrid__column-header__filter {
		flex: 1;
		align-self: center;
	}
	.InovuaReactDataGrid__column-header__filter--bool {
		justify-content: center;
	}
	.InovuaReactDataGrid__column-header {
		position: relative;
	}
	.InovuaReactDataGrid__column-header__menu-tool {
		height: 100%;
		flex: none;
		margin-left: auto;
		display: flex;
		align-items: center;
		cursor: pointer;
		top: 0;
	}
	.InovuaReactDataGrid__column-header__menu-tool
		.InovuaReactDataGrid__sort-icon--asc,
	.InovuaReactDataGrid__column-header__menu-tool
		.InovuaReactDataGrid__sort-icon--desc {
		margin-top: 2px;
	}
	.InovuaReactDataGrid__column-header__menu-tool--show-on-hover {
		position: absolute;
	}
	.InovuaReactDataGrid__column-header__menu-tool--show-on-hover:not(.InovuaReactDataGrid__column-header__menu-tool--visible) {
		opacity: 0;
		pointer-events: none;
	}
	.InovuaReactDataGrid__column-header--align-start.InovuaReactDataGrid__column-header--direction-ltr
		> .InovuaReactDataGrid__column-header__menu-tool--show-on-hover {
		right: 0;
	}
	.InovuaReactDataGrid__column-header--align-start.InovuaReactDataGrid__column-header--direction-rtl
		> .InovuaReactDataGrid__column-header__menu-tool--show-on-hover {
		left: 0;
	}
	.InovuaReactDataGrid__column-header--align-center {
		position: relative;
	}
	.InovuaReactDataGrid__column-header--align-center
		> .InovuaReactDataGrid__column-header__menu-tool--show-on-hover {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.InovuaReactDataGrid__column-header--align-end.InovuaReactDataGrid__column-header--direction-ltr
		.InovuaReactDataGrid__column-header__menu-tool--show-on-hover {
		right: auto;
		left: 0;
	}
	.InovuaReactDataGrid__column-header--align-end.InovuaReactDataGrid__column-header--direction-rtl
		.InovuaReactDataGrid__column-header__menu-tool--show-on-hover {
		left: auto;
		right: 0;
	}
	.InovuaReactDataGrid__column-header:hover
		> .InovuaReactDataGrid__column-header__menu-tool {
		opacity: 1;
		pointer-events: all;
	}
	.InovuaReactDataGrid__column-header--overflow-hidden {
		overflow: hidden;
	}
	.InovuaReactDataGrid__footer-rows-container {
		position: relative;
		z-index: 10000;
	}
	.InovuaReactDataGrid__footer-row-group--locked-start,
	.InovuaReactDataGrid__locked-row-group--locked-start,
	.InovuaReactDataGrid__locked-start-wrapper,
	.InovuaReactDataGrid__row-details {
		z-index: 11000;
	}
	.InovuaReactDataGrid__row-details {
		contain: strict;
	}
	.InovuaReactDataGrid__row-details > .InovuaReactDataGrid {
		height: 100%;
	}
	.InovuaReactDataGrid__row-details-special-bottom-border {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.InovuaReactDataGrid__row-details-border,
	.InovuaReactDataGrid__row-details-special-bottom-border {
		z-index: 100000;
	}
	.InovuaReactDataGrid__footer-row-group--end,
	.InovuaReactDataGrid__locked-end-wrapper,
	.InovuaReactDataGrid__locked-row-group--end {
		z-index: 10100;
	}
	.InovuaReactDataGrid__row--virtualize-columns
		.InovuaReactDataGrid__locked-end-wrapper {
		position: absolute;
		top: 0;
		left: 0;
	}
	.InovuaReactDataGrid__unlocked-wrapper {
		z-index: 0;
	}
	.InovuaReactDataGrid__locked-end-wrapper,
	.InovuaReactDataGrid__locked-start-wrapper {
		display: flex;
		flex-flow: row;
	}
	.InovuaReactDataGrid__row-cell-wrap
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl,
	.InovuaReactDataGrid__row-cell-wrap
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl {
		flex-flow: row-reverse;
	}
	.InovuaReactDataGrid__column-header__resize-wrapper {
		position: relative;
		display: flex;
		vertical-align: middle;
		flex-flow: column nowrap;
	}
	.InovuaReactDataGrid__column-resizer,
	.InovuaReactDataGrid__header-group-resizer {
		position: absolute;
		z-index: 1000;
		height: 100%;
		top: 0;
		cursor: col-resize;
		right: 0;
	}
	.InovuaReactDataGrid__column-resizer--direction-rtl {
		right: unset;
	}
	.InovuaReactDataGrid__column-resizer:hover
		.InovuaReactDataGrid__column-resize-handle {
		visibility: visible;
	}
	.InovuaReactDataGrid__column-resizer--active {
		z-index: 4000;
	}
	.InovuaReactDataGrid__header-group-resizer:hover
		.InovuaReactDataGrid__header-group-resize-handle {
		visibility: visible;
	}
	.InovuaReactDataGrid__drag-proxy {
		z-index: 10000 !important;
	}
	.InovuaReactDataGrid__column-resize-handle,
	.InovuaReactDataGrid__header-group-resize-handle {
		height: 100%;
		position: relative;
		visibility: hidden;
	}
	.InovuaReactDataGrid__column-header {
		display: inline-flex;
		vertical-align: middle;
		flex-flow: row;
		align-items: center;
		justify-content: flex-start;
		flex: 1;
		-ms-flex: 1 1 auto;
		white-space: nowrap;
	}
	.InovuaReactDataGrid__column-header--align-start {
		justify-content: flex-start;
		text-align: start;
	}
	.InovuaReactDataGrid__column-header--align-center {
		justify-content: center;
		text-align: center;
	}
	.InovuaReactDataGrid__column-header--align-end {
		justify-content: flex-end;
		text-align: end;
	}
	.InovuaReactDataGrid__column-header--vertical-align-start,
	.InovuaReactDataGrid__column-header--vertical-align-top {
		align-items: flex-start;
	}
	.InovuaReactDataGrid__column-header--vertical-align-bottom,
	.InovuaReactDataGrid__column-header--vertical-align-end {
		align-items: flex-end;
	}
	.InovuaReactDataGrid__column-header__content {
		flex: 1;
	}
	.InovuaReactDataGrid__column-header__content > * {
		display: inline-block;
	}
	.InovuaReactDataGrid__cell,
	.InovuaReactDataGrid__footer-row-cell,
	.InovuaReactDataGrid__locked-row-cell {
		display: inline-flex;
		flex-flow: row;
		align-items: center;
		justify-content: flex-start;
		white-space: nowrap;
		flex-wrap: nowrap;
		position: relative;
	}
	.InovuaReactDataGrid__footer-row-cell,
	.InovuaReactDataGrid__locked-row-cell {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.InovuaReactDataGrid__cell--rowspan {
		background: inherit;
	}
	.InovuaReactDataGrid__cell--direction-rtl,
	.InovuaReactDataGrid__column-header--direction-rtl,
	.InovuaReactDataGrid__footer-row-cell--direction-rtl,
	.InovuaReactDataGrid__locked-row-cell--direction-rtl {
		direction: rtl;
	}
	.InovuaReactDataGrid__cell--user-select-none,
	.InovuaReactDataGrid__column-header--user-select-none,
	.InovuaReactDataGrid__footer-row-cell--user-select-none,
	.InovuaReactDataGrid__locked-row-cell--user-select-none {
		-ms-user-select: none;
		user-select: none;
		-webkit-user-select: none;
	}
	.InovuaReactDataGrid__cell--user-select-text,
	.InovuaReactDataGrid__column-header--user-select-text,
	.InovuaReactDataGrid__footer-row-cell--user-select-text,
	.InovuaReactDataGrid__locked-row-cell--user-select-text {
		-ms-user-select: text;
		user-select: text;
		-webkit-user-select: text;
	}
	.InovuaReactDataGrid__cell--user-select-all,
	.InovuaReactDataGrid__column-header--user-select-all,
	.InovuaReactDataGrid__footer-row-cell--user-select-all,
	.InovuaReactDataGrid__locked-row-cell--user-select-all {
		-ms-user-select: all;
		user-select: all;
		-webkit-user-select: all;
	}
	.InovuaReactDataGrid__cell--stretch {
		align-items: stretch;
	}
	.InovuaReactDataGrid__nested-cell,
	.InovuaReactDataGrid__nested-group-cell {
		flex: 1;
	}
	.InovuaReactDataGrid__cell .InovuaReactDataGrid__cell__content,
	.InovuaReactDataGrid__nested-cell
		.InovuaReactDataGrid__nested-group-cell__content,
	.InovuaReactDataGrid__nested-group-cell
		.InovuaReactDataGrid__nested-group-cell__content {
		flex: 1;
		width: 0;
		align-self: center;
	}
	.InovuaReactDataGrid__cell--align-end,
	.InovuaReactDataGrid__cell--align-right {
		text-align: end;
	}
	.InovuaReactDataGrid__cell--align-left,
	.InovuaReactDataGrid__cell--align-start {
		text-align: start;
	}
	.InovuaReactDataGrid__cell--align-center {
		text-align: center;
	}
	.InovuaReactDataGrid__cell--vertical-align-start,
	.InovuaReactDataGrid__cell--vertical-align-top {
		align-items: flex-start;
	}
	.InovuaReactDataGrid__cell--vertical-align-start
		.InovuaReactDataGrid__cell__content,
	.InovuaReactDataGrid__cell--vertical-align-top
		.InovuaReactDataGrid__cell__content {
		align-self: flex-start;
	}
	.InovuaReactDataGrid__cell--vertical-align-bottom,
	.InovuaReactDataGrid__cell--vertical-align-end {
		align-items: flex-end;
	}
	.InovuaReactDataGrid__cell--vertical-align-bottom
		.InovuaReactDataGrid__cell__content,
	.InovuaReactDataGrid__cell--vertical-align-end
		.InovuaReactDataGrid__cell__content {
		align-self: flex-end;
	}
	.InovuaReactDataGrid__sort-icon--hidden {
		visibility: hidden;
	}
	.InovuaReactDataGrid__column-header__filter-settings {
		flex: none;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	.InovuaReactDataGrid__column-header__filter-settings-icon,
	.InovuaReactDataGrid__sort-icon--asc,
	.InovuaReactDataGrid__sort-icon--desc {
		display: inline-block;
		vertical-align: middle;
	}
	.InovuaReactDataGrid__load-mask {
		z-index: 10000;
		overflow: hidden;
		visibility: visible;
	}
	.InovuaReactDataGrid__load-mask--hidden {
		visibility: hidden;
	}
	.InovuaReactDataGrid__group-toolbar--direction-rtl {
		direction: rtl;
	}
	.InovuaReactDataGrid__group-toolbar-item {
		display: inline-block;
		position: relative;
	}
	.InovuaReactDataGrid__group-toolbar-item--dragging {
		top: 0;
		position: absolute;
	}
	.InovuaReactDataGrid__group-toolbar-item--dragging.InovuaReactDataGrid__group-toolbar-item--direction-ltr {
		left: 0;
	}
	.InovuaReactDataGrid__group-toolbar-item--dragging.InovuaReactDataGrid__group-toolbar-item--direction-rtl {
		right: 0;
	}
	.InovuaReactDataGrid__group-toolbar-item__clear-icon {
		display: inline-block;
		line-height: 0;
	}
	.inovua-react-virtual-scroll-container {
		overflow: hidden;
		position: relative;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.inovua-react-virtual-scroll-container,
	.inovua-react-virtual-scroll-container *,
	.inovua-react-virtual-scroll-container :after,
	.inovua-react-virtual-scroll-container :before {
		box-sizing: border-box;
	}
	.inovua-react-virtual-scroll-container
		> .inovua-react-scroll-container
		.inovua-react-scroll-container__scrollbar {
		z-index: 10000;
	}
	.inovua-react-virtual-scroll-container__scroll-container {
		flex: 1;
	}
	.inovua-react-virtual-scroll-container--rtl {
		direction: rtl;
	}
	.inovua-react-virtual-scroll-container--native {
		display: flex;
		overflow: hidden;
		align-items: stretch;
		align-content: stretch;
		flex-flow: column;
		flex-wrap: nowrap;
		transform: translateZ(0);
	}
	.inovua-react-virtual-scroll-container__view {
		flex: none;
		width: 100%;
	}
	.inovua-react-virtual-scroll-container__scroll-container--avoid-repaint {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.inovua-react-virtual-list {
		box-sizing: border-box;
	}
	.inovua-react-virtual-list:not(.inovua-react-virtual-list--virtual-scroll)
		.inovua-react-scroll-container__scroller {
		align-items: stretch;
	}
	.inovua-react-virtual-list *,
	.inovua-react-virtual-list :after,
	.inovua-react-virtual-list :before {
		box-sizing: border-box;
	}
	.inovua-react-scroll-container--theme-default
		.inovua-react-scroll-container__track--visible {
		background-color: rgba(0, 0, 0, 0.15);
	}
	.inovua-react-scroll-container--theme-default
		.inovua-react-scroll-container__thumb {
		background-color: rgba(0, 0, 0, 0.25);
	}
	.inovua-react-toolkit-flex-v3 {
		display: flex;
	}
	.inovua-react-toolkit-flex-v3--inline {
		display: inline-flex;
	}
	.inovua-react-toolkit-flex-v3--display-flex {
		display: flex;
	}
	.inovua-react-toolkit-flex-v3--display-inline-flex {
		display: inline-flex;
	}
	.inovua-react-toolkit-flex-v3--align-items-center {
		align-items: center;
	}
	.inovua-react-toolkit-flex-v3--align-items-stretch {
		align-items: stretch;
	}
	.inovua-react-toolkit-flex-v3--align-items-baseline {
		align-items: baseline;
	}
	.inovua-react-toolkit-flex-v3--align-items-end,
	.inovua-react-toolkit-flex-v3--align-items-flex-end {
		align-items: flex-end;
	}
	.inovua-react-toolkit-flex-v3--align-items-flex-start,
	.inovua-react-toolkit-flex-v3--align-items-start {
		align-items: flex-start;
	}
	.inovua-react-toolkit-flex-v3--align-self-center {
		align-self: center;
	}
	.inovua-react-toolkit-flex-v3--align-self-stretch {
		align-self: stretch;
	}
	.inovua-react-toolkit-flex-v3--align-self-baseline {
		align-self: baseline;
	}
	.inovua-react-toolkit-flex-v3--align-self-auto {
		align-self: auto;
	}
	.inovua-react-toolkit-flex-v3--align-self-end,
	.inovua-react-toolkit-flex-v3--align-self-flex-end {
		align-self: flex-end;
	}
	.inovua-react-toolkit-flex-v3--align-self-flex-start,
	.inovua-react-toolkit-flex-v3--align-self-start {
		align-self: flex-start;
	}
	.inovua-react-toolkit-flex-v3--align-content-center {
		align-content: center;
	}
	.inovua-react-toolkit-flex-v3--align-content-stretch {
		align-content: stretch;
	}
	.inovua-react-toolkit-flex-v3--align-content-around,
	.inovua-react-toolkit-flex-v3--align-content-space-around {
		align-content: space-around;
	}
	.inovua-react-toolkit-flex-v3--align-content-between,
	.inovua-react-toolkit-flex-v3--align-content-space-between {
		align-content: space-between;
	}
	.inovua-react-toolkit-flex-v3--align-content-end,
	.inovua-react-toolkit-flex-v3--align-content-flex-end {
		align-content: flex-end;
	}
	.inovua-react-toolkit-flex-v3--align-content-flex-start,
	.inovua-react-toolkit-flex-v3--align-content-start {
		align-content: flex-start;
	}
	.inovua-react-toolkit-flex-v3--justify-content-flex-start,
	.inovua-react-toolkit-flex-v3--justify-content-start {
		justify-content: flex-start;
	}
	.inovua-react-toolkit-flex-v3--justify-content-end,
	.inovua-react-toolkit-flex-v3--justify-content-flex-end {
		justify-content: flex-end;
	}
	.inovua-react-toolkit-flex-v3--justify-content-center {
		justify-content: center;
	}
	.inovua-react-toolkit-flex-v3--justify-content-space-around {
		justify-content: space-around;
	}
	.inovua-react-toolkit-flex-v3--justify-content-space-between {
		justify-content: space-between;
	}
	.inovua-react-toolkit-flex-v3--wrap {
		flex-wrap: wrap;
	}
	.inovua-react-toolkit-flex-v3--column {
		flex-direction: column;
	}
	.inovua-react-toolkit-flex-v3--column-reverse {
		flex-direction: column-reverse;
	}
	.inovua-react-toolkit-flex-v3--row {
		flex-direction: row;
	}
	.inovua-react-toolkit-flex-v3--row-reverse {
		flex-direction: row-reverse;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-auto {
		flex-basis: auto;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-0,
	.inovua-react-toolkit-flex-v3--flex-basis-none {
		flex-basis: 0;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-fill {
		flex-basis: fill;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-content {
		flex-basis: content;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-fit-content {
		flex-basis: fit-content;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-min-content {
		flex-basis: min-content;
	}
	.inovua-react-toolkit-flex-v3--flex-basis-max-content {
		flex-basis: max-content;
	}
	.inovua-react-toolkit-flex-v3--flex-0,
	.inovua-react-toolkit-flex-v3--flex-none {
		flex: none;
	}
	.inovua-react-toolkit-flex-v3--flex-1 {
		flex: 1;
	}
	.inovua-react-toolkit-flex-v3--flex-2 {
		flex: 2;
	}
	.inovua-react-toolkit-flex-v3--flex-3 {
		flex: 3;
	}
	.inovua-react-toolkit-flex-v3--flex-4 {
		flex: 4;
	}
	.inovua-react-toolkit-flex-v3--flex-5 {
		flex: 5;
	}
	.inovua-react-toolkit-flex-v3--flex-6 {
		flex: 6;
	}
	.inovua-react-toolkit-flex-v3--flex-7 {
		flex: 7;
	}
	.inovua-react-toolkit-flex-v3--flex-8 {
		flex: 8;
	}
	.inovua-react-toolkit-flex-v3--flex-9 {
		flex: 9;
	}
	.inovua-react-toolkit-flex-v3--flex-10 {
		flex: 10;
	}
	.inovua-react-toolkit-flex-v3--flex-11 {
		flex: 11;
	}
	.inovua-react-toolkit-flex-v3--flex-12 {
		flex: 12;
	}
	.inovua-react-toolkit-flex-v3--flex-13 {
		flex: 13;
	}
	.inovua-react-toolkit-flex-v3--flex-14 {
		flex: 14;
	}
	.inovua-react-toolkit-flex-v3--flex-15 {
		flex: 15;
	}
	.inovua-react-toolkit-flex-v3--flex-16 {
		flex: 16;
	}
	.inovua-react-toolkit-flex-v3--flex-17 {
		flex: 17;
	}
	.inovua-react-toolkit-flex-v3--flex-18 {
		flex: 18;
	}
	.inovua-react-toolkit-flex-v3--flex-19 {
		flex: 19;
	}
	.inovua-react-toolkit-flex-v3--flex-20 {
		flex: 20;
	}
	.inovua-react-toolkit-flex-v3--flex-21 {
		flex: 21;
	}
	.inovua-react-toolkit-flex-v3--flex-22 {
		flex: 22;
	}
	.inovua-react-toolkit-flex-v3--flex-23 {
		flex: 23;
	}
	.inovua-react-toolkit-flex-v3--flex-24 {
		flex: 24;
	}
	.inovua-react-toolkit-flex-v3--flex-25 {
		flex: 25;
	}
	.inovua-react-toolkit-flex-v3--flex-26 {
		flex: 26;
	}
	.inovua-react-toolkit-flex-v3--flex-27 {
		flex: 27;
	}
	.inovua-react-toolkit-flex-v3--flex-28 {
		flex: 28;
	}
	.inovua-react-toolkit-flex-v3--flex-29 {
		flex: 29;
	}
	.inovua-react-toolkit-flex-v3--flex-30 {
		flex: 30;
	}
	.inovua-react-toolkit-flex-v3--flex-31 {
		flex: 31;
	}
	.inovua-react-toolkit-flex-v3--flex-32 {
		flex: 32;
	}
	.inovua-react-toolkit-flex-v3--flex-33 {
		flex: 33;
	}
	.inovua-react-toolkit-flex-v3--flex-34 {
		flex: 34;
	}
	.inovua-react-toolkit-flex-v3--flex-35 {
		flex: 35;
	}
	.inovua-react-toolkit-flex-v3--flex-36 {
		flex: 36;
	}
	.inovua-react-toolkit-flex-v3--flex-37 {
		flex: 37;
	}
	.inovua-react-toolkit-flex-v3--flex-38 {
		flex: 38;
	}
	.inovua-react-toolkit-flex-v3--flex-39 {
		flex: 39;
	}
	.inovua-react-toolkit-flex-v3--flex-40 {
		flex: 40;
	}
	.inovua-react-toolkit-flex-v3--flex-41 {
		flex: 41;
	}
	.inovua-react-toolkit-flex-v3--flex-42 {
		flex: 42;
	}
	.inovua-react-toolkit-flex-v3--flex-43 {
		flex: 43;
	}
	.inovua-react-toolkit-flex-v3--flex-44 {
		flex: 44;
	}
	.inovua-react-toolkit-flex-v3--flex-45 {
		flex: 45;
	}
	.inovua-react-toolkit-flex-v3--flex-46 {
		flex: 46;
	}
	.inovua-react-toolkit-flex-v3--flex-47 {
		flex: 47;
	}
	.inovua-react-toolkit-flex-v3--flex-48 {
		flex: 48;
	}
	.inovua-react-toolkit-flex-v3--flex-49 {
		flex: 49;
	}
	.inovua-react-toolkit-flex-v3--flex-50 {
		flex: 50;
	}
	.inovua-react-toolkit-flex-v3--flex-51 {
		flex: 51;
	}
	.inovua-react-toolkit-flex-v3--flex-52 {
		flex: 52;
	}
	.inovua-react-toolkit-flex-v3--flex-53 {
		flex: 53;
	}
	.inovua-react-toolkit-flex-v3--flex-54 {
		flex: 54;
	}
	.inovua-react-toolkit-flex-v3--flex-55 {
		flex: 55;
	}
	.inovua-react-toolkit-flex-v3--flex-56 {
		flex: 56;
	}
	.inovua-react-toolkit-flex-v3--flex-57 {
		flex: 57;
	}
	.inovua-react-toolkit-flex-v3--flex-58 {
		flex: 58;
	}
	.inovua-react-toolkit-flex-v3--flex-59 {
		flex: 59;
	}
	.inovua-react-toolkit-flex-v3--flex-60 {
		flex: 60;
	}
	.inovua-react-toolkit-flex-v3--flex-61 {
		flex: 61;
	}
	.inovua-react-toolkit-flex-v3--flex-62 {
		flex: 62;
	}
	.inovua-react-toolkit-flex-v3--flex-63 {
		flex: 63;
	}
	.inovua-react-toolkit-flex-v3--flex-64 {
		flex: 64;
	}
	.inovua-react-toolkit-flex-v3--flex-65 {
		flex: 65;
	}
	.inovua-react-toolkit-flex-v3--flex-66 {
		flex: 66;
	}
	.inovua-react-toolkit-flex-v3--flex-67 {
		flex: 67;
	}
	.inovua-react-toolkit-flex-v3--flex-68 {
		flex: 68;
	}
	.inovua-react-toolkit-flex-v3--flex-69 {
		flex: 69;
	}
	.inovua-react-toolkit-flex-v3--flex-70 {
		flex: 70;
	}
	.inovua-react-toolkit-flex-v3--flex-71 {
		flex: 71;
	}
	.inovua-react-toolkit-flex-v3--flex-72 {
		flex: 72;
	}
	.inovua-react-toolkit-flex-v3--flex-73 {
		flex: 73;
	}
	.inovua-react-toolkit-flex-v3--flex-74 {
		flex: 74;
	}
	.inovua-react-toolkit-flex-v3--flex-75 {
		flex: 75;
	}
	.inovua-react-toolkit-flex-v3--flex-76 {
		flex: 76;
	}
	.inovua-react-toolkit-flex-v3--flex-77 {
		flex: 77;
	}
	.inovua-react-toolkit-flex-v3--flex-78 {
		flex: 78;
	}
	.inovua-react-toolkit-flex-v3--flex-79 {
		flex: 79;
	}
	.inovua-react-toolkit-flex-v3--flex-80 {
		flex: 80;
	}
	.inovua-react-toolkit-flex-v3--flex-81 {
		flex: 81;
	}
	.inovua-react-toolkit-flex-v3--flex-82 {
		flex: 82;
	}
	.inovua-react-toolkit-flex-v3--flex-83 {
		flex: 83;
	}
	.inovua-react-toolkit-flex-v3--flex-84 {
		flex: 84;
	}
	.inovua-react-toolkit-flex-v3--flex-85 {
		flex: 85;
	}
	.inovua-react-toolkit-flex-v3--flex-86 {
		flex: 86;
	}
	.inovua-react-toolkit-flex-v3--flex-87 {
		flex: 87;
	}
	.inovua-react-toolkit-flex-v3--flex-88 {
		flex: 88;
	}
	.inovua-react-toolkit-flex-v3--flex-89 {
		flex: 89;
	}
	.inovua-react-toolkit-flex-v3--flex-90 {
		flex: 90;
	}
	.inovua-react-toolkit-flex-v3--flex-91 {
		flex: 91;
	}
	.inovua-react-toolkit-flex-v3--flex-92 {
		flex: 92;
	}
	.inovua-react-toolkit-flex-v3--flex-93 {
		flex: 93;
	}
	.inovua-react-toolkit-flex-v3--flex-94 {
		flex: 94;
	}
	.inovua-react-toolkit-flex-v3--flex-95 {
		flex: 95;
	}
	.inovua-react-toolkit-flex-v3--flex-96 {
		flex: 96;
	}
	.inovua-react-toolkit-flex-v3--flex-97 {
		flex: 97;
	}
	.inovua-react-toolkit-flex-v3--flex-98 {
		flex: 98;
	}
	.inovua-react-toolkit-flex-v3--flex-99 {
		flex: 99;
	}
	.inovua-react-toolkit-flex-v3--flex-100 {
		flex: 100;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-0 {
		flex-grow: 0;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-1 {
		flex-grow: 1;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-2 {
		flex-grow: 2;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-3 {
		flex-grow: 3;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-4 {
		flex-grow: 4;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-5 {
		flex-grow: 5;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-6 {
		flex-grow: 6;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-7 {
		flex-grow: 7;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-8 {
		flex-grow: 8;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-9 {
		flex-grow: 9;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-10 {
		flex-grow: 10;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-11 {
		flex-grow: 11;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-12 {
		flex-grow: 12;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-13 {
		flex-grow: 13;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-14 {
		flex-grow: 14;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-15 {
		flex-grow: 15;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-16 {
		flex-grow: 16;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-17 {
		flex-grow: 17;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-18 {
		flex-grow: 18;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-19 {
		flex-grow: 19;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-20 {
		flex-grow: 20;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-21 {
		flex-grow: 21;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-22 {
		flex-grow: 22;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-23 {
		flex-grow: 23;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-24 {
		flex-grow: 24;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-25 {
		flex-grow: 25;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-26 {
		flex-grow: 26;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-27 {
		flex-grow: 27;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-28 {
		flex-grow: 28;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-29 {
		flex-grow: 29;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-30 {
		flex-grow: 30;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-31 {
		flex-grow: 31;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-32 {
		flex-grow: 32;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-33 {
		flex-grow: 33;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-34 {
		flex-grow: 34;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-35 {
		flex-grow: 35;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-36 {
		flex-grow: 36;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-37 {
		flex-grow: 37;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-38 {
		flex-grow: 38;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-39 {
		flex-grow: 39;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-40 {
		flex-grow: 40;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-41 {
		flex-grow: 41;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-42 {
		flex-grow: 42;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-43 {
		flex-grow: 43;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-44 {
		flex-grow: 44;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-45 {
		flex-grow: 45;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-46 {
		flex-grow: 46;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-47 {
		flex-grow: 47;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-48 {
		flex-grow: 48;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-49 {
		flex-grow: 49;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-50 {
		flex-grow: 50;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-51 {
		flex-grow: 51;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-52 {
		flex-grow: 52;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-53 {
		flex-grow: 53;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-54 {
		flex-grow: 54;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-55 {
		flex-grow: 55;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-56 {
		flex-grow: 56;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-57 {
		flex-grow: 57;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-58 {
		flex-grow: 58;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-59 {
		flex-grow: 59;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-60 {
		flex-grow: 60;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-61 {
		flex-grow: 61;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-62 {
		flex-grow: 62;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-63 {
		flex-grow: 63;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-64 {
		flex-grow: 64;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-65 {
		flex-grow: 65;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-66 {
		flex-grow: 66;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-67 {
		flex-grow: 67;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-68 {
		flex-grow: 68;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-69 {
		flex-grow: 69;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-70 {
		flex-grow: 70;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-71 {
		flex-grow: 71;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-72 {
		flex-grow: 72;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-73 {
		flex-grow: 73;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-74 {
		flex-grow: 74;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-75 {
		flex-grow: 75;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-76 {
		flex-grow: 76;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-77 {
		flex-grow: 77;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-78 {
		flex-grow: 78;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-79 {
		flex-grow: 79;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-80 {
		flex-grow: 80;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-81 {
		flex-grow: 81;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-82 {
		flex-grow: 82;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-83 {
		flex-grow: 83;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-84 {
		flex-grow: 84;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-85 {
		flex-grow: 85;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-86 {
		flex-grow: 86;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-87 {
		flex-grow: 87;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-88 {
		flex-grow: 88;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-89 {
		flex-grow: 89;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-90 {
		flex-grow: 90;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-91 {
		flex-grow: 91;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-92 {
		flex-grow: 92;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-93 {
		flex-grow: 93;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-94 {
		flex-grow: 94;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-95 {
		flex-grow: 95;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-96 {
		flex-grow: 96;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-97 {
		flex-grow: 97;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-98 {
		flex-grow: 98;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-99 {
		flex-grow: 99;
	}
	.inovua-react-toolkit-flex-v3--flex-grow-100 {
		flex-grow: 100;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-0 {
		flex-shrink: 0;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-1 {
		flex-shrink: 1;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-2 {
		flex-shrink: 2;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-3 {
		flex-shrink: 3;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-4 {
		flex-shrink: 4;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-5 {
		flex-shrink: 5;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-6 {
		flex-shrink: 6;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-7 {
		flex-shrink: 7;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-8 {
		flex-shrink: 8;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-9 {
		flex-shrink: 9;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-10 {
		flex-shrink: 10;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-11 {
		flex-shrink: 11;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-12 {
		flex-shrink: 12;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-13 {
		flex-shrink: 13;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-14 {
		flex-shrink: 14;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-15 {
		flex-shrink: 15;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-16 {
		flex-shrink: 16;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-17 {
		flex-shrink: 17;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-18 {
		flex-shrink: 18;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-19 {
		flex-shrink: 19;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-20 {
		flex-shrink: 20;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-21 {
		flex-shrink: 21;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-22 {
		flex-shrink: 22;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-23 {
		flex-shrink: 23;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-24 {
		flex-shrink: 24;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-25 {
		flex-shrink: 25;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-26 {
		flex-shrink: 26;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-27 {
		flex-shrink: 27;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-28 {
		flex-shrink: 28;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-29 {
		flex-shrink: 29;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-30 {
		flex-shrink: 30;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-31 {
		flex-shrink: 31;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-32 {
		flex-shrink: 32;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-33 {
		flex-shrink: 33;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-34 {
		flex-shrink: 34;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-35 {
		flex-shrink: 35;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-36 {
		flex-shrink: 36;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-37 {
		flex-shrink: 37;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-38 {
		flex-shrink: 38;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-39 {
		flex-shrink: 39;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-40 {
		flex-shrink: 40;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-41 {
		flex-shrink: 41;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-42 {
		flex-shrink: 42;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-43 {
		flex-shrink: 43;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-44 {
		flex-shrink: 44;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-45 {
		flex-shrink: 45;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-46 {
		flex-shrink: 46;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-47 {
		flex-shrink: 47;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-48 {
		flex-shrink: 48;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-49 {
		flex-shrink: 49;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-50 {
		flex-shrink: 50;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-51 {
		flex-shrink: 51;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-52 {
		flex-shrink: 52;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-53 {
		flex-shrink: 53;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-54 {
		flex-shrink: 54;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-55 {
		flex-shrink: 55;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-56 {
		flex-shrink: 56;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-57 {
		flex-shrink: 57;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-58 {
		flex-shrink: 58;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-59 {
		flex-shrink: 59;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-60 {
		flex-shrink: 60;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-61 {
		flex-shrink: 61;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-62 {
		flex-shrink: 62;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-63 {
		flex-shrink: 63;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-64 {
		flex-shrink: 64;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-65 {
		flex-shrink: 65;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-66 {
		flex-shrink: 66;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-67 {
		flex-shrink: 67;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-68 {
		flex-shrink: 68;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-69 {
		flex-shrink: 69;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-70 {
		flex-shrink: 70;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-71 {
		flex-shrink: 71;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-72 {
		flex-shrink: 72;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-73 {
		flex-shrink: 73;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-74 {
		flex-shrink: 74;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-75 {
		flex-shrink: 75;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-76 {
		flex-shrink: 76;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-77 {
		flex-shrink: 77;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-78 {
		flex-shrink: 78;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-79 {
		flex-shrink: 79;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-80 {
		flex-shrink: 80;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-81 {
		flex-shrink: 81;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-82 {
		flex-shrink: 82;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-83 {
		flex-shrink: 83;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-84 {
		flex-shrink: 84;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-85 {
		flex-shrink: 85;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-86 {
		flex-shrink: 86;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-87 {
		flex-shrink: 87;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-88 {
		flex-shrink: 88;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-89 {
		flex-shrink: 89;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-90 {
		flex-shrink: 90;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-91 {
		flex-shrink: 91;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-92 {
		flex-shrink: 92;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-93 {
		flex-shrink: 93;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-94 {
		flex-shrink: 94;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-95 {
		flex-shrink: 95;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-96 {
		flex-shrink: 96;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-97 {
		flex-shrink: 97;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-98 {
		flex-shrink: 98;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-99 {
		flex-shrink: 99;
	}
	.inovua-react-toolkit-flex-v3--flex-shrink-100 {
		flex-shrink: 100;
	}
	.inovua-react-scroll-container {
		overflow: hidden;
		position: relative;
		flex-flow: column;
		flex: 1 1 0;
	}
	.inovua-react-scroll-container--block {
		display: flex;
	}
	.inovua-react-scroll-container--inline-block {
		display: inline-flex;
	}
	.inovua-react-scroll-container__wrapper {
		display: flex;
		flex: 1 1 auto;
	}
	.inovua-react-scroll-container__scroller {
		overflow: scroll;
		flex: 1;
		position: relative;
		box-sizing: border-box;
		align-items: flex-start;
		justify-content: flex-start;
		flex-flow: column;
		display: flex;
	}
	.inovua-react-scroll-container__scroller.inovua-react-scroll-container__scroller--direction-rtl {
		display: block;
		display: grid;
	}
	.inovua-react-scroll-container__scroller--avoid-repaint {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.inovua-react-scroll-container__scroller--hide-native-scrollbar-if-possible::-webkit-scrollbar {
		display: none;
	}
	.inovua-react-scroll-container__view {
		flex: 1 0 auto;
		position: relative;
		box-sizing: border-box;
	}
	@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
		.inovua-react-scroll-container__view {
			max-width: 100%;
		}
	}
	.inovua-react-scroll-container__view--zero-width-scrollbar {
		flex: 1 0 100%;
	}
	.inovua-react-scroll-container__scrollbar {
		pointer-events: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		opacity: 1;
		transition-property: opacity;
		transition-duration: 0.1s;
		overflow: visible;
		z-index: 1;
	}
	.inovua-react-scroll-container__scrollbar--hidden {
		opacity: 0;
		transition-duration: 0.3s;
	}
	.inovua-react-scroll-container__scrollbar--direction-rtl {
		direction: rtl;
	}
	.inovua-react-scroll-container__track {
		pointer-events: none;
		position: relative;
		transition-property: background-color;
		transition-duration: 0.1s;
		cursor: auto;
	}
	.inovua-react-scroll-container__track--drag-to-scroll {
		pointer-events: all;
	}
	.inovua-react-scroll-container__track--orientation-vertical {
		height: 100%;
	}
	.inovua-react-scroll-container__track--direction-rtl {
		transform: rotateY(180deg);
	}
	.inovua-react-scroll-container__track--visible {
		cursor: pointer;
	}
	.inovua-react-scroll-container__thumb {
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		display: block;
		cursor: auto;
		will-change: transform;
		position: absolute;
	}
	.inovua-react-scroll-container__thumb--orientation-vertical {
		top: 0;
		right: 0;
		transition-property: width;
	}
	.inovua-react-scroll-container__thumb--orientation-horizontal {
		bottom: 0;
		transition-property: height;
	}
	.inovua-react-scroll-container__thumb--orientation-horizontal.inovua-react-scroll-container__thumb--direction-ltr {
		left: 0;
	}
	.inovua-react-scroll-container__thumb--orientation-horizontal.inovua-react-scroll-container__thumb--direction-rtl {
		right: 0;
	}
	.inovua--hide-native-scroll-if-possible::-webkit-scrollbar {
		display: none;
	}
	.inovua-react-toolkit-arrow-scroller,
	.inovua-react-toolkit-toolbar {
		max-width: 100%;
		position: relative;
		overflow: hidden;
		align-items: start;
		direction: ltr;
	}
	.inovua-react-toolkit-arrow-scroller--rtl,
	.inovua-react-toolkit-toolbar--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-arrow-scroller--rtl
		.inovua-react-toolkit-arrow-scroller__scroll-container
		> .inovua-react-scroll-container__wrapper,
	.inovua-react-toolkit-arrow-scroller--rtl
		.inovua-react-toolkit-toolbar__scroll-container
		> .inovua-react-scroll-container__wrapper,
	.inovua-react-toolkit-toolbar--rtl
		.inovua-react-toolkit-arrow-scroller__scroll-container
		> .inovua-react-scroll-container__wrapper,
	.inovua-react-toolkit-toolbar--rtl
		.inovua-react-toolkit-toolbar__scroll-container
		> .inovua-react-scroll-container__wrapper {
		max-width: 100%;
	}
	.inovua-react-toolkit-arrow-scroller--native-scroll,
	.inovua-react-toolkit-toolbar--native-scroll {
		transform: translateZ(0);
	}
	.inovua-react-toolkit-arrow-scroller__inner-wrapper,
	.inovua-react-toolkit-toolbar__inner-wrapper {
		display: flex;
		flex: 1 0 auto;
		align-items: stretch;
		position: relative;
		transition: top 0.35s ease-out;
	}
	.inovua-react-toolkit-arrow-scroller__inner-wrapper--direction-column,
	.inovua-react-toolkit-toolbar__inner-wrapper--direction-column {
		flex-direction: column;
	}
	.inovua-react-toolkit-arrow-scroller--direction-horizontal,
	.inovua-react-toolkit-toolbar--direction-horizontal {
		display: flex;
	}
	.inovua-react-toolkit-arrow-scroller--direction-vertical,
	.inovua-react-toolkit-toolbar--direction-vertical {
		max-height: 100%;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--visible,
	.inovua-react-toolkit-toolbar__arrow--visible {
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--native-scroll,
	.inovua-react-toolkit-toolbar__arrow--native-scroll {
		position: fixed;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-down,
	.inovua-react-toolkit-arrow-scroller__arrow--direction-up,
	.inovua-react-toolkit-toolbar__arrow--direction-down,
	.inovua-react-toolkit-toolbar__arrow--direction-up {
		width: 100%;
		flex-flow: column;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--auto,
	.inovua-react-toolkit-toolbar__arrow--auto {
		position: absolute;
		text-align: center;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--auto.inovua-react-toolkit-arrow-scroller__arrow--native-scroll,
	.inovua-react-toolkit-arrow-scroller__arrow--auto.inovua-react-toolkit-toolbar__arrow--native-scroll,
	.inovua-react-toolkit-toolbar__arrow--auto.inovua-react-toolkit-arrow-scroller__arrow--native-scroll,
	.inovua-react-toolkit-toolbar__arrow--auto.inovua-react-toolkit-toolbar__arrow--native-scroll {
		position: fixed;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-left,
	.inovua-react-toolkit-arrow-scroller__arrow--direction-right,
	.inovua-react-toolkit-toolbar__arrow--direction-left,
	.inovua-react-toolkit-toolbar__arrow--direction-right {
		top: 0;
		bottom: 0;
	}
	.inovua-react-toolkit-arrow-scroller__arrow,
	.inovua-react-toolkit-toolbar__arrow {
		cursor: pointer;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-down,
	.inovua-react-toolkit-arrow-scroller__arrow--direction-up,
	.inovua-react-toolkit-toolbar__arrow--direction-down,
	.inovua-react-toolkit-toolbar__arrow--direction-up {
		left: 0;
		right: 0;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-left,
	.inovua-react-toolkit-toolbar__arrow--direction-left {
		left: 0;
		z-index: 200;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-right,
	.inovua-react-toolkit-toolbar__arrow--direction-right {
		right: 0;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-up,
	.inovua-react-toolkit-toolbar__arrow--direction-up {
		top: 0;
		z-index: 200;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--direction-down,
	.inovua-react-toolkit-toolbar__arrow--direction-down {
		bottom: 0;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--disabled,
	.inovua-react-toolkit-toolbar__arrow--disabled {
		opacity: 0.5;
	}
	.inovua-react-toolkit-arrow-scroller__arrow--hidden,
	.inovua-react-toolkit-toolbar__arrow--hidden {
		display: none;
	}
	.inovua-react-toolkit-radio-button--disabled {
		outline: none;
	}
	.inovua-react-toolkit-radio-button {
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		outline: none;
		vertical-align: middle;
	}
	.inovua-react-toolkit-radio-button--inline-block {
		display: inline-flex;
	}
	.inovua-react-toolkit-radio-button__icon-wrapper {
		display: flex;
	}
	.inovua-react-toolkit-radio-button__icon-wrapper svg {
		display: block;
	}
	.inovua-react-toolkit-radio-button--children-position-start {
		flex-flow: row-reverse;
	}
	.inovua-react-toolkit-radio-button--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-radio-button--ltr.inovua-react-toolkit-radio-button--children-position-end
		.inovua-react-toolkit-radio-button__icon-wrapper,
	.inovua-react-toolkit-radio-button--rtl.inovua-react-toolkit-radio-button--children-position-start
		.inovua-react-toolkit-radio-button__icon-wrapper {
		margin-right: 5px;
	}
	.inovua-react-toolkit-radio-button--ltr.inovua-react-toolkit-radio-button--children-position-start
		.inovua-react-toolkit-radio-button__icon-wrapper,
	.inovua-react-toolkit-radio-button--rtl.inovua-react-toolkit-radio-button--children-position-end
		.inovua-react-toolkit-radio-button__icon-wrapper {
		margin-left: 5px;
	}
	.inovua-react-toolkit-radio-button--read-only {
		cursor: auto;
	}
	.inovua-react-toolkit-radio-button--disabled {
		cursor: auto;
		pointer-events: none;
	}
	.inovua-react-toolkit-radio-button--browser-native {
		padding: 0;
		margin: 0;
		display: inline-block;
	}
	.inovua-react-toolkit-menu {
		box-sizing: border-box;
		display: inline-flex;
		position: relative;
	}
	.inovua-react-toolkit-menu *,
	.inovua-react-toolkit-menu :after,
	.inovua-react-toolkit-menu :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-menu__arrow {
		position: absolute;
		background: none;
		padding: 0;
		border: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}
	.inovua-react-toolkit-menu__arrow svg {
		height: 13px;
	}
	.inovua-react-toolkit-menu__arrow:focus {
		outline: none;
	}
	.inovua-react-toolkit-menu__cell {
		white-space: nowrap;
		background: none;
	}
	.inovua-react-toolkit-menu__cell > button {
		display: block;
	}
	.inovua-react-toolkit-menu__expander {
		vertical-align: middle;
	}
	.inovua-react-toolkit-menu__submenu-wrapper {
		position: absolute;
		z-index: 500;
	}
	.inovua-react-toolkit-menu__menu-separator {
		cursor: auto;
		height: 1px;
	}
	.inovua-react-toolkit-menu:focus {
		outline: none;
	}
	.inovua-react-toolkit-menu--absolute {
		position: absolute;
	}
	.inovua-react-toolkit-menu__row--disabled {
		pointer-events: none;
	}
	.inovua-react-toolkit-menu--no-display {
		position: absolute;
	}
	.inovua-react-toolkit-menu--hidden {
		visibility: hidden;
	}
	.inovua-react-toolkit-menu--rtl .inovua-react-toolkit-menu__table {
		direction: rtl;
	}
	.inovua-react-toolkit-menu__scroll-container {
		width: 100%;
	}
	.inovua-react-toolkit-menu__table {
		direction: ltr;
		width: 100%;
		text-align: start;
		border-spacing: 0;
		border-collapse: separate;
	}
	.inovua-react-toolkit-menu__row {
		cursor: pointer;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.inovua-react-toolkit-menu__arrow-up {
		top: 0;
	}
	.inovua-react-toolkit-menu__arrow-down {
		bottom: 0;
	}
	.inovua-react-toolkit-menu--animation-enabled {
		transform: scale(0);
	}
	.inovua-react-toolkit-menu--transition-start {
		transform-origin: left top;
		transition: transform 0.15s ease;
	}
	.inovua-react-toolkit-menu--transition-start.inovua-react-toolkit-menu--position-down {
		transform-origin: left bottom;
	}
	.inovua-react-toolkit-menu--transition-start .inovua-react-toolkit-menu__row {
		transform: scaleY(0);
		transition: transform 0.15s ease;
	}
	.inovua-react-toolkit-menu--transition-end,
	.inovua-react-toolkit-menu--transition-end .inovua-react-toolkit-menu__row {
		transform: scale(1);
	}
	.inovua-react-toolkit-dropdown-button {
		position: relative;
		display: inline-flex;
		vertical-align: middle;
	}
	.inovua-react-toolkit-dropdown-button .inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-dropdown-button
		.inovua-react-toolkit-dropdown-button__arrow {
		align-self: stretch;
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-dropdown-button
		.inovua-react-toolkit-dropdown-button__menu {
		z-index: 1000;
		position: fixed;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.inovua-react-toolkit-dropdown-button__arrow svg {
		vertical-align: middle;
		display: inline-block;
	}
	.inovua-react-toolkit-toolbar {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		text-align: start;
		direction: ltr;
		width: 100%;
		overflow: visible;
	}
	.inovua-react-toolkit-toolbar:not(.inovua-react-toolkit-toolbar--native-scroll) {
		overflow: hidden;
	}
	.inovua-react-toolkit-toolbar,
	.inovua-react-toolkit-toolbar ::-ms-backdrop {
		overflow: hidden;
	}
	.inovua-react-toolkit-toolbar *,
	.inovua-react-toolkit-toolbar :after,
	.inovua-react-toolkit-toolbar :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-toolbar
		.inovua-react-toolkit-menu.inovua-react-toolkit-menu {
		position: fixed;
		z-index: 10000;
	}
	.inovua-react-toolkit-toolbar--dropdown {
		overflow: visible;
	}
	.inovua-react-toolkit-toolbar__separator {
		width: 1px;
		margin: 6px 4px;
		align-self: stretch;
	}
	.inovua-react-toolkit-toolbar__arrow--visible {
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-toolbar__arrow--direction-down,
	.inovua-react-toolkit-toolbar__arrow--direction-up {
		width: 100%;
		flex-flow: column;
	}
	.inovua-react-toolkit-toolbar--rtl {
		display: flex;
		justify-content: flex-end;
	}
	.inovua-react-toolkit-toolbar--rtl
		.inovua-react-toolkit-toolbar__inner-wrapper {
		direction: rtl;
	}
	.inovua-react-toolkit-numeric-input,
	.inovua-react-toolkit-numeric-input * {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-numeric-input {
		display: inline-flex;
		overflow: hidden;
		background: #fff;
		align-items: center;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--ltr {
		padding: 0 0 0 8px;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--rtl {
		padding: 0 8px 0 0;
	}
	.inovua-react-toolkit-numeric-input__number-input {
		flex: 1;
	}
	.inovua-react-toolkit-numeric-input__input {
		border: none;
		outline: none;
		background: none;
		width: 100%;
		height: 100%;
	}
	.inovua-react-toolkit-numeric-input__input::-ms-clear {
		display: none;
	}
	.inovua-react-toolkit-numeric-input__spinner-wrapper-hidden {
		visibility: hidden;
	}
	.inovua-react-toolkit-numeric-input__clear-button-wrapper,
	.inovua-react-toolkit-numeric-input__spinner-wrapper {
		display: flex;
		flex-flow: column;
	}
	.inovua-react-toolkit-numeric-input__clear-button-wrapper {
		visibility: visible;
		opacity: 1;
		transition: opacity 0.2s;
		transform: translateZ(0);
	}
	.inovua-react-toolkit-numeric-input__clear-button-wrapper--hidden {
		visibility: hidden;
		opacity: 0;
		display: none;
	}
	.inovua-react-toolkit-numeric-input__clear-button {
		cursor: pointer;
		flex: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		padding: 0;
		outline: none;
		top: 0;
		right: 1px;
		bottom: 0;
	}
	.inovua-react-toolkit-numeric-input__clear-button:active {
		margin-top: 1px;
	}
	.inovua-react-toolkit-numeric-input__clear-button svg {
		width: 20px;
		height: 20px;
	}
	.inovua-react-toolkit-numeric-input__spinner-arrow {
		position: relative;
		cursor: pointer;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inovua-react-toolkit-numeric-input__spinner-arrow svg {
		width: 14px;
		height: 14px;
	}
	.inovua-react-toolkit-date-input__overlay {
		position: absolute;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}
	.inovua-react-toolkit-date-input__overlay,
	.inovua-react-toolkit-date-input__overlay * {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-date-input__overlay--position-fixed {
		position: fixed;
	}
	.inovua-react-toolkit-date-input__overlay--visible {
		visibility: visible;
		pointer-events: inherit;
		opacity: 1;
	}
	.inovua-react-toolkit-date-input__overlay--has-transition.inovua-react-toolkit-date-input__overlay--transition-enter {
		opacity: 0;
		visibility: visible;
	}
	.inovua-react-toolkit-date-input__overlay--has-transition.inovua-react-toolkit-date-input__overlay--transition-enter-active {
		transition: opacity 1s ease;
		opacity: 1;
	}
	.inovua-react-toolkit-date-input__overlay--has-transition.inovua-react-toolkit-date-input__overlay--transition-leave {
		visibility: visible;
		opacity: 1;
	}
	.inovua-react-toolkit-date-input__overlay--has-transition.inovua-react-toolkit-date-input__overlay--transition-leave-active {
		transition: opacity 1s ease;
		opacity: 0;
	}
	.inovua-react-toolkit-date-input__overlay__content {
		position: relative;
		z-index: 1;
	}
	.inovua-react-toolkit-date-input__overlay__arrow-wrapper {
		position: absolute;
		overflow: hidden;
	}
	.inovua-react-toolkit-date-input__overlay__arrow-wrapper--bottom,
	.inovua-react-toolkit-date-input__overlay__arrow-wrapper--top {
		transform: translateX(-50%);
	}
	.inovua-react-toolkit-date-input__overlay__arrow-wrapper--left,
	.inovua-react-toolkit-date-input__overlay__arrow-wrapper--right {
		transform: translateY(-50%);
	}
	.inovua-react-toolkit-date-input__overlay__arrow {
		position: absolute;
		transform-origin: center;
	}
	.inovua-react-toolkit-date-input__overlay__arrow--top {
		left: 50%;
		top: 0;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
	}
	.inovua-react-toolkit-date-input__overlay__arrow--left {
		top: 50%;
		left: 0;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
	}
	.inovua-react-toolkit-date-input__overlay__arrow--right {
		right: 0;
		top: 50%;
		transform: translateX(50%) translateY(-50%) rotate(45deg);
	}
	.inovua-react-toolkit-date-input__overlay__arrow--bottom {
		left: 50%;
		bottom: 0;
		transform: translateX(-50%) translateY(50%) rotate(45deg);
	}
	.inovua-react-toolkit-combo-box {
		display: flex;
		align-self: center;
		position: relative;
		box-sizing: border-box;
		text-align: start;
		direction: ltr;
		outline: 0;
		width: 140px;
		vertical-align: middle;
	}
	.inovua-react-toolkit-combo-box *,
	.inovua-react-toolkit-combo-box :after,
	.inovua-react-toolkit-combo-box :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-combo-box--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-combo-box--inlineFlex {
		display: inline-flex;
	}
	.inovua-react-toolkit-combo-box__list {
		z-index: 100;
		min-height: 28px;
	}
	.inovua-react-toolkit-combo-box__list:not(.inovua-react-toolkit-combo-box__list--relative-to-viewport) {
		left: -1px;
		right: -1px;
		min-width: 100%;
		position: absolute;
	}
	.inovua-react-toolkit-combo-box__list--position-top:not(.inovua-react-toolkit-combo-box__list--relative-to-viewport) {
		bottom: 100%;
	}
	.inovua-react-toolkit-combo-box__list--position-bottom:not(.inovua-react-toolkit-combo-box__list--relative-to-viewport) {
		top: 100%;
	}
	.inovua-react-toolkit-combo-box__list__virtual-list {
		outline: none;
		overflow: auto;
		max-height: 300px;
	}
	.inovua-react-toolkit-combo-box__list__item {
		cursor: pointer;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		width: 100%;
	}
	.inovua-react-toolkit-combo-box__list__item--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-combo-box__list__item--ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.inovua-react-toolkit-combo-box__list__empty-text,
	.inovua-react-toolkit-combo-box__list__loading-text,
	.inovua-react-toolkit-combo-box__list__new-custom-tag-text {
		padding: 9px;
		text-align: center;
	}
	.inovua-react-toolkit-combo-box__list__loading-text {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inovua-react-toolkit-combo-box__input__wrapper {
		display: flex;
		max-width: 100%;
		margin-bottom: 2px;
	}
	.inovua-react-toolkit-combo-box__input__wrapper--invisible {
		position: absolute;
		left: -20000px;
	}
	.inovua-react-toolkit-combo-box__input {
		border: 0;
		outline: none;
		max-width: 100%;
		min-width: 3px;
		font-family: inherit;
		font-size: inherit;
		background: none;
	}
	.inovua-react-toolkit-combo-box__input::-ms-clear {
		display: none;
	}
	.inovua-react-toolkit-combo-box__input__placeholder {
		color: #bbb;
	}
	.inovua-react-toolkit-combo-box__value {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-items: center;
		padding: 0 2px;
	}
	.inovua-react-toolkit-combo-box__value--no-wrap {
		flex-wrap: nowrap;
		overflow: hidden;
	}
	.inovua-react-toolkit-combo-box__tools {
		position: unset;
		display: flex;
		margin-bottom: 1px;
	}
	.inovua-react-toolkit-combo-box__value__tag {
		display: flex;
		cursor: pointer;
		max-width: calc(100% - 5px);
	}
	.inovua-react-toolkit-combo-box__value__display-value {
		display: inline-block;
		align-self: center;
		margin-bottom: 2px;
		max-width: calc(100% - 5px);
	}
	.inovua-react-toolkit-combo-box__value__display-value,
	.inovua-react-toolkit-combo-box__value__tag--ellipsis
		.inovua-react-toolkit-combo-box__value__tag__label {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.inovua-react-toolkit-combo-box__value__tag__label {
		flex: 1;
	}
	.inovua-react-toolkit-combo-box__toggle-icon,
	.inovua-react-toolkit-combo-box__value__tag__clear-icon {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.react-scroll-container__scroller,
	.react-virtual-scroll-container__scroll-container {
		outline: none;
	}
	.inovua-react-toolkit-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: 0;
		font-family: inherit;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		text-align: start;
		vertical-align: middle;
		cursor: pointer;
		display: inline-flex;
		flex-direction: row;
		border: none;
		align-items: center;
	}
	.inovua-react-toolkit-button,
	.inovua-react-toolkit-button *,
	.inovua-react-toolkit-button:after,
	.inovua-react-toolkit-button :after,
	.inovua-react-toolkit-button:before,
	.inovua-react-toolkit-button :before {
		box-sizing: border-box;
	}
	.inovua-react-toolkit-button:focus {
		outline: 0;
	}
	button.inovua-react-toolkit-button {
		padding: 0;
	}
	.inovua-react-toolkit-button__text {
		flex: 1 0 0%;
	}
	@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
		.inovua-react-toolkit-button__text {
			flex: 1 0 auto;
		}
	}
	.inovua-react-toolkit-button__icon-wrap {
		display: flex;
		flex-flow: row;
	}
	.inovua-react-toolkit-button--disabled {
		cursor: default;
	}
	.inovua-react-toolkit-button--overflow-visible {
		overflow: visible;
	}
	.inovua-react-toolkit-button--overflow-hidden {
		overflow: hidden;
	}
	.inovua-react-toolkit-button--ellipsis,
	.inovua-react-toolkit-button--ellipsis.inovua-react-toolkit-button--wrap,
	.inovua-react-toolkit-button--ellipsis.inovua-react-toolkit-button--wrap
		.inovua-react-toolkit-button__text,
	.inovua-react-toolkit-button--ellipsis .inovua-react-toolkit-button__text {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.inovua-react-toolkit-button--nowrap,
	.inovua-react-toolkit-button--nowrap .inovua-react-toolkit-button__text {
		white-space: nowrap;
	}
	.inovua-react-toolkit-button--wrap,
	.inovua-react-toolkit-button--wrap .inovua-react-toolkit-button__text {
		white-space: normal;
	}
	.inovua-react-toolkit-button--rtl {
		direction: rtl;
	}
	.inovua-react-toolkit-button--align-center {
		justify-content: center;
	}
	.inovua-react-toolkit-button--align-center
		.inovua-react-toolkit-button__text {
		text-align: center;
	}
	.inovua-react-toolkit-button--align-start:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom) {
		justify-content: flex-start;
	}
	.inovua-react-toolkit-button--align-start:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom)
		.inovua-react-toolkit-button__text {
		text-align: start;
	}
	.inovua-react-toolkit-button--align-start.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--align-start.inovua-react-toolkit-button--icon-position-top {
		align-items: flex-start;
	}
	.inovua-react-toolkit-button--align-start.inovua-react-toolkit-button--icon-position-bottom
		.inovua-react-toolkit-button__text,
	.inovua-react-toolkit-button--align-start.inovua-react-toolkit-button--icon-position-top
		.inovua-react-toolkit-button__text {
		text-align: start;
	}
	.inovua-react-toolkit-button--align-end:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom) {
		justify-content: flex-end;
	}
	.inovua-react-toolkit-button--align-end:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom)
		.inovua-react-toolkit-button__text {
		text-align: end;
	}
	.inovua-react-toolkit-button--align-end.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--align-end.inovua-react-toolkit-button--icon-position-top {
		align-items: flex-end;
	}
	.inovua-react-toolkit-button--align-end.inovua-react-toolkit-button--icon-position-bottom
		.inovua-react-toolkit-button__text,
	.inovua-react-toolkit-button--align-end.inovua-react-toolkit-button--icon-position-top
		.inovua-react-toolkit-button__text {
		text-align: end;
	}
	.inovua-react-toolkit-button--align-left {
		justify-content: flex-start;
	}
	.inovua-react-toolkit-button--align-left .inovua-react-toolkit-button__text {
		text-align: left;
	}
	.inovua-react-toolkit-button--align-right {
		justify-content: flex-end;
	}
	.inovua-react-toolkit-button--align-right .inovua-react-toolkit-button__text {
		text-align: right;
	}
	.inovua-react-toolkit-button--vertical-align-center:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom),
	.inovua-react-toolkit-button--vertical-align-middle:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom) {
		align-items: center;
	}
	.inovua-react-toolkit-button--vertical-align-center.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--vertical-align-center.inovua-react-toolkit-button--icon-position-top,
	.inovua-react-toolkit-button--vertical-align-middle.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--vertical-align-middle.inovua-react-toolkit-button--icon-position-top {
		justify-content: center;
	}
	.inovua-react-toolkit-button--vertical-align-top:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom) {
		align-items: flex-start;
	}
	.inovua-react-toolkit-button--vertical-align-top.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--vertical-align-top.inovua-react-toolkit-button--icon-position-top {
		justify-content: flex-start;
	}
	.inovua-react-toolkit-button--vertical-align-bottom:not(.inovua-react-toolkit-button--icon-position-top):not(.inovua-react-toolkit-button--icon-position-bottom) {
		align-items: flex-end;
	}
	.inovua-react-toolkit-button--vertical-align-bottom.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--vertical-align-bottom.inovua-react-toolkit-button--icon-position-top {
		justify-content: flex-end;
	}
	.inovua-react-toolkit-button--icon-position-bottom,
	.inovua-react-toolkit-button--icon-position-top {
		display: inline-flex;
		flex-direction: column;
	}
	.inovua-react-toolkit-button--icon-position-bottom
		.inovua-react-toolkit-button__text,
	.inovua-react-toolkit-button--icon-position-top
		.inovua-react-toolkit-button__text {
		flex: none;
	}
	.inovua-react-pagination-toolbar {
		box-sizing: border-box;
		align-items: center;
	}
	.inovua-react-pagination-toolbar *,
	.inovua-react-pagination-toolbar :after,
	.inovua-react-pagination-toolbar :before {
		box-sizing: border-box;
	}
	.inovua-react-pagination-toolbar__region {
		display: flex;
		align-items: center;
	}
	.inovua-react-pagination-toolbar__spacer {
		flex: 1;
	}
	.inovua-react-pagination-toolbar__region {
		white-space: nowrap;
	}
	.inovua-react-pagination-toolbar__current-page {
		margin: 0 8px;
	}
	.inovua-react-pagination-toolbar__page-size-combo {
		margin-right: 2px;
		margin-left: 8px;
	}
	.inovua-react-pagination-toolbar--ltr
		.inovua-react-pagination-toolbar__page-text {
		margin-left: 8px;
	}
	.inovua-react-pagination-toolbar--rtl
		.inovua-react-pagination-toolbar__page-text {
		margin-right: 8px;
	}
	.inovua-react-pagination-toolbar__page-count-text {
		display: inline-block;
		text-align: end;
	}
	.inovua-react-pagination-toolbar--ltr
		.inovua-react-pagination-toolbar__page-count-text {
		margin-right: 8px;
	}
	.inovua-react-pagination-toolbar--rtl
		.inovua-react-pagination-toolbar__page-count-text {
		margin-left: 8px;
	}
	.inovua-react-pagination-toolbar__page-size-combo {
		display: inline-flex;
	}
	.inovua-react-pagination-toolbar__current-page {
		align-self: stretch;
	}
	.inovua-react-pagination-toolbar__icon {
		vertical-align: middle;
		fill: grey;
		outline: none;
	}
	@-webkit-keyframes inovua-react-toolkit-load-mask-animation__loader-fade {
		0% {
			opacity: 1;
		}
		to {
			opacity: 0.25;
		}
	}
	@keyframes inovua-react-toolkit-load-mask-animation__loader-fade {
		0% {
			opacity: 1;
		}
		to {
			opacity: 0.25;
		}
	}
	.inovua-react-toolkit-load-mask {
		position: absolute;
		width: 100%;
		height: 100%;
		display: none;
		top: 0;
		left: 0;
	}
	.inovua-react-toolkit-load-mask--visible {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}
	.inovua-react-toolkit-load-mask__loader {
		position: relative;
	}
	.inovua-react-toolkit-load-mask__background-layer {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar {
		-webkit-animation: inovua-react-toolkit-load-mask-animation__loader-fade 1s
			linear infinite;
		animation: inovua-react-toolkit-load-mask-animation__loader-fade 1s linear
			infinite;
		position: absolute;
		background: #000;
		left: 44.5%;
		top: 37%;
		width: 12%;
		height: 26%;
		opacity: 0;
	}
	.inovua-react-toolkit-load-mask__loader-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--1 {
		transform: rotate(0deg) translateY(-142%);
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--2 {
		transform: rotate(30deg) translateY(-142%);
		-webkit-animation-delay: -0.9167s;
		animation-delay: -0.9167s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--3 {
		transform: rotate(60deg) translateY(-142%);
		-webkit-animation-delay: -1.8333s;
		animation-delay: -1.8333s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--4 {
		transform: rotate(90deg) translateY(-142%);
		-webkit-animation-delay: -2.75s;
		animation-delay: -2.75s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--5 {
		transform: rotate(120deg) translateY(-142%);
		-webkit-animation-delay: -3.6667s;
		animation-delay: -3.6667s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--6 {
		transform: rotate(150deg) translateY(-142%);
		-webkit-animation-delay: -4.5833s;
		animation-delay: -4.5833s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--7 {
		transform: rotate(180deg) translateY(-142%);
		-webkit-animation-delay: -5.5s;
		animation-delay: -5.5s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--8 {
		transform: rotate(210deg) translateY(-142%);
		-webkit-animation-delay: -6.4167s;
		animation-delay: -6.4167s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--9 {
		transform: rotate(240deg) translateY(-142%);
		-webkit-animation-delay: -7.3333s;
		animation-delay: -7.3333s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--10 {
		transform: rotate(270deg) translateY(-142%);
		-webkit-animation-delay: -8.25s;
		animation-delay: -8.25s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--11 {
		transform: rotate(300deg) translateY(-142%);
		-webkit-animation-delay: -9.1667s;
		animation-delay: -9.1667s;
	}
	.inovua-react-toolkit-load-mask__loader-loadbar--12 {
		transform: rotate(330deg) translateY(-142%);
		-webkit-animation-delay: -10.0833s;
		animation-delay: -10.0833s;
	}
	.InovuaReactDataGrid__column-layout--has-flex
		.inovua-react-virtual-list__row-container,
	.InovuaReactDataGrid__column-layout--has-flex
		.inovua-react-virtual-list__virtual-scroller {
		min-width: 100%;
	}
	.InovuaReactDataGrid__unlocked-wrapper {
		display: inline-flex;
		flex-flow: row;
		flex: 1;
	}
	.InovuaReactDataGrid__group-toolbar-insert-arrow {
		display: inline-block;
		vertical-align: middle;
		width: 3px;
	}
	.InovuaReactDataGrid__nest-block {
		display: inline-block;
		height: 100%;
	}
	.react-scroll-container__scrollbar {
		z-index: 10;
	}
	.InovuaReactDataGrid__header-group {
		display: flex;
		flex-flow: column;
		position: relative;
	}
	.InovuaReactDataGrid__header-group__title--align-start {
		text-align: start;
	}
	.InovuaReactDataGrid__header-group__title--align-left {
		text-align: left;
	}
	.InovuaReactDataGrid__header-group__title--align-center {
		text-align: center;
	}
	.InovuaReactDataGrid__header-group__title--align-end {
		text-align: end;
	}
	.InovuaReactDataGrid__header-group__title--align-right {
		text-align: right;
	}
	.InovuaReactDataGrid__header-group-cells {
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		flex: 1;
		-ms-flex: 1 1 auto;
	}
	.InovuaReactDataGrid__empty-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.InovuaReactDataGrid__empty-wrapper,
	.InovuaReactDataGrid__loading-wrapper {
		overflow: auto;
		z-index: 10000;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}
	.InovuaReactDataGrid__empty-wrapper {
		z-index: 1;
	}
	.InovuaReactDataGrid__cell--transition,
	.InovuaReactDataGrid__column-header--transition {
		transition-property: width, min-width, max-width, transform, padding-left,
			padding-right, border-width;
	}
	.InovuaReactDataGrid__locked-end-wrapper--transition,
	.InovuaReactDataGrid__locked-start-wrapper--transition {
		transition-property: width, min-width, transform;
	}
	.InovuaReactDataGrid__header-group--transition {
		transition-property: width;
	}
	.InovuaReactDataGrid--virtualize-columns
		.InovuaReactDataGrid__cell--transition.InovuaReactDataGrid__cell--showing:not(.InovuaReactDataGrid__cell--group-cell) {
		transition-property: transform, padding-left, padding-right, border-width;
	}
	.InovuaReactDataGrid__cell__node-tool--loading {
		-webkit-animation: InovuaReactDataGrid__cell__node-tool-rotate 1.4s linear
			infinite;
		animation: InovuaReactDataGrid__cell__node-tool-rotate 1.4s linear infinite;
		transform: translateZ(0);
		margin-left: 2px;
	}
	@-webkit-keyframes InovuaReactDataGrid__cell__node-tool-rotate {
		0% {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(1turn);
		}
	}
	@keyframes InovuaReactDataGrid__cell__node-tool-rotate {
		0% {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(1turn);
		}
	}
	.InovuaReactDataGrid__footer-row,
	.InovuaReactDataGrid__footer-row-group,
	.InovuaReactDataGrid__locked-row,
	.InovuaReactDataGrid__locked-row-group {
		display: flex;
		flex-flow: row;
	}
	.InovuaReactDataGrid__locked-row-group--locked-end {
		position: absolute;
		left: 0;
	}
	.InovuaReactDataGrid__footer-row-group--locked-end {
		position: absolute;
		left: 0;
		height: 100%;
		top: 0;
	}
	.InovuaReactDataGrid__footer-row {
		position: relative;
		overflow: visible;
	}
	.InovuaReactDataGrid__footer-row--rtl,
	.InovuaReactDataGrid__footer-row-group--rtl {
		flex-flow: row-reverse;
	}
	.InovuaReactDataGrid__footer-row-cell,
	.InovuaReactDataGrid__locked-row-cell {
		position: relative;
	}
	.InovuaReactDataGrid__portal-host {
		position: absolute;
		top: 0;
		left: 0;
	}
	.InovuaReactDataGrid__portal-host .inovua-react-toolkit-date-input__overlay {
		z-index: 20000;
	}
	.InovuaReactDataGrid__row-drag-proxy {
		cursor: -webkit-grabbing;
		cursor: grabbing;
		position: absolute;
		z-index: 11000;
		flex-flow: row;
		align-items: center;
		justify-content: flex-start;
		white-space: nowrap;
		flex-wrap: nowrap;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		min-width: 150px;
		padding: 8px;
		border-radius: 2px;
		opacity: 0.85;
		display: inline-flex;
	}
	.InovuaReactDataGrid__row-drag-proxy--visible {
		display: inline-flex;
	}
	.InovuaReactDataGrid__row-drag-proxy--hidden {
		display: none;
	}
	.InovuaReactDataGrid__cell__editor--date > .inovua-react-toolkit-date-input,
	.InovuaReactDataGrid__cell__editor--number
		> .inovua-react-toolkit-numeric-input {
		height: 100%;
		width: 100%;
	}
	.InovuaReactDataGrid__cell__editor--select > .inovua-react-toolkit-combo-box {
		display: flex;
		flex-flow: row;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light {
		outline: none;
		color: #555e68;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--ltr
		.inovua-react-toolkit-checkbox__inner-content-wrapper {
		margin-left: 8px;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--rtl
		.inovua-react-toolkit-checkbox__inner-content-wrapper {
		margin-right: 8px;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--checked
		.inovua-react-toolkit-checkbox__icon-wrapper {
		fill: #7986cb;
		stroke: #e8e8e8;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--unchecked
		.inovua-react-toolkit-checkbox__icon-wrapper {
		stroke: #99a1aa;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--indeterminate
		.inovua-react-toolkit-checkbox__icon-wrapper {
		fill: #e8e8e8;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--indeterminate
		.inovua-react-toolkit-checkbox__icon-wrapper
		svg {
		border-radius: 2px;
		background: #7986cb;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--browser-native {
		margin-left: 5px;
		margin-right: 5px;
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--disabled {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--disabled.inovua-react-toolkit-checkbox--checked
		.inovua-react-toolkit-checkbox__icon-wrapper {
		fill: rgba(121, 134, 203, 0.5);
		stroke: hsla(0, 0%, 91%, 0.5);
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--disabled.inovua-react-toolkit-checkbox--unchecked
		.inovua-react-toolkit-checkbox__icon-wrapper {
		stroke: rgba(153, 161, 170, 0.5);
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--disabled.inovua-react-toolkit-checkbox--indeterminate
		.inovua-react-toolkit-checkbox__icon-wrapper {
		fill: hsla(0, 0%, 91%, 0.5);
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--disabled.inovua-react-toolkit-checkbox--indeterminate
		.inovua-react-toolkit-checkbox__icon-wrapper
		svg {
		border-radius: 2px;
		background: rgba(121, 134, 203, 0.5);
	}
	.inovua-react-toolkit-checkbox.inovua-react-toolkit-checkbox--theme-default-light.inovua-react-toolkit-checkbox--focused
		.inovua-react-toolkit-checkbox__icon-wrapper {
		box-shadow: 0 0 0 3px rgba(121, 134, 203, 0.5);
		border-radius: 2px;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow {
		background: #fff;
		fill: #99a1aa;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: transparent;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow:hover {
		fill: #e8e8e8;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow:hover:before {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow--direction-right {
		border-left: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow--direction-left {
		border-right: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow--direction-down {
		border-top: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-arrow-scroller.inovua-react-toolkit-arrow-scroller--theme-default-light
		.inovua-react-toolkit-arrow-scroller__arrow--direction-up {
		border-bottom: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--mobile
		.inovua-react-toolkit-arrow-scroller__arrow {
		height: 20px;
	}
	@-webkit-keyframes inovua-react-toolkit-loadmask-spin {
		to {
			transform: rotate(1turn);
		}
	}
	.inovua-react-toolkit-date-input--theme-default-light {
		border: 1px solid #cdcecd;
		border-radius: 1px;
		transition: border 0.2s;
		background: #fff;
		min-height: 28px;
	}
	.inovua-react-toolkit-date-input--theme-default-light:hover {
		border: 1px solid #7986cb;
	}
	.inovua-react-toolkit-date-input--theme-default-light.inovua-react-toolkit-date-input--disabled {
		border: 1px solid #cdcecd;
	}
	.inovua-react-toolkit-date-input--theme-default-light.inovua-react-toolkit-date-input--disabled:not(.inovua-react-toolkit-date-input__calendar-icon--disabled) {
		opacity: 0.5;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input {
		padding: 0 8px;
		min-height: 28px;
		height: 28px;
		color: #555e68;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input::-ms-clear {
		display: none;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input:not(.inovua-react-toolkit-date-input__input--disabled) {
		background: #fff;
		color: #555e68;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input:not(.inovua-react-toolkit-date-input__input--disabled)::-ms-clear {
		display: none;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input::-webkit-input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input:-ms-input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input::-ms-input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input::placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-date-input--theme-default-light.inovua-react-toolkit-date-input--focused {
		border: 1px solid #7986cb;
		box-shadow: 0 0 0 2px rgba(121, 134, 203, 0.4);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		> .inovua-react-toolkit-date-input__picker {
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.34375);
	}
	.inovua-react-toolkit-date-input--theme-default-light.inovua-react-toolkit-date-input--rtl
		.inovua-react-toolkit-date-input__calendar-icon {
		margin-left: 8px;
	}
	.inovua-react-toolkit-date-input--theme-default-light.inovua-react-toolkit-date-input--ltr
		.inovua-react-toolkit-date-input__calendar-icon {
		margin-right: 8px;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__calendar-icon {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		fill: #99a1aa;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__calendar-icon:hover:not(.inovua-react-toolkit-date-input__calendar-icon--disabled) {
		fill: #99a1aa;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__calendar-icon:active:not(.inovua-react-toolkit-date-input__calendar-icon--disabled) {
		margin-top: 1px;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon {
		color: #99a1aa;
		fill: #99a1aa;
		margin-right: 8px;
		flex: 1 0 auto;
		transform: translateY(0);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon:active {
		transform: translateY(1px);
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon--disabled {
		display: flex;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon--animation {
		-webkit-animation: inovua-react-toolkit-date-input-animation-fade-in 0.2s;
		animation: inovua-react-toolkit-date-input-animation-fade-in 0.2s;
	}
	@keyframes inovua-react-toolkit-date-input-animation-fade-in {
		0% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon--hidden {
		visibility: hidden;
		margin-right: 4px;
	}
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon {
		transition: fill 0.25s ease-in-out;
	}
	.inovua-react-toolkit-date-input--theme-default-light.inovua-react-toolkit-date-input--focused
		.inovua-react-toolkit-date-input__clear-icon,
	.inovua-react-toolkit-date-input--theme-default-light
		.inovua-react-toolkit-date-input__clear-icon:hover {
		color: #99a1aa;
		fill: #99a1aa;
	}
	.inovua-react-toolkit-calendar__clock--theme-default-light
		.inovua-react-toolkit-calendar__clock-center {
		background: #e8f2ff;
	}
	.inovua-react-toolkit-calendar__clock--theme-default-light
		.inovua-react-toolkit-calendar__clock-overlay {
		background: #fff;
		border-style: solid;
		border-color: #99a1aa;
	}
	.inovua-react-toolkit-calendar__clock--theme-default-light
		.inovua-react-toolkit-calendar__clock-hand,
	.inovua-react-toolkit-calendar__clock--theme-default-light
		.inovua-react-toolkit-calendar__clock-tick {
		background: #99a1aa;
	}
	.inovua-react-toolkit-calendar__clock--theme-default-light
		.inovua-react-toolkit-calendar__clock-hand-second {
		background: red;
	}
	.inovua-react-toolkit-calendar__footer--theme-default-light {
		padding: 4px 12px 6px;
		display: flex;
		flex: 1;
	}
	.inovua-react-toolkit-calendar__footer--theme-default-light
		.inovua-react-toolkit-calendar__footer-button {
		min-width: 70px;
	}
	.inovua-react-toolkit-calendar__footer--theme-default-light
		.inovua-react-toolkit-calendar__footer-button.inovua-react-toolkit-calendar__footer-button-cancel.inovua-react-toolkit-calendar__footer-button-cancel.inovua-react-toolkit-calendar__footer-button-cancel {
		border: 1px solid #a5afba;
		color: #555e68;
		max-height: 28px;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__footer--theme-default-light
		.inovua-react-toolkit-calendar__footer-button.inovua-react-toolkit-calendar__footer-button-today.inovua-react-toolkit-calendar__footer-button-today.inovua-react-toolkit-calendar__footer-button-today {
		max-height: 28px;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__footer--theme-default-light
		.inovua-react-toolkit-calendar__footer-button.inovua-react-toolkit-calendar__footer-button-today.inovua-react-toolkit-calendar__footer-button-today.inovua-react-toolkit-calendar__footer-button-today:hover {
		color: #555e68;
	}
	.inovua-react-toolkit-calendar__footer--theme-default-light
		.inovua-react-toolkit-calendar__footer-button
		+ .inovua-react-toolkit-calendar__footer-button {
		margin-left: 16px;
	}
	.inovua-react-toolkit-calendar__date-format-spinner--theme-default-light {
		border: 1px solid grey;
	}
	.inovua-react-toolkit-calendar__date-format-spinner--theme-default-light
		input {
		padding: 5px;
		border: none;
		outline: none;
	}
	.inovua-react-toolkit-calendar__date-format-spinner--theme-default-light:not([disabled]).inovua-react-toolkit-calendar__date-format-spinner--focused {
		border: 1px solid #fff;
	}
	.inovua-react-toolkit-calendar__date-format-spinner--theme-default-light:not([disabled])
		.inovua-react-toolkit-calendar__date-format-spinner-arrow {
		transform: translateY(0);
		cursor: pointer;
	}
	.inovua-react-toolkit-calendar__date-format-spinner--theme-default-light:not([disabled])
		.inovua-react-toolkit-calendar__date-format-spinner-arrow:active {
		fill: #fff;
		transform: translateY(1px);
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light {
		padding: 2px;
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view-row {
		min-height: 36px;
		min-width: 144px;
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view-month {
		padding: 5px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 24px;
		max-height: 24px;
		min-width: 40px;
		max-width: 40px;
		height: 24px;
		border-radius: 1px;
		margin: 1px;
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view-month:hover {
		background: rgba(121, 134, 203, 0.15);
		color: #555e68;
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view-month--disabled {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view-month--value {
		color: #555e68;
		background: rgba(121, 134, 203, 0.25) padding-box;
	}
	.inovua-react-toolkit-calendar__year-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view-month--active.inovua-react-toolkit-calendar__date-format-spinner__year-view-month--value {
		background: #fff padding-box;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light {
		padding: 2px 0;
		min-height: 92px;
		min-width: 238px;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-row {
		min-width: 190px;
		min-height: 46px;
		justify-content: center;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-arrow {
		cursor: pointer;
		position: relative;
		fill: #99a1aa;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1px;
		transition: background 0.3s, fill 0.3s;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-arrow:hover {
		fill: #99a1aa;
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-arrow--disabled {
		fill: rgba(82, 82, 82, 0.5);
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-arrow--prev:not(.inovua-react-toolkit-calendar__decade-view-arrow--disabled):active {
		right: 1px;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-arrow--next:not(.inovua-react-toolkit-calendar__decade-view-arrow--disabled):active {
		left: 1px;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-year {
		margin: 5px 1px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 24px;
		max-height: 24px;
		min-width: 44px;
		max-width: 44px;
		height: 24px;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-year:hover {
		background: rgba(121, 134, 203, 0.15);
		color: #555e68;
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-year--disabled {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-calendar__decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view-year--value {
		color: #555e68;
		background: rgba(121, 134, 203, 0.25) padding-box;
	}
	.inovua-react-toolkit-calendar__month-decade-view--theme-default-light {
		padding: 2px;
		background: #fff;
	}
	.inovua-react-toolkit-calendar__month-decade-view--theme-default-light
		.inovua-react-toolkit-calendar__month-decade-view__separator {
		width: 100%;
		height: 1px;
		background: #e4e3e2;
		margin: 5px auto;
	}
	.inovua-react-toolkit-calendar__month-decade-view--theme-default-light
		.inovua-react-toolkit-calendar__decade-view--theme-default-light,
	.inovua-react-toolkit-calendar__month-decade-view--theme-default-light
		.inovua-react-toolkit-calendar__year-view--theme-default-light {
		border: none;
		min-height: 110px;
		display: flex;
		align-items: center;
		width: 100%;
	}
	.inovua-react-toolkit-calendar__nav-bar
		.inovua-react-toolkit-calendar__month-decade-view--theme-default-light {
		color: #555e68;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light {
		padding: 0 2px;
		background: #fff;
		color: #555e68;
		border-radius: 1px;
		fill: #99a1aa;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light.inovua-react-toolkit-calendar__nav-bar-month-decade-view-modal {
		background: rgba(121, 134, 203, 0.5);
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-arrows-pos {
		min-height: 32px;
		min-width: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-arrows-pos:hover {
		fill: #99a1aa;
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-date {
		min-height: 32px;
		height: 32px;
		padding: 2px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-arrows-div {
		display: inline-flex;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-month-decade-view {
		background: #fff;
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light.inovua-react-toolkit-calendar__nav-bar--with-month-decade-view
		.inovua-react-toolkit-calendar__nav-bar-date {
		cursor: pointer;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light.inovua-react-toolkit-calendar__nav-bar--with-month-decade-view
		.inovua-react-toolkit-calendar__nav-bar-date-disabled {
		cursor: auto;
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-arrow {
		fill: #99a1aa;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px 0;
		transform: translateY(0);
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-arrow--disabled {
		fill: rgba(82, 82, 82, 0.5);
	}
	.inovua-react-toolkit-calendar__nav-bar--theme-default-light
		.inovua-react-toolkit-calendar__nav-bar-arrow:not(.inovua-react-toolkit-calendar__nav-bar-arrows-pos--disabled):active {
		transform: translateY(1px);
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light.inovua-react-toolkit-date-input__picker {
		box-shadow: 0 0 8px 0 hsla(0, 0%, 43.9%, 0.5);
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__calendar--theme-default-light {
		border: none;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock {
		margin: 8px 14px 32px 8px;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input {
		margin-left: 4px;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner {
		border: 1px solid #fff;
		margin-right: 14px;
		border-radius: 1px;
		background: #fff;
		cursor: pointer;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner:hover {
		margin-right: 14px;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner--focused {
		border: 1px solid #7986cb;
		background: #fff;
		box-shadow: 0 0 0 2px rgba(121, 134, 203, 0.4);
		margin-right: 14px;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow {
		fill: #99a1aa;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 15px;
		width: 24px;
		position: relative;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 15px;
		width: 24px;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow--disabled {
		fill: #e1e1e1;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow:hover {
		fill: #99a1aa;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow:hover:before {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow:active {
		fill: #99a1aa;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow-wrapper
		.inovua-react-toolkit-calendar__clock-input-spinner-arrow:active:before {
		background: rgba(121, 134, 203, 0.25);
	}
	.inovua-react-toolkit-calendar__input--theme-default-light {
		border: none;
		outline: none;
		padding-left: 8px;
		min-height: 28px;
		color: #555e68;
		background: #fff;
	}
	.inovua-react-toolkit-calendar__input--theme-default-light.inovua-react-toolkit-calendar__input--disabled {
		background: #fff;
		color: #abb3bc;
	}
	.inovua-react-toolkit-calendar__calendar--theme-default-light,
	.inovua-react-toolkit-calendar__date-input--theme-default-light,
	.inovua-react-toolkit-calendar__month-view--theme-default-light,
	.inovua-react-toolkit-calendar__transition-month-view--theme-default-light {
	}
	.inovua-react-toolkit-calendar__transition-month-view--theme-default-light {
		border: 1px solid transparent;
	}
	.inovua-react-toolkit-calendar__transition-month-view--theme-default-light
		.inovua-react-toolkit-calendar__calendar--theme-default-light,
	.inovua-react-toolkit-calendar__transition-month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view--theme-default-light,
	.inovua-react-toolkit-calendar__transition-month-view--theme-default-light
		.inovua-react-toolkit-calendar__multi-month-view--theme-default-light {
		border: none;
	}
	.inovua-react-toolkit-calendar__navigation-view--theme-default-light {
		border: 1px solid transparent;
	}
	.inovua-react-toolkit-calendar__navigation-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view,
	.inovua-react-toolkit-calendar__navigation-view--theme-default-light
		.inovua-react-toolkit-calendar__multi-month-view {
		border: none;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light {
		background: #fff;
		border: 1px solid transparent;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light.inovua-react-toolkit-calendar__month-view-relative {
		position: relative;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-row {
		padding: 0 4px;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-row.inovua-react-toolkit-calendar__month-view-row:last-child {
		margin-bottom: 4px;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-week-day-names {
		color: #99a1aa;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-week-number {
		color: #5b6570;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-week-number.inovua-react-toolkit-calendar__month-view-cell {
		flex: none;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-cell {
		min-width: 32px;
		min-height: 32px;
		margin: 1px;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day {
		z-index: 10;
		color: #555e68;
		border-radius: 1px;
		border: 2px solid transparent;
		position: relative;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day
		.inovua-react-toolkit-calendar__month-view-day-text {
		cursor: pointer;
		text-align: center;
		outline: none;
		width: 100%;
		height: 100%;
		min-width: 32px;
		min-height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1px;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day:not(.inovua-react-toolkit-calendar__month-view-day--today-highlight):hover {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range {
		overflow: hidden;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range
		.inovua-react-toolkit-calendar__month-view-day-text,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range
		.inovua-react-toolkit-calendar__month-view-day-text {
		position: relative;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range
		.inovua-react-toolkit-calendar__month-view-day-text:before {
		position: absolute;
		height: 100%;
		top: 0;
		bottom: 0;
		width: 500%;
		z-index: -1;
		content: '';
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range
		.inovua-react-toolkit-calendar__month-view-day-text:before {
		right: 50%;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range
		.inovua-react-toolkit-calendar__month-view-day-text:after {
		left: 50%;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range.inovua-react-toolkit-calendar__month-view-day--hover-range-end
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range.inovua-react-toolkit-calendar__month-view-day--hover-range-start
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range.inovua-react-toolkit-calendar__month-view-day--range-end:not(.inovua-react-toolkit-calendar__month-view-day--in-hover-range)
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range.inovua-react-toolkit-calendar__month-view-day--range-start:not(.inovua-react-toolkit-calendar__month-view-day--in-hover-range)
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--hover-range-end
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--hover-range-start
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--range-end:not(.inovua-react-toolkit-calendar__month-view-day--in-hover-range)
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--range-start:not(.inovua-react-toolkit-calendar__month-view-day--in-hover-range)
		.inovua-react-toolkit-calendar__month-view-day-text:before {
		display: none;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range.inovua-react-toolkit-calendar__month-view-day--hover-range-end:not(.inovua-react-toolkit-calendar__month-view-day--hover-range-start)
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-hover-range.inovua-react-toolkit-calendar__month-view-day--hover-range-start:not(.inovua-react-toolkit-calendar__month-view-day--hover-range-end)
		.inovua-react-toolkit-calendar__month-view-day-text:after,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--hover-range-end:not(.inovua-react-toolkit-calendar__month-view-day--hover-range-start)
		.inovua-react-toolkit-calendar__month-view-day-text:before,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--hover-range-start:not(.inovua-react-toolkit-calendar__month-view-day--hover-range-end)
		.inovua-react-toolkit-calendar__month-view-day-text:after {
		display: inherit;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range {
		background: rgba(121, 134, 203, 0.25);
		color: #555e68;
		border-radius: 0;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range.inovua-react-toolkit-calendar__month-view-day--active {
		background: rgba(121, 134, 203, 0.25);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--in-range:hover {
		background: rgba(121, 134, 203, 0.15);
		border: 2px solid transparent;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--range-start {
		border-radius: 1px 0 0 1px;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--range-end {
		border-radius: 0 1px 1px 0;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--today-highlight {
		background: #7986cb;
		color: #fff;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--today-highlight:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--today-highlight:hover {
		border: 2px solid rgba(0, 0, 0, 0.15);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--today-highlight:hover:before {
		background: rgba(0, 0, 0, 0.15);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--today-highlight.inovua-react-toolkit-calendar__month-view-day--active {
		color: #fff;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--today-highlight.inovua-react-toolkit-calendar__month-view-day--active
		.inovua-react-toolkit-calendar__month-view-day-text {
		background: #7986cb;
		border: 2px solid #fff;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--active {
		background: #fff;
		border: 2px solid #7986cb;
		color: #555e68;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--active:hover {
		border: 2px solid #7986cb;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--next-month,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--prev-month {
		color: #5b6570;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--weekend-highlight,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--weekend-highlight:hover {
		color: #e57373;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--weekend-highlight.inovua-react-toolkit-calendar__month-view-day--next-month,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--weekend-highlight.inovua-react-toolkit-calendar__month-view-day--prev-month {
		color: rgba(229, 115, 115, 0.6);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--disabled {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--disabled
		.inovua-react-toolkit-calendar__month-view-day-text {
		cursor: default;
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--disabled
		.inovua-react-toolkit-calendar__month-view-day-text:hover {
		background: none;
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--disabled.inovua-react-toolkit-calendar__month-view-day--next-month,
	.inovua-react-toolkit-calendar__month-view--theme-default-light
		.inovua-react-toolkit-calendar__month-view-day--disabled.inovua-react-toolkit-calendar__month-view-day--prev-month {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-calendar__multi-month-view {
		border: 1px solid transparent;
		position: relative;
	}
	.inovua-react-toolkit-calendar__multi-month-view
		.inovua-react-toolkit-calendar__month-view {
		border: none;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light {
		fill: #99a1aa;
		border: 1px solid #cdcecd;
		border-radius: 1px;
		background: #fff;
		color: #555e68;
		min-height: 32px;
		height: 32px;
		transition: all 0.2s;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		input.inovua-react-toolkit-text-input__input {
		font-size: inherit;
		color: inherit;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		input.inovua-react-toolkit-text-input__input::-webkit-input-placeholder {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		input.inovua-react-toolkit-text-input__input:-ms-input-placeholder {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		input.inovua-react-toolkit-text-input__input::-ms-input-placeholder {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		input.inovua-react-toolkit-text-input__input::placeholder {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light:hover {
		border: 1px solid #7986cb;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light.inovua-react-toolkit-text-input--disabled {
		fill: rgba(153, 161, 170, 0.7);
		opacity: 0.5;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light.inovua-react-toolkit-text-input--disabled:hover {
		border: 1px solid #cdcecd;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light.inovua-react-toolkit-text-input--focused {
		border: 1px solid #7986cb;
		box-shadow: 0 0 0 2px rgba(121, 134, 203, 0.4);
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		.inovua-react-toolkit-text-input__spinner-wrapper {
		margin: 4px 6px 4px 0;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		.inovua-react-toolkit-text-input__clear-button {
		stroke: #99a1aa;
		transition: stroke 0.25s ease-in-out;
	}
	.inovua-react-toolkit-text-input.inovua-react-toolkit-text-input--theme-default-light
		.inovua-react-toolkit-text-input__clear-button:hover {
		stroke: #99a1aa;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light {
		outline: none;
		color: #555e68;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--ltr
		.inovua-react-toolkit-radio-button__inner-content-wrapper {
		margin-left: 8px;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--rtl
		.inovua-react-toolkit-radio-button__inner-content-wrapper {
		margin-right: 8px;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--checked
		.inovua-react-toolkit-radio-button__icon-wrapper {
		fill: #7986cb;
		stroke: #e8e8e8;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--unchecked
		.inovua-react-toolkit-radio-button__icon-wrapper {
		stroke: #99a1aa;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--indeterminate
		.inovua-react-toolkit-radio-button__icon-wrapper {
		fill: #e8e8e8;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--indeterminate
		.inovua-react-toolkit-radio-button__icon-wrapper
		svg {
		border-radius: 2px;
		background: #7986cb;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--browser-native {
		margin-left: 5px;
		margin-right: 5px;
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled {
		color: rgba(85, 94, 104, 0.5);
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled.inovua-react-toolkit-radio-button--checked
		.inovua-react-toolkit-radio-button__icon-wrapper {
		fill: rgba(121, 134, 203, 0.5);
		stroke: hsla(0, 0%, 91%, 0.5);
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled.inovua-react-toolkit-radio-button--unchecked
		.inovua-react-toolkit-radio-button__icon-wrapper {
		stroke: rgba(153, 161, 170, 0.5);
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled.inovua-react-toolkit-radio-button--indeterminate
		.inovua-react-toolkit-radio-button__icon-wrapper {
		fill: hsla(0, 0%, 91%, 0.5);
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled.inovua-react-toolkit-radio-button--indeterminate
		.inovua-react-toolkit-radio-button__icon-wrapper
		svg {
		border-radius: 2px;
		background: rgba(121, 134, 203, 0.5);
	}
	.inovua-react-toolkit-radio-button.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--focused
		.inovua-react-toolkit-radio-button__icon-wrapper {
		box-shadow: 0 0 0 3px rgba(121, 134, 203, 0.5);
		border-radius: 2px;
	}
	.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button
		.inovua-react-toolkit-radio-button__inner-content-wrapper {
		color: #555e68;
	}
	.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--checked
		svg {
		fill: #7986cb;
		stroke: #7986cb;
	}
	.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--checked
		.inovua-react-toolkit-radio-button__inner-content-wrapper {
		color: #555e68;
	}
	.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--unchecked {
		stroke: #a8acb0;
	}
	.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled {
		fill: #e1e1e1;
		stroke: #e1e1e1;
	}
	.inovua-react-toolkit-radio-button--theme-default-light.inovua-react-toolkit-radio-button--disabled
		.inovua-react-toolkit-radio-button__inner-content-wrapper {
		color: #abb3bc;
	}
	.inovua-react-toolkit-radio-button-group.inovua-react-toolkit-radio-button-group--theme-default-light {
		outline: none;
	}
	.inovua-react-toolkit-radio-button-group.inovua-react-toolkit-radio-button-group--theme-default-light.inovua-react-toolkit-radio-button-group--focused
		.inovua-react-toolkit-radio-button--checked
		.inovua-react-toolkit-radio-button__icon-wrapper {
		border-radius: 10px;
		box-shadow: 0 0 0 3px rgba(121, 134, 203, 0.3);
	}
	.inovua-react-toolkit-radio-button-group.inovua-react-toolkit-radio-button-group--theme-default-light.inovua-react-toolkit-radio-button-group--orientation-vertical
		.inovua-react-toolkit-radio-button {
		margin-bottom: 8px;
	}
	.inovua-react-toolkit-radio-button-group.inovua-react-toolkit-radio-button-group--theme-default-light.inovua-react-toolkit-radio-button-group--orientation-horizontal {
		display: flex;
	}
	.inovua-react-toolkit-radio-button-group.inovua-react-toolkit-radio-button-group--theme-default-light.inovua-react-toolkit-radio-button-group--orientation-horizontal.inovua-react-toolkit-radio-button-group--rtl
		> :not(:first-child) {
		margin-right: 8px;
	}
	.inovua-react-toolkit-radio-button-group.inovua-react-toolkit-radio-button-group--theme-default-light.inovua-react-toolkit-radio-button-group--orientation-horizontal.inovua-react-toolkit-radio-button-group--ltr
		> :not(:first-child) {
		margin-left: 8px;
	}
	.inovua-react-scroll-container--theme-default-light
		.inovua-react-scroll-container__track--visible {
		background-color: rgba(168, 172, 176, 0.4);
	}
	.inovua-react-scroll-container--theme-default-light
		.inovua-react-scroll-container__thumb {
		background-color: rgba(168, 172, 176, 0.8);
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow {
		fill: #99a1aa;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: transparent;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow:hover {
		fill: #e8e8e8;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow:hover:before {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light {
		background-color: #fff;
		border: none;
		color: #555e68;
		fill: #555e68;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--shadow {
		box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--depth-1,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--depth-2,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--depth-3 {
		background-color: #fff;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__table {
		padding: 8px 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row
		.inovua-react-toolkit-menu__cell--has-expander
		.inovua-react-toolkit-menu__expander-wrapper {
		display: flex;
		justify-content: flex-end;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row
		.inovua-react-toolkit-menu__cell--has-expander
		.inovua-react-toolkit-menu__expander-wrapper
		.inovua-react-toolkit-menu__expander-icon {
		border-radius: 1px;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 14px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused.inovua-react-toolkit-menu__row--over {
		position: relative;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-radio-button--ltr.inovua-react-toolkit-radio-button--children-position-end
		.inovua-react-toolkit-radio-button__icon-wrapper,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-radio-button--rtl.inovua-react-toolkit-radio-button--children-position-start
		.inovua-react-toolkit-radio-button__icon-wrapper {
		margin-right: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-radio-button--ltr.inovua-react-toolkit-radio-button--children-position-start
		.inovua-react-toolkit-radio-button__icon-wrapper,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-radio-button--rtl.inovua-react-toolkit-radio-button--children-position-end
		.inovua-react-toolkit-radio-button__icon-wrapper {
		margin-left: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused {
		position: relative;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused.inovua-react-toolkit-menu__row--checked
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-radio-button__icon-wrapper {
		border-radius: 10px;
		box-shadow: 0 0 0 3px rgba(121, 134, 203, 0.3);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell {
		position: relative;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:before {
		position: absolute;
		content: ' ';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 2px solid #7986cb;
		border-bottom: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:first-child:before {
		left: 0;
		border-left: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:last-child:before {
		right: 0;
		border-right: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused.inovua-react-toolkit-menu__row--over
		.inovua-react-toolkit-menu__cell:before {
		position: absolute;
		content: ' ';
		top: 1px;
		bottom: 1px;
		left: 0;
		right: 0;
		border-top: 2px solid #7986cb;
		border-bottom: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused.inovua-react-toolkit-menu__row--over
		.inovua-react-toolkit-menu__cell:first-child:before {
		right: 1px;
		border-right: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused.inovua-react-toolkit-menu__row--over
		.inovua-react-toolkit-menu__cell:last-child:before {
		left: 1px;
		border-left: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:before {
		right: -1px;
		left: -1px;
		border-top: 2px solid #7986cb;
		border-bottom: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:first-child:before,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:last-child:before {
		right: 0;
		left: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:first-child:before {
		border-left: 0;
		border-right: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__row--focused
		.inovua-react-toolkit-menu__cell:last-child:before {
		border-right: 0;
		border-left: 2px solid #7986cb;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--over {
		color: #555e68;
		fill: #555e68;
		background-color: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--over
		.inovua-react-toolkit-menu__cell {
		background-color: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--over
		.inovua-react-toolkit-menu__cell--has-expander
		.inovua-react-toolkit-menu__expander {
		fill: #e8e8e8;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--active {
		color: #555e68;
		fill: #555e68;
		background-color: rgba(121, 134, 203, 0.25);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--active
		.inovua-react-toolkit-menu__cell {
		background-color: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--disabled {
		color: #abb3bc;
		fill: #abb3bc;
		cursor: not-allowed;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--disabled
		.inovua-react-toolkit-menu__cell--icon {
		fill: #abb3bc;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--disabled
		.inovua-react-toolkit-menu__cell--secondaryLabel {
		color: #abb3bc;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--disabled
		.inovua-react-toolkit-menu__cell--has-expander
		.inovua-react-toolkit-menu__expander {
		fill: #abb3bc;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell {
		padding: 0 12px 0 8px;
		height: 32px;
		vertical-align: middle;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell:first-child {
		padding: 0 12px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--ltr:last-child {
		padding-right: 12px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--rtl:last-child {
		padding-left: 12px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--has-input {
		line-height: 16px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--has-input.inovua-react-toolkit-menu__cell--ltr {
		padding-right: 0;
		padding-left: 12px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--has-input.inovua-react-toolkit-menu__cell--rtl {
		padding-left: 0;
		padding-right: 12px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--checkbox,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio {
		fill: #9ba7b4;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--checkbox
		.inovua-react-toolkit-menu__cell__input,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-menu__cell__input {
		position: relative;
		top: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--checkbox
		.inovua-react-toolkit-menu__cell__input--browser-native,
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--radio
		.inovua-react-toolkit-menu__cell__input--browser-native {
		top: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--secondaryLabel {
		color: #7d8690;
		padding-right: 6px;
		text-align: end;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--secondaryLabel.inovua-react-toolkit-menu__cell--ltr {
		padding-right: 6px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell--secondaryLabel.inovua-react-toolkit-menu__cell--rtl {
		padding-left: 6px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--icon.inovua-react-toolkit-menu__cell--ltr {
		padding-right: 3px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--icon.inovua-react-toolkit-menu__cell--rtl {
		padding-left: 3px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--icon
		svg {
		vertical-align: middle;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--rtl
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--icon {
		padding-right: 12px;
		padding-left: 3px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--has-expander {
		text-align: right;
		text-align: end;
		fill: #99a1aa;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--has-expander.inovua-react-toolkit-menu__cell--ltr {
		padding-right: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__cell.inovua-react-toolkit-menu__cell--has-expander.inovua-react-toolkit-menu__cell--rtl {
		padding-left: 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__menu-separator
		td {
		padding: 8px 0;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__menu-separator
		td
		.inovua-react-toolkit-menu__menu-separator__tool {
		background-color: #e4e3e2;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__menu-separator__tool {
		background: transparent;
		height: 1px;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
		.inovua-react-toolkit-menu__row--title {
		font-weight: 600;
		cursor: auto;
	}
	.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light.inovua-react-toolkit-menu--mobile
		.inovua-react-toolkit-toolbar__arrow {
		height: 20px;
	}
	@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
		.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
			.inovua-react-toolkit-menu__row--focused {
			color: #555e68;
			fill: #555e68;
			background-color: #e8f2ff;
			border: 1px dotted #7986cb;
		}
		.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
			.inovua-react-toolkit-menu__row--focused
			.inovua-react-toolkit-menu__cell {
			background-color: #e8f2ff;
		}
		.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
			.inovua-react-toolkit-menu__row--focused
			.inovua-react-toolkit-menu__cell:before,
		.inovua-react-toolkit-menu.inovua-react-toolkit-menu--theme-default-light
			.inovua-react-toolkit-menu__row--focused.inovua-react-toolkit-menu__row--over
			.inovua-react-toolkit-menu__cell:before {
			content: none;
		}
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default {
		color: #e9ecf0;
		fill: #e9ecf0;

		min-height: 32px;
		overflow: hidden;
		border: 1px solid transparent;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-split-button__icon-wrap:hover {
		background: #526a95;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default.inovua-react-toolkit-split-button--focused {
		border: 1px dotted #3c5c99;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button {
		padding: 4px 8px;
		color: #e9ecf0;

		background: #495e85;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button:not(.inovua-react-toolkit-button--disabled):active,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button:not(.inovua-react-toolkit-button--disabled):hover,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button__button:hover {
		background: #526a95;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button {
		overflow: hidden;
		background: #495e85;
		fill: #e9ecf0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default.inovua-react-toolkit-split-button--expanded
		.inovua-react-toolkit-dropdown-button__button {
		background: #526a95;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		margin-right: 6px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		margin-left: 6px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button:not(.inovua-react-toolkit-button--disabled)
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled) {
		background: #526a95;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		border-left: 1px solid #e9ecf0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		border-left: 1px solid #fff;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		border-right: 1px solid #e9ecf0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled),
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		border-right: 1px solid #fff;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		border-right: 1px solid #e9ecf0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled),
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		border-right: 1px solid #fff;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		border-left: 1px solid #e9ecf0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled),
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		border-left: 1px solid #fff;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		margin-left: 6px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		margin-right: 6px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__arrow {
		padding-left: 2px;
		padding-right: 2px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__text {
		padding-left: 0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-dropdown-button__arrow {
		margin-right: 6px;
		padding-left: 8px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__text {
		padding-right: 0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-dropdown-button__arrow {
		margin-left: 6px;
		padding-right: 8px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__text {
		padding-right: 0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-dropdown-button__arrow {
		margin-left: 6px;
		padding-right: 8px;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__text {
		padding-left: 0;
	}
	.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-dropdown-button__arrow {
		margin-right: 6px;
		padding-left: 8px;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light {
		border: 1px solid #e4e3e2;
		padding: 2px;
		background: #fff;
		color: #99a1aa;
		fill: #9ba7b4;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-button--theme-default:not(.inovua-react-toolkit-split-button__button):not(.inovua-react-toolkit-dropdown-button__button),
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-split-button__button {
		padding: 4px 8px;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-numeric-input,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		input:not(.inovua-react-toolkit-combo-box__input):not(.inovua-react-toolkit-text-input__input):not(.inovua-react-toolkit-date-input__input):not(.inovua-react-toolkit-numeric-input__input) {
		border: 1px solid #e4e3e2;
		outline: none;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--focused,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		input:not(.inovua-react-toolkit-combo-box__input):not(.inovua-react-toolkit-text-input__input):not(.inovua-react-toolkit-date-input__input):not(.inovua-react-toolkit-numeric-input__input):focus {
		border: 1px solid #7986cb;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button
		> .inovua-react-toolkit-dropdown-button
		.inovua-react-toolkit-dropdown-button__button {
		padding: 0;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		border-left: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled),
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled),
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		border-right: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap:hover:not(.inovua-react-toolkit-button__icon-wrap--disabled),
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled)
		.inovua-react-toolkit-dropdown-button--expanded
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):active
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button--theme-default:not(.inovua-react-toolkit-split-button--disabled):hover
		.inovua-react-toolkit-dropdown-button__button.inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		border-left: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-button.inovua-react-toolkit-button.inovua-react-toolkit-button,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button {
		transition: background-color 0.2s;

		color: #99a1aa;
		fill: #99a1aa;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-button.inovua-react-toolkit-button.inovua-react-toolkit-button:not(:hover),
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button:not(:hover),
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button:not(:hover) {
		background-color: transparent;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-button.inovua-react-toolkit-button.inovua-react-toolkit-button:hover,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button:hover,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button:hover {
		background-color: #fff;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-button.inovua-react-toolkit-button.inovua-react-toolkit-button.inovua-react-toolkit-button--disabled,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-button--disabled,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button.inovua-react-toolkit-button--disabled {
		opacity: 0.5;
		background-color: transparent;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-button.inovua-react-toolkit-button.inovua-react-toolkit-button:not(.inovua-react-toolkit-button--disabled):hover,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button.inovua-react-toolkit-dropdown-button:not(.inovua-react-toolkit-button--disabled):hover,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light.inovua-react-toolkit-toolbar--change-button-styles
		.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button.inovua-react-toolkit-split-button:not(.inovua-react-toolkit-button--disabled):hover {
		background-color: #fff;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__separator {
		background: #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow,
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow:hover {
		background: #fff;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow--direction-right {
		border-left: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow--direction-left {
		border-right: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow--direction-down {
		border-top: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-toolbar.inovua-react-toolkit-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__arrow--direction-up {
		border-bottom: 1px solid #e4e3e2;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light {
		fill: #99a1aa;
		border: 1px solid #cdcecd;
		background: #fff;
		min-height: 26px;
		border-radius: 1px;
		transition: all 0.2s;
		position: relative;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light:hover {
		border: 1px solid #7986cb;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__input {
		color: #555e68;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__input::-webkit-input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__input:-ms-input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__input::-ms-input-placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__input::placeholder {
		color: rgba(85, 94, 104, 0.7);
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light.inovua-react-toolkit-numeric-input--disabled {
		fill: rgba(153, 161, 170, 0.7);
		opacity: 0.5;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light.inovua-react-toolkit-numeric-input--focused {
		border: 1px solid #7986cb;
		box-shadow: 0 0 0 2px rgba(121, 134, 203, 0.4);
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__clear-button-wrapper {
		margin-left: 6px;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__clear-button-wrapper
		.inovua-react-toolkit-numeric-input__clear-button,
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__clear-button-wrapper
		.inovua-react-toolkit-numeric-input__clear-button:hover {
		stroke: #99a1aa;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__clear-button-wrapper
		.inovua-react-toolkit-numeric-input__clear-button:focus {
		outline: 1px solid #7986cb;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-wrapper {
		width: 24px;
		height: 30px;
		min-height: 20px;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-wrapper.inovua-react-toolkit-numeric-input__spinner-wrapper--ltr {
		margin: 0;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-wrapper.inovua-react-toolkit-numeric-input__spinner-wrapper--rtl {
		margin: 4px 0 4px 6px;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-wrapper-hidden.inovua-react-toolkit-numeric-input__spinner-wrapper-hidden--ltr {
		margin: 0 6px 0 0;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-wrapper-hidden.inovua-react-toolkit-numeric-input__spinner-wrapper-hidden--rtl {
		margin: 0 0 0 6px;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__input {
		min-height: 26px;
		margin: 2px 0;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow {
		padding: 0 6px;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow
		svg {
		transform: translateY(0);
		pointer-events: none;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow--down:hover,
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow--up:hover {
		background: rgba(121, 134, 203, 0.15);
		fill: #99a1aa;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow--down:active,
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow--up:active {
		background: rgba(121, 134, 203, 0.25);
		fill: #99a1aa;
	}
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow--down:active
		svg,
	.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--theme-default-light
		.inovua-react-toolkit-numeric-input__spinner-arrow--up:active
		svg {
		transform: translateY(0);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light {
		border: 1px solid #cdcecd;
		border-radius: 1px;
		background: #fff;
		fill: #99a1aa;
		stroke: #99a1aa;
		padding-top: 2px;
		min-width: 100px;
		box-shadow: none;
		transition: all 0.2s;
		position: relative;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light:hover:not(.inovua-react-toolkit-combo-box--disabled) {
		border: 1px solid #7986cb;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light,
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		input {
		color: #555e68;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		input {
		padding: 0;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__input__placeholder {
		color: rgba(85, 94, 104, 0.7);
		white-space: nowrap;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--focus {
		background: #fff;
		border: 1px solid #7986cb;
		box-shadow: 0 0 2px 0 rgba(121, 134, 203, 0.5);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--ltr {
		padding-right: 3px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--ltr
		.inovua-react-toolkit-combo-box__input__wrapper,
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--ltr
		.inovua-react-toolkit-combo-box__value__display-value {
		padding-left: 8px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--rtl {
		padding-left: 3px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--rtl
		.inovua-react-toolkit-combo-box__input__wrapper,
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--rtl
		.inovua-react-toolkit-combo-box__value__display-value {
		padding-right: 8px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--disabled {
		fill: #99a1aa;
		opacity: 0.5;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--shadow
		.inovua-react-toolkit-combo-box__list {
		box-shadow: 0 0 8px 0 hsla(0, 0%, 43.9%, 0.5);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__list__loading-text {
		background: hsla(0, 0%, 100%, 0.4);
		color: #858585;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__loading-spinner {
		width: 17px;
		display: flex;
		align-items: center;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__loading-spinner
		svg {
		-webkit-animation: react-toolkit-combo-box-loading-animation-default 1.4s
			linear infinite;
		animation: react-toolkit-combo-box-loading-animation-default 1.4s linear
			infinite;
		transform: translateZ(0);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__clear-icon {
		cursor: pointer;
		display: flex;
		align-items: center;
		margin: 0 8px 0 6px;
		transform: translateY(0);
		transition: stroke 0.25s ease-in-out;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__clear-icon:active {
		transform: translateY(1px);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__clear-icon:hover
		svg {
		stroke: #99a1aa;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__tools,
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__value {
		min-height: 27px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__tools
		.inovua-react-toolkit-combo-box__toggle-icon:hover {
		fill: #99a1aa;
		stroke: #99a1aa;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__tools
		.inovua-react-toolkit-combo-box__toggle-icon:hover:before {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__tools
		.inovua-react-toolkit-combo-box__toggle-icon:active:before {
		background: rgba(121, 134, 203, 0.25);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__tools
		.inovua-react-toolkit-combo-box__toggle-icon:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 22px;
		height: 100%;
		background: transparent;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__value__tag {
		background: #fff;
		border: 1px solid #e4e3e2;
		border-radius: 1px;
		padding: 3px 8px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__value__tag--active {
		border: 1px solid #7986cb;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__value__tag--active.inovua-react-toolkit-combo-box__value__tag--selected {
		background: #fff;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__value__tag__clear-icon {
		transform: translateY(0);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__value__tag__clear-icon:active {
		transform: translateY(1px);
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--ltr
		.inovua-react-toolkit-combo-box__value__tag__clear-icon {
		margin-left: 12px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--ltr
		.inovua-react-toolkit-combo-box__value__tag {
		margin-right: 2px;
		margin-bottom: 2px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--rtl
		.inovua-react-toolkit-combo-box__value__tag__clear-icon {
		margin-right: 12px;
	}
	.inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light.inovua-react-toolkit-combo-box--rtl
		.inovua-react-toolkit-combo-box__value__tag {
		margin-left: 2px;
		margin-bottom: 2px;
	}
	@-webkit-keyframes react-toolkit-combo-box-loading-animation-default {
		0% {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(1turn);
		}
	}
	@keyframes react-toolkit-combo-box-loading-animation-default {
		0% {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(1turn);
		}
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light {
		background: #fff;
		border-radius: 1px;
		border: none;
		box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__item {
		padding: 5px 8px;
		border: 1px solid transparent;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__item:not(.inovua-react-toolkit-combo-box__list__item--disabled):hover {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__item--selected {
		background: rgba(121, 134, 203, 0.25);
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__item--active {
		border: 1px solid transparent;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__item--disabled {
		color: #555e68;
		cursor: default;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__item__highlight {
		background: #f0f;
		font-weight: 700;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__group {
		padding: 5px 3px;
		font-weight: 700;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__virtual-list {
		background: #fff;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__virtual-list::-webkit-scrollbar {
		width: 8px;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__virtual-list::-webkit-scrollbar-track {
		background-color: rgba(168, 172, 176, 0.4);
		border-radius: 2px;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__virtual-list::-webkit-scrollbar-thumb {
		background: rgba(168, 172, 176, 0.4);
		border-radius: 2px;
	}
	.inovua-react-toolkit-combo-box__list--theme-default-light
		.inovua-react-toolkit-combo-box__list__virtual-list::-webkit-scrollbar-button {
		display: none;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light {
		color: #7986cb;
		fill: #7986cb;

		border-radius: 1px;
		transition: background 0.2s, transform 0.2s;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button) {
		background: #fff padding-box;
		transform: translateY(0);
		border: 1px solid #7986cb;
		min-height: 28px;
		padding: 4px 8px;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button):not(.inovua-react-toolkit-button--disabled):active {
		transform: translateY(1px);
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button):not(.inovua-react-toolkit-button--disabled):hover {
		background: rgba(121, 134, 203, 0.15) padding-box;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button):not(.inovua-react-toolkit-button--disabled).inovua-react-toolkit-button--pressed {
		background: rgba(121, 134, 203, 0.25) padding-box;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button):not(.inovua-react-toolkit-button--disabled).inovua-react-toolkit-button--pressed:hover {
		background: rgba(147, 157, 213, 0.25) padding-box;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button).inovua-react-toolkit-button--focused {
		border: 1px solid #7986cb;
		box-shadow: 0 0 0 3px rgba(121, 134, 203, 0.4);
		transition: border 0.2s;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light.inovua-react-toolkit-button--disabled {
		color: #7986cb;
		fill: #7986cb;
		opacity: 0.5;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light.inovua-react-toolkit-button--has-icon:not(.inovua-react-toolkit-button--no-children):not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button).inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		margin-right: 6px;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light.inovua-react-toolkit-button--has-icon:not(.inovua-react-toolkit-button--no-children):not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button).inovua-react-toolkit-button--ltr.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap,
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light.inovua-react-toolkit-button--has-icon:not(.inovua-react-toolkit-button--no-children):not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button).inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-first
		.inovua-react-toolkit-button__icon-wrap {
		margin-left: 6px;
	}
	.inovua-react-toolkit-button.inovua-react-toolkit-button--theme-default-light.inovua-react-toolkit-button--has-icon:not(.inovua-react-toolkit-button--no-children):not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button).inovua-react-toolkit-button--rtl.inovua-react-toolkit-button--icon-last
		.inovua-react-toolkit-button__icon-wrap {
		margin-right: 6px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light {
		padding: 2px 4px;
		background: #fff;
		fill: #99a1aa;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		input {
		color: #555e68;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light.inovua-react-pagination-toolbar--bordered {
		border: 1px solid #e4e3e2;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__per-page-text {
		margin-left: 8px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-button:not(.inovua-react-toolkit-dropdown-button__button):not(.inovua-react-toolkit-split-button__button) {
		padding: 2px;
		border-radius: 1px;
		border: 1px solid transparent;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-combo-box--theme-default-light,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-combo-box--theme-default-light
		.inovua-react-toolkit-combo-box__list,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-numeric-input--theme-default-light,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		input:not(.inovua-react-toolkit-numeric-input__input) {
		border: 1px solid #e4e3e2;
		outline: none;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-combo-box--focus.inovua-react-toolkit-combo-box--theme-default-light,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-numeric-input.inovua-react-toolkit-numeric-input--focused,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		input:not(.inovua-react-toolkit-numeric-input__input):focus {
		border: 1px solid #7986cb;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-toolkit-toolbar__separator {
		background: #e4e3e2;
		margin: 7px 8px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__page-size-combo {
		background: #fff;
		margin-right: 8px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon {
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		fill: #99a1aa;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon.inovua-react-toolkit-button--over:not(.inovua-react-pagination-toolbar__icon--disabled).inovua-react-toolkit-button,
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon.inovua-react-toolkit-button--over:not(.inovua-react-pagination-toolbar__icon--disabled).inovua-react-toolkit-button:hover {
		background: rgba(121, 134, 203, 0.15);
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon--focused {
		background: rgba(121, 134, 203, 0.25);
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon--named--FIRST_PAGE {
		margin-left: 4px;
		margin-right: 3px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon--named--NEXT_PAGE {
		margin-right: 3px;
	}
	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light
		.inovua-react-pagination-toolbar__region
		.inovua-react-pagination-toolbar__icon--named--REFRESH {
		margin-right: 8px;
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light {
		fill: transparent;
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__background-layer {
		background: rgba(0, 0, 0, 0.1);
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__loader--svg {
		position: relative;
		-webkit-animation: inovua-react-toolkit-loadmask-spin 1.5s linear infinite;
		animation: inovua-react-toolkit-loadmask-spin 1.5s linear infinite;
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__loader--svg
		.inovua-react-toolkit-load-mask__loader-spinner {
		border-radius: 50%;
		background-image: conic-gradient(
			from 90deg,
			#e3e3e3,
			#7986cb 0.99turn,
			#e3e3e3
		);
		object-fit: contain;
		z-index: 9000;
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__loader--svg:after {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		z-index: 10000;
		background: transparent;
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__loader--svg:before {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #fafafa;
		z-index: 10000;
	}
	@keyframes inovua-react-toolkit-loadmask-spin {
		to {
			transform: rotate(1turn);
		}
	}
	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__loader-loadbar {
		border-radius: 50px;
		box-shadow: 0 0 3px rgba(121, 134, 203, 0.2);
	}
	.InovuaReactDataGrid--theme-default-light
		.inovua-react-toolkit-load-mask__loader-container
		.InovuaReactDataGrid__loading-wrapper {
		margin-top: 16px;
	}
	.InovuaReactDataGrid--theme-default-light
		.inovua-react-toolkit-load-mask__loader-container
		.InovuaReactDataGrid__loading-wrapper
		.InovuaReactDataGrid__loading-text {
		font-weight: 500;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__load-mask--live-pagination {
		background: none;
	}
	.InovuaReactDataGrid--theme-default-light .inovua-react-pagination-toolbar {
		flex: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light {
		border: none;
		border-top: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter--select__scroller.inovua-react-scroll-container__scroller {
		outline: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter--select__scroller.inovua-react-scroll-container__scroller::-webkit-scrollbar {
		width: 14px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter--select__scroller.inovua-react-scroll-container__scroller::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 0 10px rgba(168, 172, 176, 0.8);
		border: 4px solid transparent;
		border-radius: 10px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter--select__scroller.inovua-react-scroll-container__scroller::-webkit-scrollbar-corner {
		background: transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter--select__scroller.inovua-react-scroll-container__scroller::-webkit-scrollbar-button {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light .inovua-react-toolkit-radio-button {
		margin-bottom: 0;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__checkbox {
		margin: 3px;
	}
	.InovuaReactDataGrid--theme-default-light {
		border: 1px solid #e4e3e2;
		background: #fff;
		color: #555e68;
		fill: #99a1aa;
	}
	.InovuaReactDataGrid--theme-default-light:focus {
		outline: none;
	}
	.inovua-react-panel--theme-THEME_NAME
		.InovuaReactDataGrid--theme-default-light,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--paginated:not(.InovuaReactDataGrid--live-pagination) {
		border: 1px solid #a1b6d3;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-rows-container {
		border-top: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row--show-border-bottom:not(:last-child) {
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-rows-container--position-start
		.InovuaReactDataGrid__locked-row--last-in-section {
		border-bottom: 3px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-rows-container--position-end
		.InovuaReactDataGrid__locked-row--first-in-section {
		border-top: 3px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-resize-indicator--hovered {
		background: #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-resize-indicator--active,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-resize-indicator--active.InovuaReactDataGrid__row-resize-indicator--mobile {
		background: rgba(121, 134, 203, 0.5);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-resize-indicator--constrained,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-resize-indicator--constrained.InovuaReactDataGrid__row-resize-indicator--mobile {
		background: rgba(232, 64, 54, 0.5);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-index-column {
		background: #f8f8f8;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-resize-handle:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-details-border {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-drag-proxy {
		background: #fff;
		border: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-reorder-arrow--valid {
		background: #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-reorder-arrow--invalid {
		background: #f54;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--scrolling:not(.InovuaReactDataGrid__row--natural-rowheight) {
		contain: strict !important;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--scrolling {
		pointer-events: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row
		.InovuaReactDataGrid__row-details {
		background: #fff;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row
		.InovuaReactDataGrid__row-details.InovuaReactDataGrid__row-details--details-grid {
		padding: 8px 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row
		.InovuaReactDataGrid__row-details
		> .InovuaReactDataGrid {
		margin: 0 8px;
		width: auto;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row
		.InovuaReactDataGrid__row-details.InovuaReactDataGrid__row-details--show-border-bottom
		+ .InovuaReactDataGrid__row-details-special-bottom-border {
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row
		.InovuaReactDataGrid__row-details--min-viewport-width
		+ .InovuaReactDataGrid__row-details-special-top-border,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row
		.InovuaReactDataGrid__row-details--viewport-width
		+ .InovuaReactDataGrid__row-details-special-top-border {
		position: absolute;
		width: 100%;
		top: -1px;
		left: 0;
		border-top: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row:not(.InovuaReactDataGrid__row--show-vertical-borders)
		.InovuaReactDataGrid__row-details {
		border-top: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row:not(.InovuaReactDataGrid__row--show-horizontal-borders)
		.InovuaReactDataGrid__row-details
		+ .InovuaReactDataGrid__row-details-special-top-border {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row.InovuaReactDataGrid__row--show-horizontal-borders
		.InovuaReactDataGrid__row-details {
		border-top: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row.InovuaReactDataGrid__row--show-horizontal-borders
		.InovuaReactDataGrid__row-details.InovuaReactDataGrid__row-details--show-border-bottom
		.InovuaReactDataGrid__row-details-special-bottom-border {
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row.InovuaReactDataGrid__row--selected {
		background: rgba(121, 134, 203, 0.25);
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__row--even,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--no-zebra {
		background: #fff;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--even.InovuaReactDataGrid__row--selected,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--even.InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-index-column,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--no-zebra.InovuaReactDataGrid__row--selected,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--no-zebra.InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-index-column {
		background: #dee1f2;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__row--odd {
		background: #f8f8f8;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--odd.InovuaReactDataGrid__row--selected,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--odd.InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-index-column {
		background: #dee1f2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active
		.InovuaReactDataGrid__row-active-borders {
		position: absolute;
		right: 0;
		bottom: 0;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 12000;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active
		.InovuaReactDataGrid__row-active-borders:before {
		border: 2px solid transparent;
		content: '';
		position: absolute;
		left: 2px;
		right: 2px;
		top: 1px;
		bottom: 1px;
		pointer-events: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active
		.InovuaReactDataGrid__row-active-borders.InovuaReactDataGrid__row-active-borders--has-border-top:before {
		top: 2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active
		.InovuaReactDataGrid__row-active-borders.InovuaReactDataGrid__row-active-borders--has-border-bottom:before {
		bottom: 2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active
		.InovuaReactDataGrid__cell:not(.InovuaReactDataGrid__cell--no-background),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--even
		.InovuaReactDataGrid__cell:not(.InovuaReactDataGrid__cell--no-background),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--odd
		.InovuaReactDataGrid__cell:not(.InovuaReactDataGrid__cell--no-background) {
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--selected {
		background: rgba(121, 134, 203, 0.25);
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__locked-row:hover
		.InovuaReactDataGrid__locked-row-cell {
		background: #ebedf7;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #ebedf7;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #ebedf7;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #d0d5ed;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #d0d5ed;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #ebedf7;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #ebedf7;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #d0d5ed;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #d0d5ed;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active
		> .InovuaReactDataGrid__row-active-borders-wrapper
		> .InovuaReactDataGrid__row-active-borders:before,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active
		> .InovuaReactDataGrid__row-active-borders:before {
		border: 2px solid #7986cb;
		z-index: 10;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active
		> .InovuaReactDataGrid__row-active-borders-wrapper {
		z-index: 11000;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--no-locked-start:before {
		border-left: 2px solid #7986cb;
		z-index: 1;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--no-locked-end:before {
		border-right: 2px solid #7986cb;
		z-index: 1;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--group-row.InovuaReactDataGrid__row--has-locked-end
		> .InovuaReactDataGrid__row-active-borders,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--group-row.InovuaReactDataGrid__row--has-locked-end
		> .InovuaReactDataGrid__row-active-borders-wrapper
		> .InovuaReactDataGrid__row-active-borders,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--group-row.InovuaReactDataGrid__row--has-locked-start
		> .InovuaReactDataGrid__row-active-borders,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--focused
		.InovuaReactDataGrid__row--active.InovuaReactDataGrid__row--group-row.InovuaReactDataGrid__row--has-locked-start
		> .InovuaReactDataGrid__row-active-borders-wrapper
		> .InovuaReactDataGrid__row-active-borders {
		background: inherit;
		z-index: 11000;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-reorder-icon
		svg {
		fill: #495e85;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__header,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-wrapper__fill {
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__column-header,
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__header,
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__header-group {
		font-weight: inherit;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-rtl-scroll-spacer {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__header {
		background: #fff;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper {
		background: inherit;
		transition: background;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title {
		border-bottom: 1px solid #e4e3e2;
		-ms-user-select: none;
		user-select: none;
		-webkit-user-select: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title.InovuaReactDataGrid__header-group__title--empty {
		border-bottom: 1px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content {
		font-weight: 700;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell:not(.InovuaReactDataGrid__cell--no-padding),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell,
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__nested-cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__nested-group-cell {
		padding: 8px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-group,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-group {
		background: #fff;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell {
		font-weight: inherit;
		border-color: #e4e3e2 !important;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content
		.InovuaReactDataGrid__sort-icon-wrapper,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item
		.InovuaReactDataGrid__sort-icon-wrapper {
		display: inline-flex;
		flex-direction: column;
		vertical-align: middle;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content
		.InovuaReactDataGrid__sort-icon-wrapper
		.InovuaReactDataGrid__sort-icon,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item
		.InovuaReactDataGrid__sort-icon-wrapper
		.InovuaReactDataGrid__sort-icon {
		margin-left: 8px;
		margin-right: 8px;
		fill: #e1e1e1;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content
		.InovuaReactDataGrid__sort-icon-wrapper
		.InovuaReactDataGrid__sort-icon.InovuaReactDataGrid__sort-icon--asc,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item
		.InovuaReactDataGrid__sort-icon-wrapper
		.InovuaReactDataGrid__sort-icon.InovuaReactDataGrid__sort-icon--asc {
		margin-bottom: 4px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content
		.InovuaReactDataGrid__sort-icon-wrapper
		.InovuaReactDataGrid__sort-icon.InovuaReactDataGrid__sort-icon--active,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item
		.InovuaReactDataGrid__sort-icon-wrapper
		.InovuaReactDataGrid__sort-icon.InovuaReactDataGrid__sort-icon--active {
		fill: #99a1aa;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-resizer {
		-ms-user-select: none;
		user-select: none;
		-webkit-user-select: none;
		height: inherit;
		bottom: 0;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--filterable
		.InovuaReactDataGrid__column-resizer {
		bottom: 41px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-resize-handle,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group-resize-handle {
		background: #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__resize-proxy {
		width: 4px;
		background: rgba(121, 134, 203, 0.5);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__resize-proxy--constrained {
		background: rgba(232, 64, 54, 0.5);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section
		+ .InovuaReactDataGrid__column-resizer
		.InovuaReactDataGrid__column-resize-handle {
		right: -1px;
		z-index: 100;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__column-header,
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__header-group,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-wrapper {
		line-height: 1.6;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__drag-proxy {
		direction: rtl;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__drag-proxy {
		opacity: 0.7;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__drag-proxy {
		opacity: 1;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__header-group--dragging {
		border-top: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__header-group--dragging {
		border-top: 1px solid #e4e3e2;
		border-left: 1px solid #e4e3e2;
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--dragging
		.InovuaReactDataGrid__column-header__menu-tool {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--dragging.InovuaReactDataGrid__column-header--dragging {
		border: 1px solid #cdcecd;
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left
		.InovuaReactDataGrid__column-header--dragging.InovuaReactDataGrid__column-header--dragging {
		border-left: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--show-border-left {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--direction-ltr.InovuaReactDataGrid__column-header--unresizable.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--direction-ltr.InovuaReactDataGrid__column-header__resize-wrapper--locked-start.InovuaReactDataGrid__column-header__resize-wrapper--last-in-section:after {
		content: '';
		position: absolute;
		right: -3px;
		left: unset;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--direction-ltr.InovuaReactDataGrid__column-header--unresizable.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section.InovuaReactDataGrid__column-header--dragging:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--direction-ltr.InovuaReactDataGrid__column-header--unresizable.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--direction-ltr.InovuaReactDataGrid__column-header__resize-wrapper--locked-start.InovuaReactDataGrid__column-header__resize-wrapper--last-in-section.InovuaReactDataGrid__column-header--dragging:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--direction-ltr.InovuaReactDataGrid__column-header__resize-wrapper--locked-start.InovuaReactDataGrid__column-header__resize-wrapper--last-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging:after {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--direction-rtl.InovuaReactDataGrid__column-header--unresizable.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--direction-rtl.InovuaReactDataGrid__column-header__resize-wrapper--locked-start.InovuaReactDataGrid__column-header__resize-wrapper--last-in-section:after {
		content: '';
		position: absolute;
		left: -3px;
		right: unset;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--direction-rtl.InovuaReactDataGrid__column-header--unresizable.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section.InovuaReactDataGrid__column-header--dragging:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--direction-rtl.InovuaReactDataGrid__column-header--unresizable.InovuaReactDataGrid__column-header--locked-start.InovuaReactDataGrid__column-header--last-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--direction-rtl.InovuaReactDataGrid__column-header__resize-wrapper--locked-start.InovuaReactDataGrid__column-header__resize-wrapper--last-in-section.InovuaReactDataGrid__column-header--dragging:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--direction-rtl.InovuaReactDataGrid__column-header__resize-wrapper--locked-start.InovuaReactDataGrid__column-header__resize-wrapper--last-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging:after {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__column-header--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__header-group__title--show-border-left {
		z-index: 10;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title {
		border-right: 1px solid transparent;
		font-weight: 700;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--show-border-right {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-ltr.InovuaReactDataGrid__header-group__title--show-border-right.InovuaReactDataGrid__header-group__title--locked-start {
		border-right: none;
		margin-right: 3px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-ltr.InovuaReactDataGrid__header-group__title--show-border-right.InovuaReactDataGrid__header-group__title--locked-start:after {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-ltr.InovuaReactDataGrid__header-group__title--show-border-left.InovuaReactDataGrid__header-group__title--locked-end.InovuaReactDataGrid__header-group__title--first-in-section {
		margin-left: 3px;
		border-left: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-ltr.InovuaReactDataGrid__header-group__title--show-border-left.InovuaReactDataGrid__header-group__title--locked-end.InovuaReactDataGrid__header-group__title--first-in-section:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-rtl.InovuaReactDataGrid__header-group__title--show-border-left.InovuaReactDataGrid__header-group__title--locked-start {
		border-left: none;
		margin-left: 3px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-rtl.InovuaReactDataGrid__header-group__title--show-border-left.InovuaReactDataGrid__header-group__title--locked-start:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-rtl.InovuaReactDataGrid__header-group__title--show-border-right.InovuaReactDataGrid__header-group__title--locked-end.InovuaReactDataGrid__header-group__title--first-in-section {
		margin-right: 3px;
		border-right: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--direction-rtl.InovuaReactDataGrid__header-group__title--show-border-right.InovuaReactDataGrid__header-group__title--locked-end.InovuaReactDataGrid__header-group__title--first-in-section:after {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__column-header--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy.InovuaReactDataGrid__header-group
		.InovuaReactDataGrid__header-group__title--show-border-left.InovuaReactDataGrid__header-group__title--locked-end.InovuaReactDataGrid__header-group__title--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__header-group__title--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy
		.InovuaReactDataGrid__header-group__title--show-border-left.InovuaReactDataGrid__header-group__title--locked-end.InovuaReactDataGrid__header-group__title--first-in-section {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy.InovuaReactDataGrid__header-group
		.InovuaReactDataGrid__column-header__resize-wrapper,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy.InovuaReactDataGrid__header-group
		.InovuaReactDataGrid__header-group__title {
		margin-right: 0;
		margin-left: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy.InovuaReactDataGrid__header-group
		.InovuaReactDataGrid__column-header__resize-wrapper:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__drag-proxy.InovuaReactDataGrid__header-group
		.InovuaReactDataGrid__header-group__title:after {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-header-border-right.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__header-group__title--last:not(.InovuaReactDataGrid__header-group__title--dragging) {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-header-border-right.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right
		> .InovuaReactDataGrid__column-header--last:not(.InovuaReactDataGrid__column-header--hidden):not(.InovuaReactDataGrid__drag-proxy) {
		border-right: 0;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-header-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__header-group__title--last:not(.InovuaReactDataGrid__header-group__title--dragging) {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-header-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right
		> .InovuaReactDataGrid__column-header--last:not(.InovuaReactDataGrid__column-header--hidden):not(.InovuaReactDataGrid__drag-proxy) {
		border-left: 0;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-header-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__column-header.InovuaReactDataGrid__drag-proxy {
		border-left: 1px solid #e4e3e2;
		border-right: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--show-border-right,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header.InovuaReactDataGrid__column-header--virtualize-columns.InovuaReactDataGrid__column-header--show-border--left {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header--show-border-right:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper:last-child {
		border-right: 3px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header--show-border-right:last-child.InovuaReactDataGrid__column-header--show-border-right:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right:last-child.InovuaReactDataGrid__column-header--show-border-right:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper:last-child.InovuaReactDataGrid__column-header--show-border-right:last-child {
		padding-right: 2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header--show-border-right:last-child
		> .InovuaReactDataGrid__column-header--show-border-right:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right:last-child
		> .InovuaReactDataGrid__column-header--show-border-right:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper:last-child
		> .InovuaReactDataGrid__column-header--show-border-right:after {
		content: '';
		position: absolute;
		right: -1px;
		z-index: 1;
		top: -1px;
		bottom: -1px;
		width: 3px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header--show-border-left:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper:last-child {
		border-left: 3px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header--show-border-left:last-child.InovuaReactDataGrid__column-header--show-border-left:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left:last-child.InovuaReactDataGrid__column-header--show-border-left:last-child,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper:last-child.InovuaReactDataGrid__column-header--show-border-left:last-child {
		padding-left: 2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header--show-border-left:last-child
		> .InovuaReactDataGrid__column-header--show-border-right:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left:last-child
		> .InovuaReactDataGrid__column-header--show-border-right:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-start-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper:last-child
		> .InovuaReactDataGrid__column-header--show-border-right:after {
		content: '';
		position: absolute;
		right: -1px;
		z-index: 1;
		top: -1px;
		bottom: -1px;
		width: 3px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header--show-border-left.InovuaReactDataGrid__column-header--locked-end.InovuaReactDataGrid__column-header--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left.InovuaReactDataGrid__column-header__resize-wrapper--locked-end.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section {
		border-left: 3px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header--show-border-left.InovuaReactDataGrid__column-header--locked-end.InovuaReactDataGrid__column-header--first-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left.InovuaReactDataGrid__column-header__resize-wrapper--locked-end.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging {
		border-left: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header--show-border-left.InovuaReactDataGrid__column-header--locked-end.InovuaReactDataGrid__column-header--first-in-section:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-ltr
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left.InovuaReactDataGrid__column-header__resize-wrapper--locked-end.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section:after {
		content: '';
		position: absolute;
		left: -3px;
		z-index: 1;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header--show-border-right.InovuaReactDataGrid__column-header--locked-end.InovuaReactDataGrid__column-header--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right.InovuaReactDataGrid__column-header__resize-wrapper--locked-end.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section {
		border-right: 2px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header--show-border-right.InovuaReactDataGrid__column-header--locked-end.InovuaReactDataGrid__column-header--first-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right.InovuaReactDataGrid__column-header__resize-wrapper--locked-end.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section.InovuaReactDataGrid__column-header__resize-wrapper--dragging {
		border-left: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header--show-border-right.InovuaReactDataGrid__column-header--locked-end.InovuaReactDataGrid__column-header--first-in-section:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-end-wrapper--direction-rtl
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-right.InovuaReactDataGrid__column-header__resize-wrapper--locked-end.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section:after {
		content: '';
		position: absolute;
		right: -2px;
		z-index: 1;
		top: 0;
		bottom: 0;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--dragging.InovuaReactDataGrid__drag-proxy.InovuaReactDataGrid__column-header__resize-wrapper--first-in-section.InovuaReactDataGrid__column-header__resize-wrapper--locked-end {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--dragging.InovuaReactDataGrid__drag-proxy:after {
		display: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--sortable {
		-ms-user-select: none;
		user-select: none;
		-webkit-user-select: none;
		cursor: pointer;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-placeholder
		.InovuaReactDataGrid__column-header,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-placeholder
		.InovuaReactDataGrid__header-group__title {
		background: hsla(0, 0%, 100%, 0.6);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-placeholder
		.InovuaReactDataGrid__column-header--dragging {
		background: hsla(0, 0%, 100%, 0.8);
		z-index: 1000;
		border-right: 1px solid #e4e3e2;
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-placeholder
		.InovuaReactDataGrid__column-header--should-group {
		border-top: 1px solid #e4e3e2;
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-arrow-fill {
		background: #7986cb;
		position: absolute;
		width: auto;
		height: auto;
		top: 1px;
		bottom: 2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-arrow-fill--direction-ltr {
		left: 2px;
		right: -2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-arrow-fill--direction-rtl {
		right: 2px;
		left: -2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-reorder-arrow-fill--target-group {
		top: 0;
		bottom: 1px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--last-in-section.InovuaReactDataGrid__column-header--locked-start
		.InovuaReactDataGrid__column-header__content {
		padding-right: 13px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--locked:after {
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--first
		.InovuaReactDataGrid__cell {
		border-top: 1px solid transparent !important;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--collapsed
		.InovuaReactDataGrid__cell:not(.InovuaReactDataGrid__cell--show-border-bottom) {
		border-bottom: 1px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-rows-container--show-border-right {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-top {
		border-top: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-bottom,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-bottom,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-bottom {
		border-bottom: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-left {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-left.InovuaReactDataGrid__cell--direction-ltr.InovuaReactDataGrid__cell--locked-end:first-child:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-left.InovuaReactDataGrid__footer-row-cell--direction-ltr.InovuaReactDataGrid__footer-row-cell--locked-end:first-child:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-left.InovuaReactDataGrid__locked-row-cell--direction-ltr.InovuaReactDataGrid__locked-row-cell--locked-end:first-child:after {
		content: '';
		position: absolute;
		left: -1px;
		top: -1px;
		bottom: -1px;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--last,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right:not(.InovuaReactDataGrid__cell--last),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right:not(.InovuaReactDataGrid__footer-row-cell--last),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right:not(.InovuaReactDataGrid__locked-row-cell--last) {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__footer-row-cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__locked-row-cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end.InovuaReactDataGrid__cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end.InovuaReactDataGrid__footer-row-cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end.InovuaReactDataGrid__locked-row-cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end.InovuaReactDataGrid__cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end.InovuaReactDataGrid__footer-row-cell--first-in-section,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end.InovuaReactDataGrid__locked-row-cell--first-in-section {
		border-right: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__cell--last-in-section:not(.InovuaReactDataGrid__cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__footer-row-cell--last-in-section:not(.InovuaReactDataGrid__footer-row-cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end.InovuaReactDataGrid__locked-row-cell--last-in-section:not(.InovuaReactDataGrid__locked-row-cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end.InovuaReactDataGrid__cell--last-in-section:not(.InovuaReactDataGrid__cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end.InovuaReactDataGrid__footer-row-cell--last-in-section:not(.InovuaReactDataGrid__footer-row-cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end.InovuaReactDataGrid__locked-row-cell--last-in-section:not(.InovuaReactDataGrid__locked-row-cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end.InovuaReactDataGrid__cell--last-in-section:not(.InovuaReactDataGrid__cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end.InovuaReactDataGrid__footer-row-cell--last-in-section:not(.InovuaReactDataGrid__footer-row-cell--first-in-section),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end.InovuaReactDataGrid__locked-row-cell--last-in-section:not(.InovuaReactDataGrid__locked-row-cell--first-in-section) {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--locked-end:first-child:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--locked-end:first-child:after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--locked-end:first-child:after {
		content: '';
		position: absolute;
		right: 0;
		top: -1px;
		bottom: -1px;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--direction-ltr.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--locked-start.InovuaReactDataGrid__cell--last-in-section:not(.InovuaReactDataGrid__cell--last):after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--direction-ltr.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--locked-start.InovuaReactDataGrid__footer-row-cell--last-in-section:not(.InovuaReactDataGrid__footer-row-cell--last):after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--direction-ltr.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--locked-start.InovuaReactDataGrid__locked-row-cell--last-in-section:not(.InovuaReactDataGrid__locked-row-cell--last):after {
		content: '';
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--show-border-left.InovuaReactDataGrid__cell--locked-start.InovuaReactDataGrid__cell--last-in-section:not(.InovuaReactDataGrid__cell--last):after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--show-border-left.InovuaReactDataGrid__footer-row-cell--locked-start.InovuaReactDataGrid__footer-row-cell--last-in-section:not(.InovuaReactDataGrid__footer-row-cell--last):after,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--show-border-left.InovuaReactDataGrid__locked-row-cell--locked-start.InovuaReactDataGrid__locked-row-cell--last-in-section:not(.InovuaReactDataGrid__locked-row-cell--last):after {
		content: '';
		position: absolute;
		left: -1px;
		top: -1px;
		bottom: -1px;
		width: 3px;
		border-left: 1px solid #e4e3e2;
		border-right: 1px solid #e4e3e2;
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-right.InovuaReactDataGrid__cell--last-in-section.InovuaReactDataGrid__cell--locked-start,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--last-in-section.InovuaReactDataGrid__footer-row-cell--locked-start,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--last-in-section.InovuaReactDataGrid__locked-row-cell--locked-start {
		padding-right: 13px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--direction-ltr.InovuaReactDataGrid__cell--show-border-left.InovuaReactDataGrid__cell--first-in-section.InovuaReactDataGrid__cell--locked-end,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--direction-ltr.InovuaReactDataGrid__footer-row-cell--show-border-left.InovuaReactDataGrid__footer-row-cell--first-in-section.InovuaReactDataGrid__footer-row-cell--locked-end,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--direction-ltr.InovuaReactDataGrid__locked-row-cell--show-border-left.InovuaReactDataGrid__locked-row-cell--first-in-section.InovuaReactDataGrid__locked-row-cell--locked-end {
		padding-left: 13px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--direction-rtl.InovuaReactDataGrid__cell--show-border-left.InovuaReactDataGrid__cell--first-in-section.InovuaReactDataGrid__cell--locked-end,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--direction-rtl.InovuaReactDataGrid__footer-row-cell--show-border-right.InovuaReactDataGrid__footer-row-cell--first-in-section.InovuaReactDataGrid__footer-row-cell--locked-end,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--direction-rtl.InovuaReactDataGrid__locked-row-cell--show-border-right.InovuaReactDataGrid__locked-row-cell--first-in-section.InovuaReactDataGrid__locked-row-cell--locked-end {
		padding-right: 13px;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__cell--last:not(.InovuaReactDataGrid__cell--hidden),
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__footer-row-cell--last:not(.InovuaReactDataGrid__cell--hidden),
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__locked-row-cell--last:not(.InovuaReactDataGrid__cell--hidden),
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-ltr
		.InovuaReactDataGrid__row-details.InovuaReactDataGrid__row-details--show-border-right:not(.InovuaReactDataGrid__row-details--min-viewport-width) {
		border-right: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__cell--last:not(.InovuaReactDataGrid__cell--hidden),
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__footer-row-cell--last:not(.InovuaReactDataGrid__cell--hidden),
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__locked-row-cell--last:not(.InovuaReactDataGrid__cell--hidden),
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-border-right.InovuaReactDataGrid--direction-rtl
		.InovuaReactDataGrid__row-details.InovuaReactDataGrid__row-details--show-border-right:not(.InovuaReactDataGrid__row-details--min-viewport-width) {
		border-left: 1px solid #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__cell--hidden {
		border-right: 0;
		border-left: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--first
		.InovuaReactDataGrid__cell.InovuaReactDataGrid__cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--first
		.InovuaReactDataGrid__nested-block,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--first
		.InovuaReactDataGrid__nested-cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row--first
		.InovuaReactDataGrid__nested-group-cell {
		border-top: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--no-background.InovuaReactDataGrid__cell--no-background {
		background: #fff;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--grouped
		.InovuaReactDataGrid__cell--first-in-column-group {
		padding: 0;
		flex: 1;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--group-cell:not(.InovuaReactDataGrid__cell--pivot-enabled) {
		background: #fff;
		font-weight: 700;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--group-expand-cell.InovuaReactDataGrid__cell--group-expand-cell {
		padding: 0;
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__nested-cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__nested-group-cell {
		height: auto;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell.InovuaReactDataGrid__cell--locked:after {
		background: #e4e3e2;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__virtual-list-sticky-rows-container
		.InovuaReactDataGrid__row-cell-wrap
		.InovuaReactDataGrid__cell.InovuaReactDataGrid__cell--show-border-top {
		border-top: 1px solid transparent;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--last-in-section.InovuaReactDataGrid__cell--locked-start
		.InovuaReactDataGrid__cell__selection {
		right: 3px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--last-in-section.InovuaReactDataGrid__cell--locked-start
		.InovuaReactDataGrid__cell__selection-dragger {
		right: 1px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--last-in-section.InovuaReactDataGrid__cell--unlocked
		.InovuaReactDataGrid__cell__selection {
		right: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--first-in-section.InovuaReactDataGrid__cell--locked-end
		.InovuaReactDataGrid__cell__selection {
		left: 3px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--first-in-section.InovuaReactDataGrid__cell--locked-end
		.InovuaReactDataGrid__cell__selection-dragger {
		right: 1px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--first-in-section.InovuaReactDataGrid__cell--locked-end
		.InovuaReactDataGrid__cell__selection-dragger--direction-rtl {
		left: 1px;
		right: unset;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--last-in-section
		.InovuaReactDataGrid__cell__selection-dragger {
		right: 1px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--last-in-section
		.InovuaReactDataGrid__cell__selection-dragger--direction-rtl {
		left: 1px;
		right: unset;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--cell-active
		.InovuaReactDataGrid__cell__selection:after {
		border: 2px solid #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--cell-selected
		.InovuaReactDataGrid__cell__selection:after {
		background: rgba(121, 134, 203, 0.15);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--cell-active.InovuaReactDataGrid__cell--cell-selected {
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--cell-active.InovuaReactDataGrid__cell--cell-selected
		.InovuaReactDataGrid__cell__selection:after {
		border: 2px solid #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell__selection {
		background: rgba(121, 134, 203, 0.05);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell__selection:after {
		border: 1px solid #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell__selection-dragger {
		border-top: none;
		border-left: none;
		width: 6px;
		height: 6px;
		background: #7986cb;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-wrapper {
		min-height: 41px;
		border: 0;
		background: #fff;
		border-top: 1px solid #e4e3e2;
		padding: 4px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-wrapper--disabled,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-wrapper--read-only {
		opacity: 0.6;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-wrapper
		.InovuaReactDataGrid__column-header__filter {
		min-height: 32px;
		max-height: 32px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter__binary_operator_separator {
		width: 4px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-settings {
		margin-left: 8px;
		margin-right: 4px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-settings
		svg {
		pointer-events: none;
		transform: translateY(0);
		transition: transform 0.2s;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-settings:active
		svg {
		transform: translateY(1px);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-settings
		.InovuaReactDataGrid__column-header__filter-settings-icon {
		fill: #99a1aa;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__filter-settings:hover
		.InovuaReactDataGrid__column-header__filter-settings-icon {
		fill: #e8e8e8;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-wrapper__fill__filters {
		min-height: 41px;
		border-top: 1px solid #e4e3e2;
		background: #fff;
	}
	.InovuaReactDataGrid__group-toolbar--theme-default-light {
		padding: 4px;
		border-bottom: 1px solid #e4e3e2;
		background: #fff;
		fill: #99a1aa;
		min-height: 40px;
	}
	.InovuaReactDataGrid__group-toolbar--theme-default-light
		.InovuaReactDataGrid__group-toolbar-insert-arrow {
		background: #7d8389;
		margin: 0 3px;
	}
	.InovuaReactDataGrid__group-toolbar--theme-default-light
		.InovuaReactDataGrid__group-toolbar-insert-arrow:first-child {
		margin-left: 0;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light {
		padding: 8px 9px;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		border: 1px solid #e4e3e2;
		background: #fff;
		cursor: move;
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light.InovuaReactDataGrid__group-toolbar-item--sortable {
		cursor: pointer;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light.InovuaReactDataGrid__group-toolbar-item--dragging {
		opacity: 0.8;
		cursor: move;
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light:not(.InovuaReactDataGrid__group-toolbar-item--dragging) {
		transition: left 0.2s;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light.InovuaReactDataGrid__group-toolbar-item--placeholder {
		border: 1px solid transparent;
		opacity: 0.9;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item__clear-icon {
		vertical-align: middle;
		cursor: pointer;
		position: relative;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item__clear-icon
		svg {
		margin-bottom: 2px;
		transform: translateY(0);
		transition: transform 0.2s;
		pointer-events: none;
		stroke: #99a1aa;
	}
	.InovuaReactDataGrid__group-toolbar-item--theme-default-light
		.InovuaReactDataGrid__group-toolbar-item__clear-icon:active
		svg {
		transform: translateY(1px);
	}
	.InovuaReactDataGrid__group-toolbar--direction-ltr
		.InovuaReactDataGrid__group-toolbar-item--theme-default-light
		+ .InovuaReactDataGrid__group-toolbar-item--theme-default-light {
		margin-left: 2px;
	}
	.InovuaReactDataGrid__group-toolbar--direction-rtl
		.InovuaReactDataGrid__group-toolbar-item--theme-default-light
		+ .InovuaReactDataGrid__group-toolbar-item--theme-default-light {
		margin-right: 2px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-active-borders-inner {
		border: 2px solid #7986cb;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		pointer-events: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-active-borders {
		position: absolute;
		right: 0;
		bottom: 0;
		top: 0;
		left: 0;
		pointer-events: none;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-active-borders--has-border-top
		.InovuaReactDataGrid__row-active-borders-inner {
		top: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__row-active-borders--has-border-bottom
		.InovuaReactDataGrid__row-active-borders-inner {
		bottom: 0;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__menu-tool {
		border-left: none;
		border-right: none;
		margin-right: 8px;
		padding: 1px;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__menu-tool
		svg {
		transform: translateY(0);
		pointer-events: none;
		transition: transform 0.2s;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__menu-tool
		svg:active {
		transform: translateY(1px);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__menu-tool:hover
		svg {
		fill: #e8e8e8;
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--align-end.InovuaReactDataGrid__column-header--direction-ltr
		> .InovuaReactDataGrid__column-header__menu-tool,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--align-start.InovuaReactDataGrid__column-header--direction-rtl
		> .InovuaReactDataGrid__column-header__menu-tool {
		border-left: none;
		border-right: none;
		margin-left: 8px;
	}

	/* overrides below, these are customizations for VMS 
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__resize-wrapper--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title--show-border-left {
		border-left: 1px solid transparent;
	}

	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell--show-border-left,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell--show-border-left {
		border-left: 1px solid transparent;
	}*/

	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-resize-handle,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group-resize-handle {
		background: rgb(34, 102, 221, 0.5);
	}
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__resize-proxy {
		width: 4px;
		background: rgb(34, 102, 221, 0.2);
	}
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__resize-proxy--constrained {
		background: rgb(34, 102, 221, 0.2);
	}

	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__header {
		background: transparent;
	}

	.inovua-react-pagination-toolbar.inovua-react-pagination-toolbar--theme-default-light {
		background: transparent;
		height: 46px;
	}

	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__cell:not(.InovuaReactDataGrid__cell--no-padding),
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__column-header__content,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__footer-row-cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__header-group__title,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__locked-row-cell,
	.InovuaReactDataGrid--theme-default-light .InovuaReactDataGrid__nested-cell,
	.InovuaReactDataGrid--theme-default-light
		.InovuaReactDataGrid__nested-group-cell {
		padding: 8px 0 8px 16px;
	}

	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__locked-row:hover
		.InovuaReactDataGrid__locked-row-cell {
		background: #f3f7ff;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #f3f7ff;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #f3f7ff;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #d0d5ed;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--even:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #d0d5ed;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #f3f7ff;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty)
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #f3f7ff;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover {
		background: #d0d5ed;
		color: #555e68;
	}
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--no-zebra:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column,
	.InovuaReactDataGrid--theme-default-light.InovuaReactDataGrid--show-hover-rows
		.InovuaReactDataGrid__row--odd:not(.InovuaReactDataGrid__row--scrolling):not(.InovuaReactDataGrid__row--empty).InovuaReactDataGrid__row--selected
		.InovuaReactDataGrid__row-hover-target:hover
		.InovuaReactDataGrid__row-index-column {
		background: #d0d5ed;
	}

	.InovuaReactDataGrid__empty-wrapper {
		overflow: auto;
		z-index: 10000;
		display: flex;
		flex-flow: column;
		align-items: top;
		justify-content: start;
		margin-top: 60px;
	}

	.inovua-react-toolkit-load-mask.inovua-react-toolkit-load-mask--theme-default-light
		.inovua-react-toolkit-load-mask__loader--svg
		.inovua-react-toolkit-load-mask__loader-spinner {
		border-radius: 50%;
		background-image: conic-gradient(from 90deg, #f8f8f8, #2266dd, #f8f8f8);
		object-fit: contain;
		z-index: 9000;
	}
`;

/* stylelint-enable */

export default GridStyles;
