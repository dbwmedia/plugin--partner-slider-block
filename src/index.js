import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { PanelBody, Button, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";
import "./style.scss";

registerBlockType("dbw-partner-slider-block/slider", {
	title: __("DBW Partner Slider", "dbw-partner-slider-block"),
	description: __(
		"Ein Infinity-Slider für Partner-Logos (dbw), mit anpassbarer Geschwindigkeit, Abstand und Hover-Stop.",
		"dbw-partner-slider-block"
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
			default: "medium", // Optionen: small, medium, large
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const { images, speed, gap } = attributes;

		const addImage = (selection) => {
			const selectedImages = Array.isArray(selection) ? selection : [selection];
			const newImages = selectedImages.map((img) => {
				const imageUrl =
					img.url || img.sizes?.full?.url || img.source_url || "";
				return { id: img.id, url: imageUrl };
			});
			setAttributes({ images: [...images, ...newImages] });
		};

		const removeImage = (index) => {
			const updated = images.filter((_, i) => i !== index);
			setAttributes({ images: updated });
		};

		return (
			<div className="dbw-partner-slider-editor-wrapper">
				<InspectorControls>
					<PanelBody title={__("Bilder verwalten", "dbw-partner-slider-block")}>
						<p>
							{__(
								"Füge Partner-Logos hinzu oder entferne sie, um Deinen Infinity-Slider anzupassen.",
								"dbw-partner-slider-block"
							)}
						</p>
					</PanelBody>
					<PanelBody
						title={__("Geschwindigkeit", "dbw-partner-slider-block")}
						initialOpen={true}
					>
						<SelectControl
							label={__("Slider-Geschwindigkeit", "dbw-partner-slider-block")}
							value={speed}
							options={[
								{
									label: __("Langsam", "dbw-partner-slider-block"),
									value: "slow",
								},
								{
									label: __("Mittel", "dbw-partner-slider-block"),
									value: "medium",
								},
								{
									label: __("Schnell", "dbw-partner-slider-block"),
									value: "fast",
								},
							]}
							onChange={(newSpeed) => setAttributes({ speed: newSpeed })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Abstand zwischen Logos", "dbw-partner-slider-block")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Logo-Abstand", "dbw-partner-slider-block")}
							value={gap}
							options={[
								{
									label: __("Klein", "dbw-partner-slider-block"),
									value: "small",
								},
								{
									label: __("Mittel", "dbw-partner-slider-block"),
									value: "medium",
								},
								{
									label: __("Groß", "dbw-partner-slider-block"),
									value: "large",
								},
							]}
							onChange={(newGap) => setAttributes({ gap: newGap })}
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
										alt={__("Partner Logo", "dbw-partner-slider-block")}
									/>
								)}
								<Button
									isDestructive
									variant="secondary"
									className="dbw-remove-button"
									onClick={() => removeImage(index)}
								>
									{__("Entfernen", "dbw-partner-slider-block")}
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
								{__("Bilder hinzufügen", "dbw-partner-slider-block")}
							</Button>
						)}
					/>
				</div>
			</div>
		);
	},
	save: ({ attributes }) => {
		const { images, speed, gap } = attributes;

		const speedMap = {
			slow: "30s",
			medium: "20s",
			fast: "10s",
		};
		const duration = speedMap[speed] || "20s";

		const gapMap = {
			small: "0 20px",
			medium: "0 40px",
			large: "0 60px",
		};
		const gapValue = gapMap[gap] || "10px";

		return (
			<div
				className="dbw-partner-slider"
				style={{ "--scroll-duration": duration, "--slide-gap": gapValue }}
			>
				<div className="dbw-slider-track">
					{images.map((image, index) => (
						<div key={index} className="dbw-slider-item">
							{image.url && (
								<img
									src={image.url}
									alt={__("Partner Logo", "dbw-partner-slider-block")}
								/>
							)}
						</div>
					))}
					{images.map((image, index) => (
						<div key={"dup-" + index} className="dbw-slider-item">
							{image.url && (
								<img
									src={image.url}
									alt={__("Partner Logo", "dbw-partner-slider-block")}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		);
	},
});
