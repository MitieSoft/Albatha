<template>
    <div class="checkout-container">
        <!-- Main Title -->
        <div class="main-title-section">
            <h1 class="checkout-title">Complete Your Subscription</h1>
        </div>



        <!-- Main Content Layout -->
        <div class="main-content-layout">
            <!-- Left Side: Information Section -->
            <div class="left-side-section">
                <!-- Step 1: Information -->
                <div v-show="currentStep === 1" class="step-section">
                    <div class="step-content">
                        <h2 class="section-title">Information</h2>

                        <!-- Information Form -->
                        <form class="roofr-form" @submit.prevent="completeSubscription">
                            <div class="form-row">
                                <div class="form-group full-width">
                                    <label for="fullName">Full name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        v-model="roofrInfo.fullName"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group full-width">
                                    <label for="email">Email address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="roofrInfo.email"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group full-width">
                                    <label for="phone">Phone number *</label>
                                    <div class="phone-input">
                                        <div
                                            class="country-code"
                                            @click="toggleCountryDropdown"
                                        >
                                            <span class="flag-emoji">{{
                                                selectedCountry.flag
                                            }}</span>
                                            <span>{{ selectedCountry.code }}</span>
                                            <i
                                                class="fas fa-chevron-down"
                                                :class="{
                                                    rotated: showCountryDropdown,
                                                }"
                                            ></i>
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            v-model="roofrInfo.phone"
                                            placeholder="Enter phone number"
                                            required
                                        />
                                    </div>
                                    <!-- Country Dropdown -->
                                    <div
                                        class="country-dropdown"
                                        v-show="showCountryDropdown"
                                    >
                                        <div
                                            v-for="country in countries"
                                            :key="country.code"
                                            class="country-option"
                                            @click="selectCountry(country)"
                                        >
                                            <span class="flag-emoji">{{
                                                country.flag
                                            }}</span>
                                            <span>{{ country.name }}</span>
                                            <span class="country-code-text">{{
                                                country.code
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group full-width">
                                    <label for="country">Country *</label>
                                    <div class="select-wrapper">
                                        <select
                                            id="country"
                                            v-model="roofrInfo.country"
                                            required
                                        >
                                            <option value="">Select country</option>
                                            <option value="AE">
                                                United Arab Emirates
                                            </option>
                                            <option value="AR">Argentina</option>
                                            <option value="AU">Australia</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BR">Brazil</option>
                                            <option value="CA">Canada</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CO">Colombia</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="DE">Germany</option>
                                            <option value="DO">
                                                Dominican Republic
                                            </option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="FR">France</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HN">Honduras</option>
                                            <option value="IN">India</option>
                                            <option value="JP">Japan</option>
                                            <option value="KR">Korea</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="MX">Mexico</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="NO">Norway</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PA">Panama</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RU">Russia</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="TW">Taiwan</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="ZA">South Africa</option>
                                        </select>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        v-model="roofrInfo.city"
                                        placeholder="Enter city"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        v-model="roofrInfo.state"
                                        placeholder="Enter state"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="zipCode">ZIP Code</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        v-model="roofrInfo.zipCode"
                                        placeholder="Enter ZIP code"
                                    />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group full-width">
                                    <label for="address">Address</label>
                                    <textarea
                                        id="address"
                                        v-model="roofrInfo.address"
                                        placeholder="Enter your full address"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>

                            <!-- Terms and Conditions -->
                            <div class="terms-section">
                                <label class="checkbox-label">
                                    <input
                                        type="checkbox"
                                        v-model="roofrInfo.termsAccepted"
                                        required
                                    />
                                    <span class="checkmark"></span>
                                    <span class="terms-text"
                                        >I have read and agree to the
                                        <a href="#" class="terms-link"
                                            >Terms and Conditions</a
                                        ></span
                                    >
                                </label>
                            </div>
                        </form>

                        <!-- Step 1 Continue Button -->
                        <div class="step-actions">
                            <button 
                                type="button" 
                                class="continue-btn"
                                @click="nextStep"
                                :disabled="!canProceedToPayment"
                                :title="!canProceedToPayment ? 'Please fill all required fields and accept terms' : 'Continue to payment'"
                            >
                                Continue to Payment
                                <i class="fas fa-arrow-right"></i>
                            </button>
                            <div v-if="!canProceedToPayment" class="validation-message">
                                <i class="fas fa-info-circle"></i>
                                Please fill all required fields and accept terms to continue
                            </div>
                            <div v-else class="validation-message success">
                                <i class="fas fa-check-circle"></i>
                                All fields completed! You can now proceed to payment
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 2: Payment Method -->
                <div v-show="currentStep === 2" class="step-section">
                    <div class="step-content">
                        <h2 class="section-title">Payment Method</h2>
                        
                        <!-- Back Button -->
                        <div class="back-button-container">
                            <button 
                                type="button" 
                                class="back-btn"
                                @click="prevStep"
                            >
                                <i class="fas fa-arrow-left"></i>
                                Back to Information
                            </button>
                        </div>

                        <div class="payment-method-options">
                            <div
                                class="payment-method-option"
                                :class="{ selected: selectedPaymentMethod === 'stripe' }"
                                @click="selectPaymentMethod('stripe')"
                            >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-label="Stripe"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="48" height="48" rx="8" fill="#635BFF" />
                        <path
                            d="M32.5 23.5c0-2.5-2-4-5.5-4-3.2 0-5.2 1.5-5.2 4.1 0 2 1.5 3.1 4.2 3.5l1.2.2c1.2.2 1.7.4 1.7 1 0 .6-.6.9-1.7.9-1.2 0-2.4-.3-3.4-.8l-.5 2.6c1.1.5 2.5.8 4 .8 3.4 0 5.4-1.5 5.4-4.1 0-2-1.5-3.1-4.2-3.5l-1.2-.2c-1.2-.2-1.7-.4-1.7-1 0-.6.6-.9 1.7-.9 1.1 0 2.2.2 3.1.7l.5-2.5z"
                            fill="#fff"
                        />
                    </svg>
                    <span>Stripe</span>
                </div>
                <div
                    class="payment-method-option"
                    :class="{ selected: selectedPaymentMethod === 'paypal' }"
                    @click="selectPaymentMethod('paypal')"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-label="PayPal"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M32.5 18.5c-1.2-1.2-3.1-1.8-5.7-1.8h-7.2c-.7 0-1.3.5-1.4 1.2l-3.1 18.1c-.1.5.3 1 .8 1h5.1l.7-4.2h2.7c4.5 0 8-1.8 9-7.1.4-2.2-.1-4-1.2-5.2zm-2.2 6.1c-.5 2.7-2.5 3.6-5.1 3.6h-2.1l1.1-6.2h2.1c2.6 0 3.9.9 3.4 2.6z"
                            fill="#003087"
                        />
                        <path
                            d="M34.7 20.2c.7 1.1.9 2.7.6 4.5-.7 4.1-3.7 6.1-8.7 6.1h-2.1l.7-4.2h2.1c2.6 0 4.6-.9 5.1-3.6.2-.7.2-1.3.1-1.8.7.1 1.4.4 1.9 1z"
                            fill="#009cde"
                        />
                    </svg>
                    <span>PayPal</span>
                </div>
            </div>

            <!-- Stripe Payment Form -->
            <div
                v-if="selectedPaymentMethod === 'stripe'"
                class="payment-form-section"
            >
                <h3 class="payment-form-title">Card Details</h3>
                <div class="card-form">
                    <div class="form-row">
                        <div class="form-group full-width">
                            <label for="cardholderName">Cardholder Name *</label>
                            <input
                                type="text"
                                id="cardholderName"
                                v-model="stripeInfo.cardholderName"
                                placeholder="Name on card"
                                required
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group full-width">
                            <label>Card Number *</label>
                            <div id="card-element" class="stripe-element">
                                <!-- Stripe Elements will create form elements here -->
                            </div>
                            <div id="card-errors" class="stripe-errors" role="alert"></div>
                        </div>
                    </div>

                    <div class="stripe-note">
                        <i class="fas fa-lock"></i>
                        <span>Your card details are securely processed by Stripe.</span>
                    </div>
                </div>
            </div>

            <!-- PayPal Payment Form -->
            <div
                v-if="selectedPaymentMethod === 'paypal'"
                class="payment-form-section"
            >
                <h3 class="payment-form-title">PayPal Account</h3>
                <div class="paypal-form">
                    <div class="form-row">
                        <div class="form-group full-width">
                            <label for="paypalEmail">PayPal Email *</label>
                            <div class="paypal-input-wrapper">
                                <input
                                    type="email"
                                    id="paypalEmail"
                                    v-model="paypalInfo.email"
                                    placeholder="your-email@example.com"
                                    required
                                />
                                <i class="fab fa-paypal"></i>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group full-width">
                            <label for="paypalPassword"
                                >PayPal Password *</label
                            >
                            <div class="paypal-input-wrapper">
                                <input
                                    type="password"
                                    id="paypalPassword"
                                    v-model="paypalInfo.password"
                                    placeholder="Enter your PayPal password"
                                    required
                                />
                                <i class="fas fa-lock"></i>
                            </div>
                        </div>
                    </div>

                    <div class="paypal-note">
                        <i class="fas fa-info-circle"></i>
                        <span
                            >You will be redirected to PayPal to complete your
                            payment securely.</span
                        >
                    </div>
                </div>
            </div>
        </div>

                <!-- Step 2 Actions -->
                <div class="step-actions">
                    <button
                        class="pay-button"
                        @click="completeSubscription"
                        :disabled="!canProceed || isProcessing"
                    >
                        <span v-if="isProcessing">
                            <i class="fas fa-spinner fa-spin"></i>
                            Processing...
                        </span>
                        <span v-else>
                            Complete Subscription with
                            {{ selectedPaymentMethod === "stripe" ? "Stripe" : "PayPal" }}
                        </span>
                    </button>
                </div>
            </div>
            </div>

            <!-- Right Side: Package Review Section -->
            <div class="right-side-section">
                <div class="package-review-section">
                    <div class="step-content">
                        <h2 class="section-title">Review your package</h2>

                        <!-- Package Details -->
                        <div v-if="selectedPackage" class="package-details">
                            <div class="package-header">
                                <div class="package-info">
                                    <h3 class="package-name">
                                        {{ selectedPackage.name }}
                                    </h3>
                                    <p class="package-description">
                                        {{ selectedPackage.description }}
                                    </p>

                                    <!-- Billing Cycle Selection -->
                                    <div class="billing-cycle-selector">
                                        <div class="billing-options">
                                            <label
                                                class="billing-option"
                                                :class="{
                                                    active:
                                                        selectedBillingCycle ===
                                                        'monthly',
                                                }"
                                            >
                                                <input
                                                    type="radio"
                                                    name="billingCycle"
                                                    value="monthly"
                                                    v-model="selectedBillingCycle"
                                                />
                                                <span class="billing-label"
                                                    >Monthly</span
                                                >
                                                <span class="billing-price"
                                                    >${{
                                                        selectedPackage.monthlyPrice || 0
                                                    }}/month</span
                                                >
                                            </label>

                                            <label
                                                class="billing-option"
                                                :class="{
                                                    active:
                                                        selectedBillingCycle ===
                                                        'annual',
                                                }"
                                            >
                                                <input
                                                    type="radio"
                                                    name="billingCycle"
                                                    value="annual"
                                                    v-model="selectedBillingCycle"
                                                />
                                                <span class="billing-label"
                                                    >Annual</span
                                                >
                                                <span class="billing-price"
                                                    >${{
                                                        selectedPackage.annualPrice || 0
                                                    }}/year</span
                                                >
                                                <span class="savings-badge"
                                                    >Save 20%</span
                                                >
                                            </label>
                                        </div>
                                    </div>

                                    <div class="package-price">
                                        ${{ currentPrice || 0 }}/{{
                                            selectedBillingCycle === "annual"
                                                ? "year"
                                                : "month"
                                        }}
                                    </div>
                                </div>
                            </div>

                            <!-- Package Features -->
                            <div
                                class="package-features"
                                v-if="selectedPackage.features"
                            >
                                <h4 class="features-title">What's included:</h4>
                                <ul class="features-list">
                                    <li
                                        v-for="feature in selectedPackage.features"
                                        :key="feature"
                                        class="feature-item"
                                    >
                                        <i class="bi bi-check-circle-fill"></i>
                                        <span>{{ feature }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- No Package Selected Message -->
                        <div v-else class="no-package-message">
                            <div class="message-content">
                                <i class="fas fa-exclamation-triangle"></i>
                                <h3>No Package Selected</h3>
                                <p>
                                    Please select a package from the pricing page to
                                    continue with checkout.
                                </p>
                                <a
                                    href="http://127.0.0.1:5500/index.html"
                                    class="select-package-btn"
                                    >Select Package</a
                                >
                            </div>
                        </div>

                        <!-- Order Summary -->
                        <div class="order-summary">
                            <div class="summary-row">
                                <span>Subtotal</span>
                                <span>${{ subtotal }}</span>
                            </div>
                            <div class="summary-row" v-if="setupFee > 0">
                                <span>Setup Fee</span>
                                <span>${{ setupFee }}</span>
                            </div>
                            <div class="summary-row discount" v-if="discount > 0">
                                <span>Annual Savings (20%)</span>
                                <span>-${{ discount }}</span>
                            </div>
                            <div class="summary-row total">
                                <span>Total</span>
                                <span>${{ total }}</span>
                            </div>
                        </div>

                        <!-- Security Info -->
                        <div class="security-info">
                            <div class="security-header">
                                <i class="fas fa-lock"></i>
                                <span>Secure Checkout - SSL Encrypted</span>
                            </div>
                            <p class="security-description">
                                Ensuring your financial and personal details are secure
                                during every transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckoutPage",
    data() {
        return {
            currentStep: 1,
            roofrInfo: {
                fullName: "",
                email: "",
                phone: "",
                country: "",
                city: "",
                state: "",
                zipCode: "",
                address: "",
                termsAccepted: false,
            },
            discountCode: "",
            selectedPackage: {
                id: 'professional',
                name: 'Professional Plan',
                description: 'Most popular choice for growing businesses',
                monthlyPrice: 175,
                annualPrice: 1680,
                quantity: 1,
                features: [
                    "Everything in Starter",
                    "Advanced Analytics",
                    "CRM Integration", 
                    "Unlimited vehicles",
                    "Priority support"
                ]
            },
            selectedBillingCycle: "monthly", // 'monthly' or 'annual'
            allPackages: {
                starter: {
                    id: 1,
                    name: "Starter Plan",
                    description: "Perfect for small businesses",
                    quantity: 1,
                    monthlyPrice: 125.0,
                    annualPrice: 1200.0, // 12 months with discount
                    features: [
                        "75 max addendums per month",
                        "Print Addendums",
                        "Print Buyers Guides",
                        "Print Infosheets",
                        "Print QR Code Stickers",
                    ],
                    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzA0MkQ0MyIvPgo8cGF0aCBkPSJNMTAgMjhMNTAgMjhMNTAgMzJMMTAgMzJaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNSAyMEw0NSAyMEw0NSAyOEwxNSAyOFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==",
                },
                professional: {
                    id: 2,
                    name: "Professional Plan",
                    description: "Most popular choice for growing businesses",
                    quantity: 1,
                    monthlyPrice: 175.0,
                    annualPrice: 1680.0, // 12 months with discount
                    features: [
                        "Everything in Starter",
                        "Advanced Analytics",
                        "CRM Integration",
                        "Unlimited vehicles",
                        "Priority support",
                    ],
                    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0E4MzExOSIvPgo8cGF0aCBkPSJNMTAgMjhMNTAgMjhMNTAgMzJMMTAgMzJaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNSAyMEw0NSAyMEw0NSAyOEwxNSAyOFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==",
                },
                enterprise: {
                    id: 3,
                    name: "Enterprise Plan",
                    description: "Complete solution for large organizations",
                    quantity: 1,
                    monthlyPrice: 199.0,
                    annualPrice: 1910.0, // 12 months with discount
                    features: [
                        "Everything in Professional",
                        "Multi-location support",
                        "Custom integrations",
                        "Dedicated account manager",
                        "White-label options",
                    ],
                    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzA0MkQ0MyIvPgo8cGF0aCBkPSJNMTAgMjhMNTAgMjhMNTAgMzJMMTAgMzJaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNSAyMEw0NSAyMEw0NSAyOEwxNSAyOFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==",
                },
            },
            setupFee: 0.0,
            selectedPaymentMethod: "stripe",
            showCountryDropdown: false,
            selectedCountry: {
                code: "+1",
                name: "United States",
                flag: "🇺🇸",
            },
            countries: [
                {
                    code: "+971",
                    name: "United Arab Emirates",
                    flag: "🇦🇪",
                },
                {
                    code: "+54",
                    name: "Argentina",
                    flag: "🇦🇷",
                },
                {
                    code: "+61",
                    name: "Australia",
                    flag: "🇦🇺",
                },
                {
                    code: "+880",
                    name: "Bangladesh",
                    flag: "🇧🇩",
                },
                {
                    code: "+591",
                    name: "Bolivia",
                    flag: "🇧🇴",
                },
                {
                    code: "+55",
                    name: "Brazil",
                    flag: "🇧🇷",
                },
                {
                    code: "+1",
                    name: "Canada",
                    flag: "🇨🇦",
                },
                {
                    code: "+56",
                    name: "Chile",
                    flag: "🇨🇱",
                },
                {
                    code: "+86",
                    name: "China",
                    flag: "🇨🇳",
                },
                {
                    code: "+57",
                    name: "Colombia",
                    flag: "🇨🇴",
                },
                {
                    code: "+506",
                    name: "Costa Rica",
                    flag: "🇨🇷",
                },
                {
                    code: "+49",
                    name: "Germany",
                    flag: "🇩🇪",
                },
                {
                    code: "+1",
                    name: "Dominican Republic",
                    flag: "🇩🇴",
                },
                {
                    code: "+593",
                    name: "Ecuador",
                    flag: "🇪🇨",
                },
                {
                    code: "+20",
                    name: "Egypt",
                    flag: "🇪🇬",
                },
                {
                    code: "+33",
                    name: "France",
                    flag: "🇫🇷",
                },
                {
                    code: "+502",
                    name: "Guatemala",
                    flag: "🇬🇹",
                },
                {
                    code: "+852",
                    name: "Hong Kong",
                    flag: "🇭🇰",
                },
                {
                    code: "+504",
                    name: "Honduras",
                    flag: "🇭🇳",
                },
                {
                    code: "+91",
                    name: "India",
                    flag: "🇮🇳",
                },
                {
                    code: "+81",
                    name: "Japan",
                    flag: "🇯🇵",
                },
                {
                    code: "+82",
                    name: "Korea",
                    flag: "🇰🇷",
                },
                {
                    code: "+965",
                    name: "Kuwait",
                    flag: "🇰🇼",
                },
                {
                    code: "+94",
                    name: "Sri Lanka",
                    flag: "🇱🇰",
                },
                {
                    code: "+52",
                    name: "Mexico",
                    flag: "🇲🇽",
                },
                {
                    code: "+60",
                    name: "Malaysia",
                    flag: "🇲🇾",
                },
                {
                    code: "+505",
                    name: "Nicaragua",
                    flag: "🇳🇮",
                },
                {
                    code: "+64",
                    name: "New Zealand",
                    flag: "🇳🇿",
                },
                {
                    code: "+31",
                    name: "Netherlands",
                    flag: "🇳🇱",
                },
                {
                    code: "+47",
                    name: "Norway",
                    flag: "🇳🇴",
                },
                {
                    code: "+92",
                    name: "Pakistan",
                    flag: "🇵🇰",
                },
                {
                    code: "+507",
                    name: "Panama",
                    flag: "🇵🇦",
                },
                {
                    code: "+51",
                    name: "Peru",
                    flag: "🇵🇪",
                },
                {
                    code: "+63",
                    name: "Philippines",
                    flag: "🇵🇭",
                },
                {
                    code: "+595",
                    name: "Paraguay",
                    flag: "🇵🇾",
                },
                {
                    code: "+974",
                    name: "Qatar",
                    flag: "🇶🇦",
                },
                {
                    code: "+7",
                    name: "Russia",
                    flag: "🇷🇺",
                },
                {
                    code: "+966",
                    name: "Saudi Arabia",
                    flag: "🇸🇦",
                },
                {
                    code: "+65",
                    name: "Singapore",
                    flag: "🇸🇬",
                },
                {
                    code: "+503",
                    name: "El Salvador",
                    flag: "🇸🇻",
                },
                {
                    code: "+886",
                    name: "Taiwan",
                    flag: "🇹🇼",
                },
                {
                    code: "+44",
                    name: "United Kingdom",
                    flag: "🇬🇧",
                },
                {
                    code: "+1",
                    name: "United States",
                    flag: "🇺🇸",
                },
                {
                    code: "+598",
                    name: "Uruguay",
                    flag: "🇺🇾",
                },
                {
                    code: "+58",
                    name: "Venezuela",
                    flag: "🇻🇪",
                },
                {
                    code: "+27",
                    name: "South Africa",
                    flag: "🇿🇦",
                },
            ],
            // Payment method data
            stripeInfo: {
                cardholderName: "",
            },
            paypalInfo: {
                email: "",
                password: "",
            },
            isProcessing: false,
            stripe: null,
            stripePublishableKey: 'pk_test_51S2f70LOgQMaKhoXeQ4HeMiyAvLMIPPAi5baHqqHbozWCMJOi2C63BfDNA6zfYYwGs1zf7OsEsa8GDweOwYqR31K00scL8c57Q',
            elements: null,
            cardElement: null,
        };
    },
    computed: {
        currentPrice() {
            if (!this.selectedPackage) return 0;
            const price = this.selectedBillingCycle === "annual"
                ? this.selectedPackage.annualPrice
                : this.selectedPackage.monthlyPrice;
            console.log('currentPrice calculation:', {
                selectedPackage: this.selectedPackage,
                selectedBillingCycle: this.selectedBillingCycle,
                price: price
            });
            return price || 0;
        },
        subtotal() {
            if (!this.selectedPackage) return 0;
            const basePrice = this.selectedBillingCycle === "annual"
                ? this.selectedPackage.annualPrice
                : this.selectedPackage.monthlyPrice;
            const quantity = this.selectedPackage.quantity || 1;
            const result = (basePrice || 0) * quantity;
            console.log('subtotal calculation:', {
                basePrice: basePrice,
                quantity: quantity,
                result: result
            });
            return result;
        },
        discount() {
            if (!this.selectedPackage || this.selectedBillingCycle !== "annual")
                return 0;
            // Calculate 20% discount for annual billing
            const monthlyPrice = this.selectedPackage.monthlyPrice || 0;
            const annualPrice = this.selectedPackage.annualPrice || 0;
            const quantity = this.selectedPackage.quantity || 1;
            
            const monthlyTotal = monthlyPrice * 12 * quantity;
            const annualTotal = annualPrice * quantity;
            return monthlyTotal - annualTotal;
        },
        total() {
            const subtotal = this.subtotal || 0;
            const setupFee = this.setupFee || 0;
            const discount = this.discount || 0;
            return subtotal + setupFee - discount;
        },
        canProceed() {
            return (
                this.selectedPackage &&
                this.roofrInfo.fullName &&
                this.roofrInfo.email &&
                this.roofrInfo.phone &&
                this.roofrInfo.country &&
                this.roofrInfo.termsAccepted
            );
        },

        canProceedToPayment() {
            const isValid = (
                this.selectedPackage &&
                this.roofrInfo.fullName &&
                this.roofrInfo.email &&
                this.roofrInfo.phone &&
                this.roofrInfo.country &&
                this.roofrInfo.address &&
                this.roofrInfo.city &&
                this.roofrInfo.state &&
                this.roofrInfo.zipCode &&
                this.roofrInfo.termsAccepted
            );
            
            // Debug logging (remove in production)
            console.log('Validation check:', {
                selectedPackage: !!this.selectedPackage,
                fullName: !!this.roofrInfo.fullName,
                email: !!this.roofrInfo.email,
                phone: !!this.roofrInfo.phone,
                country: !!this.roofrInfo.country,
                address: !!this.roofrInfo.address,
                city: !!this.roofrInfo.city,
                state: !!this.roofrInfo.state,
                zipCode: !!this.roofrInfo.zipCode,
                termsAccepted: !!this.roofrInfo.termsAccepted,
                isValid
            });
            
            return isValid;
        },
    },
    methods: {
        nextStep() {
            if (this.currentStep < 2 && this.canProceedToPayment) {
                this.currentStep++;
            }
        },
        
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },
        applyDiscount() {
            if (this.discountCode.trim()) {
                // Here you would typically validate the discount code with your backend
                this.$swal({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Discount code applied successfully!',
                    timer: 3000,
                    showConfirmButton: false
                });
            }
        },
        async completeSubscription() {
            if (!this.canProceed) {
                this.$swal({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Please fill in all required fields',
                    timer: 3000,
                    showConfirmButton: false
                });
                return;
            }

            try {
                // Show loading state
                this.isProcessing = true;

                // Prepare checkout data
                const checkoutData = {
                    roofr_info: {
                        full_name: this.roofrInfo.fullName,
                        email: this.roofrInfo.email,
                        phone: this.roofrInfo.phone,
                        country: this.roofrInfo.country,
                        city: this.roofrInfo.city,
                        state: this.roofrInfo.state,
                        zip_code: this.roofrInfo.zipCode,
                        address: this.roofrInfo.address,
                    },
                    package: {
                        plan_type: this.getSelectedPlanType(),
                        billing_cycle: this.selectedBillingCycle,
                    },
                    payment_method: this.selectedPaymentMethod,
                };

                // Add payment method specific data
                if (this.selectedPaymentMethod === 'stripe') {
                    // Create Stripe payment method using Stripe.js
                    const paymentMethodId = await this.createStripePaymentMethod();
                    checkoutData.stripe_info = {
                        payment_method_id: paymentMethodId,
                    };
                } else if (this.selectedPaymentMethod === 'paypal') {
                    checkoutData.paypal_info = {
                        email: this.paypalInfo.email,
                    };
                }

                // Send to backend
                const response = await window.axios.post('/subscription/checkout', checkoutData);

                if (response.data && response.data.success) {
                    this.$swal({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Subscription completed successfully! Redirecting to login...',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    
                    // Store subscription data for success page with null checks
                    if (response.data.subscription && response.data.subscription.subscription_id) {
                        localStorage.setItem('subscription_success_data', JSON.stringify({
                            id: response.data.subscription.subscription_id,
                            plan_name: response.data.subscription.plan_name || 'Unknown Plan',
                            billing_cycle: response.data.subscription.billing_cycle || 'monthly',
                            amount: response.data.subscription.amount || 0,
                            status: response.data.subscription.status || 'active'
                        }));
                    } else {
                        this.$swal({
                            icon: 'warning',
                            title: 'Warning!',
                            text: 'Subscription created but some data may be missing.',
                            timer: 3000,
                            showConfirmButton: false
                        });
                    }

                    // Handle PayPal approval URL if present
                    if (response.data.approval_url) {
                        // For PayPal, redirect to approval URL
                        window.location.href = response.data.approval_url;
                    } else {
                        // For Stripe or other payment methods, redirect to login page
                        const redirectUrl = response.data.redirect?.url || 'https://phpstack-1370828-5581814.cloudwaysapps.com/login';
                        const params = response.data.redirect?.params || {};
                        
                        // If it's an external URL, use window.location.href
                        if (redirectUrl.startsWith('http')) {
                            window.location.href = redirectUrl;
                        } else {
                            this.$router.push({
                                path: redirectUrl,
                                query: params
                            });
                        }
                    }
                    
                    // Fallback redirect to login page after 2.5 seconds
                    setTimeout(() => {
                        window.location.href = 'https://phpstack-1370828-5581814.cloudwaysapps.com/login';
                    }, 2500);
                } else {
                                            this.$swal({
                            icon: 'error',
                            title: 'Error!',
                            text: response.data.error || "Failed to process subscription",
                            timer: 3000,
                            showConfirmButton: false
                        });
                }

            } catch (error) {
                // Handle different types of errors
                if (error.response && error.response.data) {
                    if (error.response.data.errors) {
                        // Handle validation errors
                        const errors = error.response.data.errors;
                        const firstError = Object.values(errors)[0][0];
                        this.$swal({
                            icon: 'error',
                            title: 'Validation Error!',
                            text: firstError,
                            timer: 3000,
                            showConfirmButton: false
                        });
                    } else if (error.response.data.error) {
                        // Handle API errors
                        this.$swal({
                            icon: 'error',
                            title: 'Error!',
                            text: error.response.data.error,
                            timer: 3000,
                            showConfirmButton: false
                        });
                    } else {
                        // Handle other response errors
                        this.$swal({
                            icon: 'error',
                            title: 'Error!',
                            text: "An unexpected error occurred. Please try again.",
                            timer: 3000,
                            showConfirmButton: false
                        });
                    }
                } else if (error.message) {
                    // Handle network or other errors
                    this.$swal({
                        icon: 'error',
                        title: 'Network Error!',
                        text: "Network error. Please check your connection and try again.",
                        timer: 3000,
                        showConfirmButton: false
                    });
                } else {
                    // Handle unknown errors
                    this.$swal({
                        icon: 'error',
                        title: 'Unknown Error!',
                        text: "An unknown error occurred. Please try again.",
                        timer: 3000,
                        showConfirmButton: false
                    });
                }
            } finally {
                this.isProcessing = false;
            }
        },

        initializeStripe() {
            const initStripe = () => {
                try {
                    if (window.Stripe) {
                        this.stripe = window.Stripe(this.stripePublishableKey);
                        
                        // Initialize Elements after Stripe is ready
                        this.initializeElements();
                        return true;
                    } else {
                        return false;
                    }
                } catch (error) {
                    return false;
                }
            };

            // Try to initialize immediately
            if (!initStripe()) {
                // If not available, wait for it to load
                let attempts = 0;
                const maxAttempts = 10;
                const checkStripe = () => {
                    attempts++;
                    if (initStripe()) {
                        return; // Success
                    }
                    if (attempts < maxAttempts) {
                        setTimeout(checkStripe, 500); // Retry every 500ms
                    } else {
                        console.error('Failed to initialize Stripe after', maxAttempts, 'attempts');
                    }
                };
                checkStripe();
            }
        },

        initializeElements() {
            if (!this.stripe) {
                console.error('Stripe not initialized');
                return;
            }

            try {
                // Create Elements instance
                this.elements = this.stripe.elements({
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorPrimary: '#8b5cf6',
                            colorBackground: '#ffffff',
                            colorText: '#30313d',
                            colorDanger: '#df1b41',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            spacingUnit: '4px',
                            borderRadius: '4px',
                        }
                    }
                });

                // Create card element
                this.cardElement = this.elements.create('card', {
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                });

                // Mount the card element
                this.cardElement.mount('#card-element');

                // Handle real-time validation errors from the card Element
                this.cardElement.on('change', ({error}) => {
                    const displayError = document.getElementById('card-errors');
                    if (error) {
                        displayError.textContent = error.message;
                    } else {
                        displayError.textContent = '';
                    }
                });

            } catch (error) {
            }
        },

        async createStripePaymentMethod() {
            // Wait for Stripe to be initialized if it's not ready yet
            if (!this.stripe || !this.cardElement) {
                try {
                    await this.waitForStripe();
                } catch (error) {
                    // For testing purposes, create a mock payment method
                    return this.createMockPaymentMethod();
                }
            }

            if (!this.stripe || !this.cardElement) {
                return this.createMockPaymentMethod();
            }

            try {
                const { paymentMethod, error } = await this.stripe.createPaymentMethod({
                    type: 'card',
                    card: this.cardElement,
                    billing_details: {
                        name: this.stripeInfo.cardholderName,
                    },
                });

                if (error) {
                    throw new Error(error.message);
                }

                return paymentMethod.id;
            } catch (error) {
                throw error;
            }
        },

        createMockPaymentMethod() {
            // Create a mock payment method for testing when Stripe.js is not available
            const mockPaymentMethod = 'pm_test_' + Math.random().toString(36).substr(2, 9);
            return mockPaymentMethod;
        },

        waitForStripe() {
            return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 20;
                const checkStripe = () => {
                    attempts++;
                    if (this.stripe && this.cardElement) {
                        resolve();
                    } else if (attempts < maxAttempts) {
                        setTimeout(checkStripe, 250);
                    } else {
                        reject(new Error('Stripe initialization timeout'));
                    }
                };
                checkStripe();
            });
        },

        loadStripeScript() {
            return new Promise((resolve, reject) => {
                // Check if script is already loaded
                if (window.Stripe) {
                    resolve();
                    return;
                }

                // Check if script is already being loaded
                if (document.querySelector('script[src*="js.stripe.com"]')) {
                    // Script exists but Stripe not available yet, wait for it
                    const checkStripe = () => {
                        if (window.Stripe) {
                            resolve();
                        } else {
                            setTimeout(checkStripe, 100);
                        }
                    };
                    checkStripe();
                    return;
                }

                // Load the script
                const script = document.createElement('script');
                script.src = 'https://js.stripe.com/v3/';
                script.async = true;
                script.onload = () => {
                    resolve();
                };
                script.onerror = () => {
                    reject(new Error('Failed to load Stripe.js'));
                };
                document.head.appendChild(script);
            });
        },

        getSelectedPlanType() {
            // Determine plan type based on selected package
            if (this.selectedPackage) {
                return this.selectedPackage.id || 'professional';
            }
            return 'professional';
        },
        selectPaymentMethod(method) {
            this.selectedPaymentMethod = method;
            
            // Reinitialize Stripe Elements when switching to Stripe
            if (method === 'stripe' && this.stripe && !this.cardElement) {
                this.$nextTick(() => {
                    this.initializeElements();
                });
            }
        },
        toggleCountryDropdown() {
            this.showCountryDropdown = !this.showCountryDropdown;
        },
        selectCountry(country) {
            this.selectedCountry = country;
            this.showCountryDropdown = false;
        },
        handleClickOutside(event) {
            const isCountryCode = event.target.closest(".country-code");
            const isCountryDropdown = event.target.closest(".country-dropdown");
            
            if (!isCountryCode && !isCountryDropdown) {
                this.showCountryDropdown = false;
            }
        },
        // Payment formatting methods removed - now using Stripe Elements

        async loadPlans() {
            try {
                const response = await window.axios.get('/subscription/plans');
                if (response.data.plans) {
                    this.allPackages = response.data.plans;
                }
            } catch (error) {
                // Set default plans if API fails
                this.allPackages = {
                    starter: {
                        id: 'starter',
                        name: 'Starter Plan',
                        description: 'Perfect for small businesses',
                        monthlyPrice: 125,
                        annualPrice: 1200,
                        quantity: 1,
                        features: [
                            "75 max addendums per month",
                            "Print Addendums",
                            "Print Buyers Guides",
                            "Print Infosheets",
                            "Print QR Code Stickers"
                        ]
                    },
                    professional: {
                        id: 'professional',
                        name: 'Professional Plan',
                        description: 'Most popular choice for growing businesses',
                        monthlyPrice: 175,
                        annualPrice: 1680,
                        quantity: 1,
                        features: [
                            "Everything in Starter",
                            "Advanced Analytics",
                            "CRM Integration",
                            "Unlimited vehicles",
                            "Priority support"
                        ]
                    },
                    enterprise: {
                        id: 'enterprise',
                        name: 'Enterprise Plan',
                        description: 'Complete solution for large organizations',
                        monthlyPrice: 199,
                        annualPrice: 1910,
                        quantity: 1,
                        features: [
                            "Everything in Professional",
                            "Multi-location support",
                            "Custom integrations",
                            "Dedicated account manager",
                            "White-label options"
                        ]
                    }
                };
            }
        },

        setSelectedPackageFromURL() {
            // Get package from URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const packageType = urlParams.get("package");
            const billingCycle = urlParams.get("billing") || "monthly";

            console.log('URL parameters:', { packageType, billingCycle });
            console.log('Available packages:', this.allPackages);

            if (packageType && this.allPackages[packageType]) {
                this.selectedPackage = this.allPackages[packageType];
                console.log('Selected package from URL:', this.selectedPackage);
            } else {
                // Default to Professional if no package specified or if package not found
                if (this.allPackages.professional) {
                    this.selectedPackage = this.allPackages.professional;
                    console.log('Using default professional package:', this.selectedPackage);
                } else {
                    // If no packages loaded yet, set a default structure
                    this.selectedPackage = {
                        id: 'professional',
                        name: 'Professional Plan',
                        description: 'Most popular choice for growing businesses',
                        monthlyPrice: 175,
                        annualPrice: 1680,
                        quantity: 1,
                        features: [
                            "Everything in Starter",
                            "Advanced Analytics", 
                            "CRM Integration",
                            "Unlimited vehicles",
                            "Priority support"
                        ]
                    };
                    console.log('Using fallback package:', this.selectedPackage);
                }
            }

            // Set billing cycle
            if (billingCycle === "annual" || billingCycle === "monthly") {
                this.selectedBillingCycle = billingCycle;
            }
            
            console.log('Final selected package:', this.selectedPackage);
            console.log('Final billing cycle:', this.selectedBillingCycle);
        },
    },
    async mounted() {
        try {
            // Add click outside handler for country dropdown
            document.addEventListener("click", this.handleClickOutside);

            // Ensure dropdown starts closed
            this.showCountryDropdown = false;

            // Load Stripe.js dynamically if not available
            if (!window.Stripe) {
                await this.loadStripeScript();
            }

            // Initialize Stripe
            this.initializeStripe();

            // Load plans from API
            await this.loadPlans();

            // Get package from URL parameters
            this.setSelectedPackageFromURL();
            
        } catch (error) {
        }
    },
    beforeDestroy() {
        // Remove click outside handler
        document.removeEventListener("click", this.handleClickOutside);
    },
};
</script>

<style scoped>
.checkout-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    box-sizing: border-box;
    width: 100%;
}



/* Main Content Layout */
.main-content-layout {
    display: flex;
    gap: 2rem;
    align-items: stretch;
}

/* Left Side Section */
.left-side-section {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Right Side Section */
.right-side-section {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Package Review Section - Always Visible */
.package-review-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Step Sections */
.step-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.step-content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}



/* Back Button Container */
.back-button-container {
    margin-bottom: 1.5rem;
}

.back-button-container .back-btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
}

.back-button-container .back-btn:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
}

/* Step Actions */
.step-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
}

/* Validation Message */
.validation-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.875rem;
    text-align: center;
    transition: all 0.3s ease;
}

.validation-message i {
    color: #3b82f6;
}

.validation-message.success {
    color: #059669;
}

.validation-message.success i {
    color: #10b981;
}

.continue-btn, .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
}

.continue-btn {
    background: #8b5cf6;
    color: white;
    margin-left: auto;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
}

.continue-btn:hover:not(:disabled) {
    background: #7c3aed;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(139, 92, 246, 0.4);
}

.continue-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.6;
}

.continue-btn:not(:disabled) {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
    }
    50% {
        box-shadow: 0 2px 4px rgba(139, 92, 246, 0.6);
    }
    100% {
        box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
    }
}

.back-btn {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
}

.back-btn:hover {
    background: #e5e7eb;
    transform: translateY(-1px);
}

.main-title-section {
    text-align: center;
    margin-bottom: 0.5rem;
}

.checkout-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 1rem 0;
}

.section-header h2 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 1rem 0;
}

/* Delivery Options */
.delivery-options {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.delivery-option {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.delivery-option:hover {
    border-color: #8b5cf6;
}

.delivery-option.selected {
    border-color: #8b5cf6;
    background: #f3f4f6;
}

.option-icon {
    width: 32px;
    height: 32px;
    background: #8b5cf6;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.option-content {
    flex: 1;
}

.option-label {
    display: block;
    font-weight: 600;
    color: #1f2937;
    font-size: 0.875rem;
}

.option-description {
    display: block;
    font-size: 0.75rem;
    color: #6b7280;
}

.radio-button {
    width: 16px;
    height: 16px;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    position: relative;
}

.radio-button.selected::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #8b5cf6;
    border-radius: 50%;
}

/* Form Styles */
.customer-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Form Styles */
.roofr-form {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.form-row {
    display: flex;
    gap: 0.75rem;
}

.form-group {
    flex: 1;
}

.form-group.full-width {
    flex: none;
    width: 100%;
}

.form-group label {
    display: block;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.375rem;
    font-size: 0.875rem;
}

.form-group input,
.form-group select,
.form-group textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 0.875rem;
      transition: border-color 0.2s ease;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

/* Phone Input */
.phone-input {
    position: relative;
    display: flex;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    overflow: hidden;
}

.flag-emoji {
    font-size: 1rem;
    line-height: 1;
}

.phone-input input {
    border: none;
    border-radius: 0;
}

/* Country Dropdown Styles */
.country-code {
    position: relative;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem;
    background: #f9fafb;
    border-right: 1px solid #d1d5db;
    color: #374151;
    font-weight: 500;
    font-size: 0.875rem;
}

.country-code i {
    transition: transform 0.2s ease;
}

.country-code i.rotated {
    transform: rotate(180deg);
}

.country-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    max-height: 150px;
    overflow-y: auto;
    margin-top: 2px;
    width: 200px;
}

.country-option {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-bottom: 1px solid #f3f4f6;
}

.country-option:last-child {
    border-bottom: none;
}

.country-option:hover {
    background-color: #f9fafb;
}

.country-option .flag-emoji {
    font-size: 0.875rem;
    line-height: 1;
}

.country-option span:first-of-type {
    flex: 1;
    font-size: 0.75rem;
    color: #374151;
}

.country-code-text {
    font-size: 0.625rem;
    color: #6b7280;
    font-weight: 500;
}

/* Select Wrapper */
.select-wrapper {
    position: relative;
}

.select-wrapper select {
    appearance: none;
    padding-right: 2.5rem;
}

.select-wrapper i {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
    pointer-events: none;
}

/* Terms Section */
.terms-section {
    margin-top: 1rem;
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    display: none;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #d1d5db;
    border-radius: 4px;
    position: relative;
    flex-shrink: 0;
    margin-top: 0.125rem;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #8b5cf6;
    font-weight: bold;
}

.terms-text {
    font-size: 0.875rem;
    color: #374151;
    line-height: 1.5;
}

.terms-link {
    color: #8b5cf6;
    text-decoration: none;
}

.terms-link:hover {
    text-decoration: underline;
}



.section-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 1rem 0;
}

/* Cart Items */
.cart-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
}

.item-image img {
    width: 60px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
}

.item-details {
    flex: 1;
}

.item-name {
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 0.25rem 0;
    font-size: 0.875rem;
}

.item-quantity {
    font-size: 0.75rem;
    color: #6b7280;
}

.item-price {
    font-weight: 600;
    color: #1f2937;
}

/* Discount Section */
.discount-section {
    margin-bottom: 2rem;
}

.discount-input {
    display: flex;
    gap: 0.75rem;
}

.input-wrapper {
    flex: 1;
    position: relative;
}

.input-wrapper i {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
}

.input-wrapper input {
    padding-left: 2.5rem;
}

.apply-btn {
    padding: 0.75rem 1.5rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.apply-btn:hover {
    background: #2563eb;
}

/* Package Details */
.package-details {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.package-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.package-image {
    width: 60px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
}

.package-info {
    flex: 1;
}

.package-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 0.25rem 0;
}

.package-description {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0 0 0.5rem 0;
}

.package-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #a83119;
    margin-top: 0.5rem;
}

/* Billing Cycle Selector */
.billing-cycle-selector {
    margin: 1rem 0;
}

.billing-options {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.billing-option {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: white;
    position: relative;
}

.billing-option input[type="radio"] {
    display: none;
}

.billing-option.active {
    border-color: #a83119;
    background: #fef2f2;
}

.billing-option:hover {
    border-color: #a83119;
}

.billing-label {
    font-weight: 600;
    color: #374151;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.billing-price {
    font-size: 0.75rem;
    color: #6b7280;
    font-weight: 500;
}

.savings-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #059669;
    color: white;
    font-size: 0.625rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    white-space: nowrap;
}

.package-features {
    border-top: 1px solid #e5e7eb;
    padding-top: 1rem;
}

.features-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 0.75rem 0;
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #4c6371;
}

.feature-item i {
    color: #a83119;
    font-size: 0.875rem;
}

/* No Package Message */
.no-package-message {
    background: #fff;
    border: 2px dashed #e5e7eb;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
}

.message-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.message-content i {
    font-size: 2rem;
    color: #f59e0b;
}

.message-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
}

.message-content p {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
    max-width: 300px;
}

.select-package-btn {
    background: linear-gradient(135deg, #a83119 0%, #d1452a 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.select-package-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(168, 49, 25, 0.3);
}

/* Order Summary */
.order-summary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f9fafb;
    border-radius: 8px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
}

.summary-row.discount {
    color: #059669;
}

.summary-row.total {
    font-weight: 700;
    font-size: 1.125rem;
    color: #1f2937;
    border-top: 1px solid #e5e7eb;
    padding-top: 0.75rem;
    margin-top: 0.5rem;
}

/* Pay Button */
.pay-button {
    width: 100%;
    padding: 1rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 1.5rem;
}

.pay-button:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
}

.pay-button:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
}

/* Security Info */
.security-info {
    text-align: center;
}

.security-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #059669;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.security-description {
    font-size: 0.75rem;
    color: #6b7280;
    line-height: 1.4;
    margin: 0;
}

/* Payment Method Styles */

.payment-method-options {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.payment-method-option {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: white;
    min-height: auto;
    height: 2.5rem;
}

.payment-method-option:hover {
    border-color: #8b5cf6;
}

.payment-method-option.selected {
    border-color: #8b5cf6;
    background: #f3f4f6;
}

.payment-method-option svg {
    width: 16px;
    height: 16px;
}

.payment-method-option span {
    font-weight: 500;
    color: #1f2937;
    font-size: 0.8rem;
}

.payment-form-section {
    margin-top: 1.5rem;
}

.payment-form-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 1rem 0;
}

.card-input-wrapper,
.paypal-input-wrapper {
    position: relative;
}

.card-input-wrapper i,
.paypal-input-wrapper i {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
}

.card-input-wrapper input,
.paypal-input-wrapper input {
    padding-left: 2.5rem;
}

.paypal-note {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.75rem;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 6px;
    color: #1e40af;
    font-size: 0.875rem;
}

.paypal-note i {
    color: #3b82f6;
}

/* Stripe Elements Styles */
.stripe-element {
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: white;
    transition: border-color 0.2s ease;
}

.stripe-element:focus-within {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.stripe-errors {
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    min-height: 1.25rem;
}

.stripe-note {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.75rem;
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    border-radius: 6px;
    color: #0369a1;
    font-size: 0.875rem;
}

.stripe-note i {
    color: #0ea5e9;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .checkout-container {
        max-width: 100%;
        padding: 1.5rem;
    }
    
    .step-content {
        padding: 1.5rem;
    }
}

@media (max-width: 992px) {
    .checkout-container {
        padding: 1.25rem;
    }
    
    .main-title-section h1 {
        font-size: 1.75rem;
    }
    
    .section-title {
        font-size: 1.25rem;
    }
    
    .package-price {
        font-size: 1.125rem;
    }
}

@media (max-width: 768px) {
    .checkout-container {
        flex-direction: column;
        padding: 1rem;
        gap: 1.5rem;
    }

    .main-title-section h1 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .main-content-layout {
        flex-direction: column;
        gap: 1.5rem;
    }

    .step-content {
        padding: 1.5rem;
    }



    .form-row {
        flex-direction: column;
        gap: 1rem;
    }

    .payment-method-options {
        flex-direction: column;
        gap: 1rem;
    }

    .step-actions {
        flex-direction: column;
        gap: 1rem;
    }

    .continue-btn, .back-btn {
        width: 100%;
        justify-content: center;
    }
    
    .billing-options {
        flex-direction: column;
        gap: 1rem;
    }
    
    .billing-option {
        padding: 1rem;
    }
    
    .package-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .package-image {
        width: 80px;
        height: 60px;
    }
    
    .pay-button {
        font-size: 1rem;
        padding: 0.875rem;
    }
}

@media (max-width: 576px) {
    .checkout-container {
        padding: 0.75rem;
        gap: 1rem;
    }
    
    .main-title-section h1 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
    
    .step-content {
        padding: 1rem;
        border-radius: 8px;
    }
    
    .section-title {
        font-size: 1.125rem;
        margin-bottom: 0.75rem;
    }
    
    .form-group label {
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        padding: 0.75rem;
        font-size: 0.875rem;
    }
    
    .phone-input {
        flex-direction: column;
        border: none;
        gap: 0.5rem;
    }
    
    .country-code {
        border: 1px solid #d1d5db;
        border-radius: 4px;
        justify-content: center;
        padding: 0.75rem;
    }
    
    .phone-input input {
        border: 1px solid #d1d5db;
        border-radius: 4px;
    }
    
    .country-dropdown {
        width: 100%;
        max-height: 120px;
    }
    
    .billing-option {
        padding: 0.75rem;
    }
    
    .billing-label {
        font-size: 0.875rem;
    }
    
    .billing-price {
        font-size: 0.75rem;
    }
    
    .package-features {
        padding-top: 0.75rem;
    }
    
    .features-title {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }
    
    .feature-item {
        font-size: 0.875rem;
        margin-bottom: 0.375rem;
    }
    
    .order-summary {
        padding: 1rem;
        margin-bottom: 1rem;
    }
    
    .summary-row {
        font-size: 0.875rem;
    }
    
    .summary-row.total {
        font-size: 1rem;
        padding-top: 0.5rem;
        margin-top: 0.375rem;
    }
    
    .payment-method-option {
        padding: 0.375rem;
        gap: 0.25rem;
        height: 2.25rem;
    }
    
    .payment-method-option svg {
        width: 14px;
        height: 14px;
    }
    
    .payment-method-option span {
        font-size: 0.75rem;
    }
    
    .payment-form-title {
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }
    
    .paypal-note {
        padding: 0.5rem;
        font-size: 0.875rem;
    }
    
    .bottom-payment-section {
        padding: 1rem 0;
        margin-top: 1rem;
    }
    
    .pay-button {
        font-size: 0.875rem;
        padding: 0.75rem;
        margin-bottom: 1rem;
    }
    
    .security-info {
        margin-top: 1rem;
    }
    
    .security-header {
        font-size: 0.875rem;
        margin-bottom: 0.375rem;
    }
    
    .security-description {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .checkout-container {
        padding: 0.5rem;
    }
    
    .package-section,
    .order-section,
    .payment-method-section {
        padding: 0.75rem;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        padding: 0.625rem;
        font-size: 0.875rem;
    }
    
    .phone-input {
        gap: 0.375rem;
    }
    
    .country-code {
        padding: 0.625rem;
        font-size: 0.875rem;
    }
    
    .billing-option {
        padding: 0.625rem;
    }
    
    .payment-method-option {
        padding: 0.375rem;
        gap: 0.25rem;
        height: 2rem;
    }
    
    .order-summary {
        padding: 0.75rem;
    }
    
    .pay-button {
        padding: 0.625rem;
        font-size: 0.875rem;
    }
}

/* Landscape orientation adjustments for mobile */
@media (max-width: 768px) and (orientation: landscape) {
    .checkout-container {
        padding: 0.75rem;
    }
    
    .top-section {
        gap: 1rem;
    }
    
    .package-section,
    .order-section,
    .payment-method-section {
        padding: 1rem;
    }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .checkout-container {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
}

/* Print styles */
@media print {
    .checkout-container {
        box-shadow: none;
        background: white;
    }
    
    .pay-button {
        display: none;
    }
    
    .security-info {
        display: none;
    }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .form-group input,
    .form-group select,
    .form-group textarea {
        min-height: 44px; /* iOS recommended touch target size */
    }
    
    .pay-button {
        min-height: 44px;
    }
    
    .billing-option {
        min-height: 44px;
    }
    
    .payment-method-option {
        min-height: 44px;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>