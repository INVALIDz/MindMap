import * as actionTypes from './actionTypes';
import React, { useState, useContext } from 'react';
import { css } from 'emotion';
import { context } from '../../context';
import useMindmap from '../../customHooks/useMindmap';
import useHistory from '../../customHooks/useHistory';
import useZoom from '../../customHooks/useZoom';
import useMove from '../../customHooks/useMove';
import * as refer from '../../statics/refer';
import * as popupType from '../../components/Popup/common/popupType';
import { handlePropagation, downloadFile } from '../../methods/assistFunctions'; // 防止 Mindmap 中的选中状态由于冒泡被清除
import ToolButton from '../../components/ToolButton';
import MindmapTitle from '../../components/MindmapTitle';
import Popup from '../../components/Popup';
import html2canvas from 'html2canvas';
import mindmapExporter from '../../methods/mindmapExporter';
import axios from 'axios';

export const setHistory = (mindmap, cur_node) => ({
    type: actionTypes.SET_HISTORY,
    data: mindmap ? ({mindmap, cur_node}) : null
    
});

export const clearHistory = () => ({type: actionTypes.CLEAR_HISTORY});