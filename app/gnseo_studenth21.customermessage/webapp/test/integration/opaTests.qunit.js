sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'gnseostudenth21/customermessage/test/integration/FirstJourney',
		'gnseostudenth21/customermessage/test/integration/pages/CustomerMessageList',
		'gnseostudenth21/customermessage/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('gnseostudenth21/customermessage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);