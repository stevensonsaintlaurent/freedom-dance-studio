import RentalHero from "./RentalHero";
import StudioRentalPricing from "./StudioRentalPricing";
import RentalFeatures from "./RentalFeatures";
import RentalGallery from "./RentalGallery";
import RentalBooking from "./RentalBooking";

export default function StudioRentals() {
  return (
    <main className="min-h-screen bg-base-100">
      <RentalHero />

      <div id="pricing">
        <StudioRentalPricing />
      </div>

      <RentalFeatures />

      <RentalGallery />

      <RentalBooking />
    </main>
  );
}
