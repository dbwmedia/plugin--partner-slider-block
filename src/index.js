import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	MediaUpload,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	SelectControl,
	TextControl,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";
import "./style.scss";

registerBlockType("logo-slider-block/slider", {
	title: __("Logo Slider", "logo-slider-block"),
	description: __(
		"Professional infinity logo slider with customizable speed, spacing and hover-pause. Perfect for client, partner or sponsor logos.",
		"logo-slider-block"
	),
	icon: "images-alt2",
	category: "common",
	attributes: {
		images: {
			type: "array",
			default: [],
		},
		speed: {
			type: "string",
			default: "medium",
		},
		gap: {
			type: "string",
			default: "medium",
		},
		marginSize: {
			type: "string",
			default: "medium",
		},
		logoHeight: {
			type: "string",
			default: "50",
		},
		overlayEnabled: {
			type: "boolean",
			default: true,
		},
		overlayColor: {
			type: "string",
			default: "#ffffff",
		},
		blackLogos: {
			type: "boolean",
			default: false,
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const {
			images,
			speed,
			gap,
			marginSize,
			logoHeight,
			overlayEnabled,
			overlayColor,
			blackLogos,
		} = attributes;

		const addImage = (selection) => {
			const selectedImages = Array.isArray(selection) ? selection : [selection];
			const newImages = selectedImages.map((img) => {
				const imageUrl =
					img.url || img.sizes?.full?.url || img.source_url || "";
				return { id: img.id, url: imageUrl, link: "" };
			});
			setAttributes({ images: [...images, ...newImages] });
		};

		const removeImage = (index) => {
			const updated = images.filter((_, i) => i !== index);
			setAttributes({ images: updated });
		};

		const updateImageLink = (linkValue, index) => {
			const updated = [...images];
			updated[index].link = linkValue;
			setAttributes({ images: updated });
		};

		return (
			<div className="dbw-partner-slider-editor-wrapper">
				<InspectorControls>
					<PanelBody title={__("Images", "logo-slider-block")}>
						<p>
							{__(
								"Add logos to create your infinity slider.",
								"logo-slider-block"
							)}
						</p>
					</PanelBody>
					<PanelBody
						title={__("Speed", "logo-slider-block")}
						initialOpen={true}
					>
						<SelectControl
							label={__("Slider Speed", "logo-slider-block")}
							value={speed}
							options={[
								{
									label: __("Slow", "logo-slider-block"),
									value: "slow",
								},
								{
									label: __("Medium", "logo-slider-block"),
									value: "medium",
								},
								{
									label: __("Fast", "logo-slider-block"),
									value: "fast",
								},
							]}
							onChange={(newSpeed) => setAttributes({ speed: newSpeed })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Logo Spacing", "logo-slider-block")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Gap between logos", "logo-slider-block")}
							value={gap}
							options={[
								{
									label: __("Small", "logo-slider-block"),
									value: "small",
								},
								{
									label: __("Medium", "logo-slider-block"),
									value: "medium",
								},
								{
									label: __("Large", "logo-slider-block"),
									value: "large",
								},
							]}
							onChange={(newGap) => setAttributes({ gap: newGap })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Margins", "logo-slider-block")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Top/Bottom Margin", "logo-slider-block")}
							value={marginSize}
							options={[
								{
									label: __("Small (25px)", "logo-slider-block"),
									value: "small",
								},
								{
									label: __("Medium (50px)", "logo-slider-block"),
									value: "medium",
								},
								{
									label: __("Large (75px)", "logo-slider-block"),
									value: "large",
								},
							]}
							onChange={(newMargin) => setAttributes({ marginSize: newMargin })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Logo Size", "logo-slider-block")}
						initialOpen={false}
					>
						<RangeControl
							label={__("Maximum Logo Height (px)", "logo-slider-block")}
							help={__(
								"Sets the maximum height for logos. Width adjusts automatically.",
								"logo-slider-block"
							)}
							value={parseInt(logoHeight)}
							onChange={(value) =>
								setAttributes({ logoHeight: value.toString() })
							}
							min={30}
							max={150}
							step={5}
						/>
						<SelectControl
							label={__("Quick Select", "logo-slider-block")}
							value={logoHeight}
							options={[
								{
									label: __("Small (40px)", "logo-slider-block"),
									value: "40",
								},
								{
									label: __("Medium (50px)", "logo-slider-block"),
									value: "50",
								},
								{
									label: __("Large (70px)", "logo-slider-block"),
									value: "70",
								},
								{
									label: __("Extra Large (100px)", "logo-slider-block"),
									value: "100",
								},
							]}
							onChange={(newHeight) => setAttributes({ logoHeight: newHeight })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Overlay Settings", "logo-slider-block")}
						initialOpen={false}
					>
						<ToggleControl
							label={__("Show Overlay", "logo-slider-block")}
							help={__(
								"Shows a gradient overlay at the edges of the slider.",
								"logo-slider-block"
							)}
							checked={overlayEnabled}
							onChange={(value) => setAttributes({ overlayEnabled: value })}
						/>
						{overlayEnabled && (
							<PanelColorSettings
								title={__("Overlay Color", "logo-slider-block")}
								colorSettings={[
									{
										value: overlayColor,
										onChange: (color) =>
											setAttributes({ overlayColor: color || "#ffffff" }),
										label: __(
											"Background color for overlay",
											"logo-slider-block"
										),
									},
								]}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Logo Display", "logo-slider-block")}
						initialOpen={false}
					>
						<ToggleControl
							label={__("Convert to Black", "logo-slider-block")}
							help={__(
								"Converts all logos to black for a uniform appearance.",
								"logo-slider-block"
							)}
							checked={blackLogos}
							onChange={(value) => setAttributes({ blackLogos: value })}
						/>
					</PanelBody>
				</InspectorControls>

				<div className="dbw-partner-slider-editor">
					<div className="dbw-partner-slider-images">
						{images.map((image, index) => (
							<div className="dbw-partner-slider-image" key={index}>
								{image.url && (
									<img
										src={image.url}
										alt={__("Logo", "logo-slider-block")}
										style={{
											filter: blackLogos ? "brightness(0)" : "none",
											maxHeight: logoHeight + "px",
										}}
									/>
								)}
								<TextControl
									label={__("Logo Link (optional)", "logo-slider-block")}
									value={image.link || ""}
									onChange={(val) => updateImageLink(val, index)}
								/>
								<Button
									isDestructive
									variant="secondary"
									className="dbw-remove-button"
									onClick={() => removeImage(index)}
								>
									{__("Remove", "logo-slider-block")}
								</Button>
							</div>
						))}
					</div>
					<MediaUpload
						onSelect={addImage}
						allowedTypes={["image"]}
						multiple
						render={({ open }) => (
							<Button onClick={open} isPrimary>
								{__("Add Images", "logo-slider-block")}
							</Button>
						)}
					/>
				</div>
			</div>
		);
	},
	save: ({ attributes }) => {
		const {
			images,
			speed,
			gap,
			marginSize,
			logoHeight,
			overlayEnabled,
			overlayColor,
			blackLogos,
		} = attributes;

		const speedMap = {
			slow: "40s",
			medium: "25s",
			fast: "15s",
		};
		const duration = speedMap[speed] || "25s";

		const gapMap = {
			small: "20px",
			medium: "40px",
			large: "60px",
		};
		const gapValue = gapMap[gap] || "40px";

		const marginMap = {
			small: "25px",
			medium: "50px",
			large: "75px",
		};
		const marginValue = marginMap[marginSize] || "50px";

		const sliderClasses = ["dbw-partner-slider"];
		if (!overlayEnabled) {
			sliderClasses.push("no-overlay");
		}
		if (blackLogos) {
			sliderClasses.push("black-logos");
		}

		const renderImages = () =>
			images.map((image, index) => {
				const imgElement = <img src={image.url} alt="" />;

				return (
					<div key={index} className="dbw-slider-item">
						{image.link ? (
							<a
								href={image.link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Logo Link"
							>
								{imgElement}
							</a>
						) : (
							imgElement
						)}
					</div>
				);
			});

		return (
			<div
				className={sliderClasses.join(" ")}
				style={{
					"--scroll-duration": duration,
					"--slide-gap": gapValue,
					"--outer-margin": marginValue,
					"--overlay-color": overlayColor || "#ffffff",
					"--logo-count": images.length,
					"--logo-height": logoHeight + "px",
				}}
			>
				<div className="dbw-slider-wrapper">
					<div className="dbw-slider-track">
						{/* First set of logos */}
						{renderImages()}
						{/* Duplicate for seamless loop */}
						{renderImages()}
						{/* Extra duplicates for few logos */}
						{images.length < 8 && renderImages()}
						{images.length < 5 && renderImages()}
					</div>
				</div>
			</div>
		);
	},
});
