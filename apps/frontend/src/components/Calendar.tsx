import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export const Calendar =({ calLink, onConfirm } : { calLink: string; onConfirm: (event?: any) => void }) => {
  useEffect(() => {
    console.log(calLink);
    (async function initCal() {
      const cal = await getCalApi({ namespace: "accessible-booking" });
      if (cal) {
        cal("ui", {
          cssVarsPerTheme: {
            light:{
              'spacing': '0.45rem',
              'cal-brand': '#034081', // High contrast black primary elements
            },
            dark: {
              spacing: '0.45rem',
              'cal-brand': '#034081', // High contrast black primary elements
            }
            
          },
          theme: "light", // Keep it light for maximum readability/contrast
          layout: "week_view", // Stable, predictable calendar view
          styles: {

            branding: {
             
              brandColor: "#034081", // High contrast black primary elements
            }
          }
        });

        cal('on', {action: 'bookingSuccessfulV2', callback: (event: any) => { onConfirm(event); }});
      }
    })();
  }, []);

  return (
    <div className="md:p-2">
      <h1 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>
        Pick a Day and Time
      </h1>
      
      <Cal
        namespace="accessible-booking"
        calLink={calLink}
        config={{ layout: 'week_view'}}
      />
    </div>
  );
};
