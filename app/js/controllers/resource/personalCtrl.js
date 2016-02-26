/**
 * @description [基础资源库个人上传部分]
 * @author [silence]
 * @date  15/11/10
 */
define(['./../module', 'jquery', 'cxSelect'], function (controllers) {

    'use strict';

    controllers.controller('personalCtrl', ['$scope','$http','resPersonalService', function ($scope, $http, resPersonalService) {

        // 是否显示结构化信息下地 信息类型
        $scope.isShowInfoType = false;
        // 切换展示与否
        $scope.showInfoType = function() {
            $scope.isShowInfoType = !$scope.isShowInfoType;
        };

        // 是否显示缩略图列表
        $scope.isShowThumb = false;
        // 是否显示详细信息列表
        $scope.isShowDetail = true;
        // 显示缩略图列表
        $scope.showThumbListClick = function() {
            $scope.isShowThumb = true;
            $scope.isShowDetail = false;
        };
        // 显示详细信息列表
        $scope.showDetailListClick = function() {
            $scope.isShowThumb = false;
            $scope.isShowDetail = true;
        };

        // 分页
        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
        $scope.pageChanged = function() {
            $log.log('Page changed to: ' + $scope.currentPage);
        };
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;

    }]);
});