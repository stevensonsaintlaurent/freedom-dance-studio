import RentalHero from "./RentalHero";
import StudioRentalPricing from "./StudioRentalPricing";
import RentalFeatures from "./RentalFeatures";
import RentalGallery from "./RentalGallery";
import RentalVideo from "./RentalVideo";
import RentalBooking from "./RentalBooking";

export default function StudioRentals() {
  return (
    <main className="min-h-screen bg-base-100">
      <RentalHero />

      <div id="pricing">
        <StudioRentalPricing />
      </div>

      <RentalFeatures />

      <RentalVideo />

      <RentalGallery />

      <RentalBooking />
    </main>
  );
}
