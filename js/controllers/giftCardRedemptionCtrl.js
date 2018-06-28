four51.app.controller('GiftCardRedemptionCtrl', ['$scope', 'GiftCard', function($scope, GiftCard) {
	$scope.redeemGiftCard = function() {
		$scope.$parent.gcMessage = null;
		$scope.$parent.gcCode = null;
		GiftCard.redeem(this.giftcard,
			function(card) {
				$scope.giftcard = card;
				$scope.$parent.gcCode = card.Code;
				$scope.$parent.$parent.gcCode = card.Code;
			},
			function(ex) {
				$scope.$parent.$parent.gcMessage = ex.Message;
			}
		);
	}
}]);